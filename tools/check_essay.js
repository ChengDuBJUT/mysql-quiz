/* 考试大题模块验收：node tools/check_essay.js
   覆盖：分组展示 / tab 过滤 / 考纲自查表跳转 / 参考答案折叠 / 草稿自动保存 / 已掌握标记 / 备份 */
const puppeteer = require('C:/Users/djej/.workbuddy/binaries/node/workspace/node_modules/puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const URL = process.env.URL || 'http://127.0.0.1:8766/index.html';
let pass = 0, fail = 0;
function check(ok, label, extra) {
  if (ok) { pass++; console.log('  ✓ ' + label + (extra ? ' → ' + extra : '')); }
  else { fail++; console.log('  ✗ ' + label + (extra ? ' → ' + extra : '')); }
}
function head(t) { console.log('\n' + t); }

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
  p.on('dialog', d => d.accept());
  await p.goto(URL, { waitUntil: 'networkidle0' });
  await p.evaluate(() => localStorage.clear());
  await p.reload({ waitUntil: 'networkidle0' });
  await sleep(300);

  head('[1] 总览：53 道大题 / 7 组 + 全部 tab');
  await p.click('#nav-essay'); await sleep(300);
  const overview = await p.evaluate(() => ({
    cards: document.querySelectorAll('.big-card').length,
    tabs: Array.from(document.querySelectorAll('#big-tabs .chip')).length,
    stat: document.getElementById('big-stats').innerText.replace(/\n/g, ' '),
    active: document.getElementById('view-essay').classList.contains('active')
  }));
  check(overview.active, '导航切到大题视图');
  check(overview.cards === 53, '全部 tab 显示 53 张卡', String(overview.cards));
  check(overview.tabs === 8, '8 个 tab（全部 + 7 组）', overview.tabs + ' 个');
  check(/53/.test(overview.stat) && /已掌握/.test(overview.stat), '顶部统计就位', overview.stat);

  head('[2] 按分组过滤');
  const tabTest = await p.evaluate(() => {
    const clickTab = (t) => {
      const c = Array.from(document.querySelectorAll('#big-tabs .chip')).find(x => x.textContent.includes(t));
      c.click();
      return document.querySelectorAll('.big-card').length;
    };
    return { qa: clickTab('问答题'), lab3: clickTab('实验三'), lab6: clickTab('实验六') };
  });
  check(tabTest.qa === 13, '问答题分组 13 道', String(tabTest.qa));
  check(tabTest.lab3 === 10, '实验三分组 10 道', String(tabTest.lab3));
  check(tabTest.lab6 === 6, '实验六分组 6 道', String(tabTest.lab6));

  head('[3] 考纲自查表：13 个考点都有题兜住');
  const syl = await p.evaluate(() => ({
    rows: document.querySelectorAll('.syl-row').length,
    zero: Array.from(document.querySelectorAll('.syl-hit')).filter(e => e.classList.contains('zero')).length,
    hits: Array.from(document.querySelectorAll('.syl-hit')).map(e => e.textContent.trim())
  }));
  check(syl.rows === 13, '13 行（12 个强调点 + E-R 图）', String(syl.rows));
  check(syl.zero === 0, '每个考点在题库里都有命中题', syl.hits.join(' '));

  const jump = await p.evaluate(async () => {
    document.querySelectorAll('.syl-row')[8].click();
    await new Promise(r => setTimeout(r, 400));
    const card = document.querySelector('.big-card[data-id="qa-09"]');
    return {
      tab: document.querySelector('#big-tabs .chip.active').textContent.trim(),
      exist: !!card,
      open: card ? !card.querySelector('.big-answer').classList.contains('hidden') : false
    };
  });
  check(/问答题/.test(jump.tab) && jump.exist && jump.open,
    '点第 9 行跳到「存储过程和函数的区别」并展开答案', JSON.stringify(jump));

  await p.evaluate(() => {
    Array.from(document.querySelectorAll('#big-tabs .chip')).find(c => c.textContent.includes('实验六')).click();
  });
  await sleep(200);

  head('[4] 参考答案：折叠 / 要点 / SQL 代码块');
  const reveal = await p.evaluate(() => {
    const card = document.querySelector('.big-card');
    const box = card.querySelector('.big-answer');
    const before = box.classList.contains('hidden');
    card.querySelector('.big-reveal').click();
    return {
      before, after: box.classList.contains('hidden'),
      btn: card.querySelector('.big-reveal').textContent,
      sqlBlocks: card.querySelectorAll('.sql-block').length,
      points: card.querySelectorAll('.big-points li').length
    };
  });
  check(reveal.before === true && reveal.after === false, '默认收起，点击后展开', reveal.before + '→' + reveal.after);
  check(/收起/.test(reveal.btn), '按钮文字变成「收起参考答案」', reveal.btn);
  check(reveal.sqlBlocks > 0, '实验题展开后有 SQL 代码块', reveal.sqlBlocks + ' 段');
  check(reveal.points > 0, '展开后有答题要点列表', reveal.points + ' 条');

  head('[5] 草稿自动保存 + 刷新保留');
  const draft = await p.evaluate(async () => {
    const card = document.querySelector('.big-card');
    const id = card.getAttribute('data-id');
    const ta = card.querySelector('.big-draft');
    ta.focus();
    ta.value = 'create table t(id int primary key);';
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise(r => setTimeout(r, 700));
    const store = JSON.parse(localStorage.getItem('myq-bigdraft-v1') || '{}');
    return { id, saved: store[id] || '', stat: document.getElementById('big-stats').innerText.replace(/\n/g, ' ') };
  });
  check(/create table/.test(draft.saved), '输入后自动写入 localStorage', draft.id);
  check(/1 写过草稿/.test(draft.stat), '统计里的「写过草稿」跟着变', draft.stat);

  await p.reload({ waitUntil: 'networkidle0' });
  await sleep(300);
  await p.click('#nav-essay'); await sleep(250);
  const afterReload = await p.evaluate((id) => {
    const card = document.querySelector('.big-card[data-id="' + id + '"]');
    return card ? card.querySelector('.big-draft').value : '';
  }, draft.id);
  check(/create table/.test(afterReload), '刷新后草稿仍在', afterReload.slice(0, 24));

  head('[6] 标记已掌握 + 分组计数');
  const done = await p.evaluate(() => {
    const card = document.querySelector('.big-card');
    const btn = card.querySelector('.big-done-btn');
    btn.click();
    return {
      on: btn.classList.contains('on'),
      text: btn.textContent,
      cardDone: card.classList.contains('done'),
      // 刷新后 tab 回到「全部」，第一张卡是问答题的 qa-01
      tabText: Array.from(document.querySelectorAll('#big-tabs .chip')).find(c => c.textContent.includes('问答题')).textContent.trim(),
      stored: Object.keys(JSON.parse(localStorage.getItem('myq-bigdone-v1') || '{}')).length
    };
  });
  check(done.on && /已掌握/.test(done.text), '按钮切到「✓ 已掌握」', done.text);
  check(done.cardDone, '卡片进入 done 状态');
  check(/1\/13/.test(done.tabText), '分组 tab 上的 x/y 计数跟着涨', done.tabText);
  check(done.stored === 1, 'localStorage 记下 1 道', String(done.stored));

  head('[7] 导出备份包含大题数据');
  const backup = await p.evaluate(async () => {
    let captured = null;
    const orig = URL.createObjectURL;
    URL.createObjectURL = function (blob) { captured = blob; return 'blob:fake'; };
    const origClick = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function () {};
    document.getElementById('btn-export').click();
    URL.createObjectURL = orig;
    HTMLAnchorElement.prototype.click = origClick;
    if (!captured) return null;
    const d = JSON.parse(await captured.text());
    return { version: d.version, hasDraft: !!d.bigDraft, hasDone: !!d.bigDone };
  });
  check(!!backup && backup.hasDraft && backup.hasDone, '备份 JSON 含 bigDraft / bigDone', JSON.stringify(backup));

  head('[8] 控制台');
  check(errs.length === 0, '零错误', errs.slice(0, 3).join(' | ') || 'none');

  console.log('\n──────────────');
  console.log('通过 ' + pass + ' / ' + (pass + fail));
  await b.close();
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error('脚本异常:', e); process.exit(1); });
