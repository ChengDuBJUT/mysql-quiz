/* 浏览器验收脚本：node tools/check_site.js
   覆盖：数据层 / 章节渲染 / 精读详情 / 自测判分 / 收藏 / 错题 / 进度持久化 / 视图切换 / 控制台零错误 */
const puppeteer = require('C:/Users/djej/.workbuddy/binaries/node/workspace/node_modules/puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const ok = [], bad = [];
function check(cond, label, detail) {
  (cond ? ok : bad).push(label + (detail !== undefined ? ' → ' + detail : ''));
}

(async () => {
  const b = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true, args: ['--no-sandbox']
  });
  const p = await b.newPage();
  await p.setViewport({ width: 1280, height: 1000 });
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });

  await p.goto('http://127.0.0.1:8766/index.html', { waitUntil: 'networkidle0' });
  await sleep(400);

  // 1. 数据层
  const d = await p.evaluate(() => {
    const R = window.REVIEW_DATA || [], Q = window.PPT_QUESTIONS || [];
    return {
      chapters: R.length,
      sections: R.reduce((s, c) => s + (c.sections || []).length, 0),
      points: R.reduce((s, c) => s + c.sections.reduce((t, x) => t + (x.points || []).length, 0), 0),
      total: Q.length,
      single: Q.filter(q => q.type === 'single').length,
      blank: Q.filter(q => q.type === 'blank').length,
      withPage: Q.filter(q => q.page).length,
      chaptersCovered: new Set(Q.map(q => q.chapter)).size,
      ids: Q.map(q => q.id),
      badOpts: Q.filter(q => q.type === 'single' &&
        q.options.filter(o => /^[A-Za-z][.、．)]\s*\S/.test(o)).length < 3).map(q => q.id),
      badAnswer: Q.filter(q => q.type === 'single' &&
        !q.options.filter(o => /^[A-Za-z][.、．)]\s*\S/.test(o)).map(o => o[0].toUpperCase()).includes(q.answer)).map(q => q.id)
    };
  });
  check(d.chapters === 7, '7 章数据', d.chapters);
  check(d.sections >= 40, '小节数 >= 40', d.sections);
  check(d.total >= 400, '题目数 >= 400', d.total);
  check(d.single > 0 && d.blank > 0, '选择/填空均存在', `${d.single}/${d.blank}`);
  check(d.withPage === d.total, '全部题目带页码', `${d.withPage}/${d.total}`);
  check(d.chaptersCovered === 7, '题目覆盖 7 章', d.chaptersCovered);
  check(new Set(d.ids).size === d.ids.length, '题目 id 唯一');
  check(d.badOpts.length === 0, '选项无空/切碎', d.badOpts.join(',') || 'none');
  check(d.badAnswer.length === 0, '答案字母在有效选项内', d.badAnswer.join(',') || 'none');

  // 2. 章节卡片
  const cards = await p.$$eval('.chapter-card', els => els.length);
  check(cards === 7, '首屏 7 张章节卡片', cards);
  const statN = await p.$$eval('#review-stats .stat', els => els.length);
  check(statN === 4, '精读页 4 个统计卡', statN);

  // 3. 精读详情：点第 7 章
  await p.click('.chapter-card[data-ch="4"]');
  await sleep(200);
  const detail = await p.evaluate(() => ({
    hidden: document.getElementById('review-home').classList.contains('hidden'),
    title: document.querySelector('#review-detail-body h2')?.textContent || '',
    sections: document.querySelectorAll('#review-detail-body .section-block').length,
    points: document.querySelectorAll('#review-detail-body .point-list li').length,
    pages: document.querySelectorAll('#review-detail-body .page-tag').length
  }));
  check(detail.hidden && detail.title.includes('数据检索'), '精读详情打开且标题正确', detail.title);
  check(detail.sections > 0 && detail.points > 0, '详情含小节与知识点', `${detail.sections}/${detail.points}`);
  check(detail.pages > 0, '详情含页码标注', detail.pages);
  await p.click('#btn-review-back');
  await sleep(150);
  check(await p.$eval('#review-home', e => !e.classList.contains('hidden')), '返回章节列表');

  // 4. 视图切换
  await p.click('#nav-quiz'); await sleep(150);
  check(await p.$eval('#view-quiz', e => e.classList.contains('active')), '切到自测视图');
  await p.click('#nav-stats'); await sleep(150);
  check(await p.$eval('#view-stats', e => e.classList.contains('active')), '切到统计视图');
  await p.click('#nav-essay'); await sleep(150);
  const essay = await p.$eval('#view-essay', e => e.textContent.includes('待资料齐全'));
  check(essay, '大题预留入口显示待补说明');
  await p.click('#nav-quiz'); await sleep(150);

  // 5. 自测：选一道单选，答对
  await p.evaluate(() => { localStorage.removeItem('myq-progress-v1'); localStorage.removeItem('myq-fav-v1'); });
  await p.reload({ waitUntil: 'networkidle0' }); await sleep(300);
  await p.click('#nav-quiz'); await sleep(100);
  await p.click('#btn-quiz-start'); await sleep(200);
  const first = await p.evaluate(() => {
    const q = window.PPT_QUESTIONS.find(x => x.type === 'single');
    window.PPR.startQuiz([q]);
    return { id: q.id, answer: q.answer };
  });
  await sleep(150);
  await p.click(`.option[data-key="${first.answer}"]`);
  await p.click('#btn-submit'); await sleep(150);
  const verdict = await p.$eval('.verdict', e => e.textContent);
  check(verdict.includes('正确'), '单选判分正确', verdict);
  check(await p.$eval('.answer-panel .src', e => /课件 P\d+/.test(e.textContent)), '解析含课件出处');
  // 收藏（题头胶囊按钮）
  await p.click('#btn-quiz-fav'); await sleep(100);
  check(await p.$eval('#btn-quiz-fav', e => e.classList.contains('on')), '收藏按钮生效');
  await p.click('#btn-quiz-finish'); await sleep(200);
  check(await p.$eval('#view-quiz', e => !!e.querySelector('#quiz-summary:not(.hidden)')), '交卷后进入完成页');

  // 6. 填空判分（等价写法）
  const fill = await p.evaluate(() => {
    const q = window.PPT_QUESTIONS.find(x => x.type === 'blank' && (x.answer || []).length >= 1);
    window.PPR.startQuiz([q]);
    return { alt: q.answer[q.answer.length - 1], std: q.answer[0] };
  });
  await sleep(150);
  await p.type('#blank-input', fill.alt);
  await p.click('#btn-submit'); await sleep(150);
  const fillVerdict = await p.$eval('.verdict', e => e.textContent);
  check(fillVerdict.includes('正确'), '填空等价写法判对', `${fill.alt} vs ${fill.std} → ${fillVerdict}`);

  // 7. 进度持久化
  const before = await p.evaluate(() => Object.keys(window.PPR.getProgress()).length);
  await p.reload({ waitUntil: 'networkidle0' }); await sleep(300);
  const after = await p.evaluate(() => Object.keys(window.PPR.getProgress()).length);
  check(after === before && after >= 2, '刷新后进度保留', `${before} → ${after}`);

  // 8. 错题筛选
  const wrongFlow = await p.evaluate(() => {
    const q = window.PPT_QUESTIONS.find(x => x.type === 'single');
    const pid = 'myq-progress-v1';
    const pr = JSON.parse(localStorage.getItem(pid) || '{}');
    pr[q.id] = { a: 1, ok: 0, peek: 0, u: 'Z', t: Date.now() };
    localStorage.setItem(pid, JSON.stringify(pr));
    return q.id;
  });
  await p.reload({ waitUntil: 'networkidle0' }); await sleep(300);
  await p.click('#nav-quiz'); await sleep(100);
  await p.click('#quiz-modes .chip[data-mode="wrong"]'); await sleep(100);
  const wrongCount = await p.$eval('#filter-count', e => e.textContent);
  check(/题池 \d+ 题/.test(wrongCount), '错题筛选有结果', wrongCount);

  // 9. 控制台
  check(errs.length === 0, '控制台零错误', errs.join(' | ') || 'none');

  console.log('\n===== 通过 (' + ok.length + ') =====');
  ok.forEach(x => console.log('  ✅ ' + x));
  if (bad.length) {
    console.log('\n===== 失败 (' + bad.length + ') =====');
    bad.forEach(x => console.log('  ❌ ' + x));
  }
  console.log('\n控制台错误: ' + (errs.length ? errs.join(' | ') : 'none'));
  await b.close();
  process.exit(bad.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
