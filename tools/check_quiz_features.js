/* 做题模块验收：笔记 / 收藏 / 看答案 / 上下题 / 问AI / 统计条 / 快捷键 */
const puppeteer = require('C:/Users/djej/.workbuddy/binaries/node/workspace/node_modules/puppeteer');

const URL = process.env.URL || 'http://127.0.0.1:8766/index.html';
let pass = 0, fail = 0;
function check(ok, label, extra) {
  if (ok) { pass++; console.log('  ✓ ' + label); }
  else { fail++; console.log('  ✗ ' + label + (extra ? ' → ' + extra : '')); }
}

(async () => {
  const b = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true, args: ['--no-sandbox']
  });
  const p = await b.newPage();
  await p.setViewport({ width: 1280, height: 1000 });
  const errs = [];
  p.on('dialog', d => d.accept());
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  await p.goto(URL, { waitUntil: 'networkidle0' });
  await p.evaluate(() => { localStorage.clear(); });
  await p.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));

  console.log('\n[1] 进入自测并开始');
  await p.click('#nav-quiz');
  await new Promise(r => setTimeout(r, 200));
  await p.select('#quiz-limit', '30');
  await p.click('#btn-quiz-start');
  await new Promise(r => setTimeout(r, 400));

  const pre = await p.evaluate(() => ({
    hasMeta: !!document.querySelector('.meta-row'),
    hasPill: !!document.querySelector('.score-pill'),
    hasBar: !!document.querySelector('.progress-bar > span'),
    progress: (document.querySelector('#quiz-progress') || {}).textContent,
    pill: (document.querySelector('#score-text') || {}).textContent,
    noteBtn: !!document.querySelector('#toggle-notes'),
    favBtn: !!document.querySelector('#btn-quiz-fav'),
    btns: ['btn-prev', 'btn-submit', 'btn-peek', 'btn-ai-ds', 'btn-ai-qw', 'btn-next']
      .map(id => !!document.getElementById(id)),
    prevDisabled: document.getElementById('btn-prev').disabled,
    fillWidth: document.querySelector('#progress-fill').style.width
  }));
  check(pre.hasMeta && pre.hasPill && pre.hasBar, '信息条/正确率/进度条都在');
  check(/^1 \/ \d+$/.test(pre.progress), '进度显示 "1 / N"', pre.progress);
  check(/答对 0 \/ 已答 0 · 正确率 —/.test(pre.pill), '统计初值正确', pre.pill);
  check(pre.noteBtn && pre.favBtn, '题头有「笔记」「收藏」按钮');
  check(pre.btns.every(Boolean), '六个动作按钮齐全（上一题/提交/看答案/问DS/问千问/下一题）');
  check(pre.prevDisabled === true, '第一题「上一题」禁用');

  console.log('\n[2] 笔记：展开 → 输入 → 落盘');
  await p.click('#toggle-notes');
  await new Promise(r => setTimeout(r, 200));
  const hasEditor = await p.evaluate(() => !!document.querySelector('#note-input'));
  check(hasEditor, '点「笔记」展开编辑框');
  await p.click('#note-input');
  await p.type('#note-input', '存储引擎选 InnoDB，支持事务和行锁');
  await new Promise(r => setTimeout(r, 600));
  const noteSaved = await p.evaluate(() => {
    const id = PPR.getSession().list[PPR.getSession().idx].id;
    const raw = JSON.parse(localStorage.getItem('myq-notes-v1') || '{}');
    return { id, saved: raw[id] || '', status: (document.querySelector('#note-status') || {}).textContent };
  });
  check(noteSaved.saved.includes('InnoDB'), '笔记写入 localStorage', noteSaved.saved);
  check(noteSaved.status === '已保存', '状态显示「已保存」', noteSaved.status);
  const notedId = noteSaved.id;

  console.log('\n[3] 收藏');
  await p.click('#btn-quiz-fav');
  await new Promise(r => setTimeout(r, 200));
  const fav = await p.evaluate(() => ({
    on: document.querySelector('#btn-quiz-fav').classList.contains('on'),
    txt: document.querySelector('#btn-quiz-fav').textContent.trim(),
    ls: JSON.parse(localStorage.getItem('myq-fav-v1') || '[]')
  }));
  check(fav.on && /已收藏/.test(fav.txt), '收藏按钮变为已收藏', fav.txt);
  check(fav.ls.length === 1, '收藏写入 localStorage', JSON.stringify(fav.ls));

  console.log('\n[4] 作答与判分');
  const ansInfo = await p.evaluate(() => {
    const q = PPR.getSession().list[PPR.getSession().idx];
    return { id: q.id, type: q.type, answer: q.answer, opts: document.querySelectorAll('.option').length };
  });
  if (ansInfo.type === 'single') {
    // 故意选一个错项（若只有一个选项则选第一个）
    await p.evaluate(() => {
      const q = PPR.getSession().list[PPR.getSession().idx];
      const wrong = Array.from(document.querySelectorAll('.option')).find(o => o.dataset.key !== q.answer);
      (wrong || document.querySelector('.option')).click();
    });
  } else {
    await p.type('#blank-input', '这不是正确答案');
  }
  await p.click('#btn-submit');
  await new Promise(r => setTimeout(r, 300));
  const graded = await p.evaluate(() => ({
    verdict: (document.querySelector('.verdict') || {}).textContent,
    vcls: (document.querySelector('.verdict') || {}).className,
    boxes: document.querySelectorAll('.answer-panel .box').length,
    hasAnswerBox: !!document.querySelector('.box.answer-box'),
    src: (document.querySelector('.answer-panel .src') || {}).textContent,
    correctOpt: document.querySelectorAll('.option.correct').length,
    wrongOpt: document.querySelectorAll('.option.wrong').length,
    pill: document.querySelector('#score-text').textContent,
    submitDisabled: document.getElementById('btn-submit').disabled,
    nextDisabled: document.getElementById('btn-next').disabled
  }));
  check(/回答不正确|已看答案/.test(graded.verdict || ''), '答错有判定', graded.verdict);
  check(graded.hasAnswerBox && graded.boxes >= 2, '答案框 + 解析框都在', 'boxes=' + graded.boxes);
  check(/课件 P\d+/.test(graded.src || ''), '标注课件页码', graded.src);
  check(graded.pill.includes('已答 1'), '统计条已答 +1', graded.pill);
  check(graded.submitDisabled === true, '提交后禁用提交按钮');

  console.log('\n[5] 上一题 / 下一题');
  await p.click('#btn-next');
  await new Promise(r => setTimeout(r, 300));
  const afterNext = await p.evaluate(() => ({
    prog: document.querySelector('#quiz-progress').textContent,
    prevDisabled: document.getElementById('btn-prev').disabled,
    revealed: !!document.querySelector('.answer-panel:not(.hidden)')
  }));
  check(/^2 \/ /.test(afterNext.prog), '下一题后进度为 2', afterNext.prog);
  check(afterNext.prevDisabled === false, '第二题「上一题」可用');
  check(afterNext.revealed === false, '新题答案面板收起');
  await p.click('#btn-prev');
  await new Promise(r => setTimeout(r, 300));
  const backProg = await p.$eval('#quiz-progress', e => e.textContent);
  check(/^1 \/ /.test(backProg), '上一题回到第 1 题', backProg);

  console.log('\n[6] 看答案（不做答）');
  await p.click('#btn-next');
  await new Promise(r => setTimeout(r, 250));
  await p.click('#btn-peek');
  await new Promise(r => setTimeout(r, 300));
  const peeked = await p.evaluate(() => ({
    verdict: (document.querySelector('.verdict') || {}).textContent,
    clss: (document.querySelector('.verdict') || {}).className,
    wrongIds: JSON.parse(localStorage.getItem('myq-progress-v1') || '{}')
  }));
  check(/已看答案/.test(peeked.verdict), '看答案有提示', peeked.verdict);
  check(/peek/.test(peeked.clss), 'verdict 用 peek 样式', peeked.clss);
  const peekRecorded = Object.keys(peeked.wrongIds).some(k => peeked.wrongIds[k].peek === 1);
  check(peekRecorded, '看答案的题记为看答案（进错题）');

  console.log('\n[7] 快捷键');
  // 用一组「未答过的单选题」验证，否则已揭晓的题会忽略按键（这是预期行为）
  await p.evaluate(() => {
    const prog = PPR.getProgress();
    const singles = PPR.getBank()
      .filter(q => q.type === 'single' && !prog[q.id])
      .slice(0, 5);
    PPR.startQuiz(singles);
  });
  await new Promise(r => setTimeout(r, 300));
  await p.evaluate(() => { if (document.activeElement) document.activeElement.blur(); });
  await p.keyboard.press('2');
  await new Promise(r => setTimeout(r, 200));
  const kbSel = await p.evaluate(() => {
    const el = document.querySelector('.option.selected');
    return el ? el.getAttribute('data-key') : null;
  });
  check(kbSel === 'B', '按 2 选中 B', String(kbSel));
  await p.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 300));
  const kbSubmit = await p.evaluate(() => !!document.querySelector('.verdict'));
  check(kbSubmit, '按 Enter 提交');
  const beforeArrow = await p.$eval('#quiz-progress', e => e.textContent);
  await p.keyboard.press('ArrowRight');
  await new Promise(r => setTimeout(r, 250));
  const kbNext = await p.$eval('#quiz-progress', e => e.textContent);
  check(/^2 \/ 5$/.test(kbNext), '按 → 翻到下一题（' + beforeArrow + ' → ' + kbNext + '）');
  await p.keyboard.press('0');
  await new Promise(r => setTimeout(r, 300));
  const kbPeek = await p.evaluate(() => (document.querySelector('.verdict') || {}).textContent || '');
  check(/已看答案/.test(kbPeek), '按 0 触发看答案', kbPeek);
  await p.keyboard.press('ArrowLeft');
  await new Promise(r => setTimeout(r, 250));
  const kbPrev = await p.$eval('#quiz-progress', e => e.textContent);
  check(/^1 \/ 5$/.test(kbPrev), '按 ← 回到上一题', kbPrev);

  console.log('\n[8] 问 DeepSeek / 问千问');
  const aiOpened = await p.evaluate(() => {
    window.__opened = [];
    const orig = window.open;
    window.open = function (u) { window.__opened.push(u); return { opener: null }; };
    document.getElementById('btn-ai-ds').click();
    document.getElementById('btn-ai-qw').click();
    window.open = orig;
    return window.__opened;
  });
  check(aiOpened.length === 2, '两个 AI 按钮各打开一次', aiOpened.length);
  check(/chat\.deepseek\.com/.test(aiOpened[0]), 'DeepSeek 链接正确', aiOpened[0]);
  check(/qianwen\.com/.test(aiOpened[1]), '千问链接正确', aiOpened[1]);
  const hasQ = /[?&]q=/.test(aiOpened[0] || '');
  check(hasQ, '链接带上 ?q= 预填内容', (aiOpened[0] || '').slice(0, 60));
  if (hasQ) {
    const prompt = decodeURIComponent((aiOpened[0].split('?q=')[1] || ''));
    check(prompt.length > 60 && /MySQL/.test(prompt), 'prompt 含题目与 MySQL 上下文（' + prompt.length + ' 字）');
  }
  const hintShown = await p.evaluate(() => {
    const el = document.getElementById('ai-hint');
    return { hidden: el.classList.contains('hidden'), text: el.textContent.slice(0, 30) };
  });
  check(!hintShown.hidden, 'AI 提示条出现', hintShown.text);

  console.log('\n[9] 笔记刷新后保留 + 只有该题带出');
  await p.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));
  const persisted = await p.evaluate((id) => {
    const n = PPR.getNotes();
    return { has: !!n[id], text: n[id] || '' };
  }, notedId);
  check(persisted.has && persisted.text.includes('InnoDB'), '刷新后笔记仍在', persisted.text);

  await p.evaluate((id) => {
    const q = PPR.getBank().filter(x => x.id === id);
    PPR.setView('quiz');
    PPR.startQuiz(q);
    document.getElementById('toggle-notes').click();
  }, notedId);
  await new Promise(r => setTimeout(r, 300));
  const reNotes = await p.evaluate(() => ({
    val: (document.querySelector('#note-input') || {}).value || '',
    fav: (document.querySelector('#btn-quiz-fav') || {}).className || ''
  }));
  check(reNotes.val.includes('InnoDB'), '再做到该题自动带出笔记', reNotes.val);
  check(/on/.test(reNotes.fav), '该题收藏状态保留', reNotes.fav);

  console.log('\n[10] 交卷小结');
  await p.click('#btn-quiz-finish');
  await new Promise(r => setTimeout(r, 300));
  const summary = await p.evaluate(() => ({
    visible: !document.getElementById('quiz-summary').classList.contains('hidden'),
    big: (document.querySelector('.summary-box .big') || {}).textContent
  }));
  check(summary.visible, '交卷后显示小结');
  check(/%$/.test(summary.big || ''), '小结显示正确率', summary.big);

  console.log('\n[11] 笔记导出/导入入口');
  const noteTools = await p.evaluate(() => ({
    exp: !!document.getElementById('btn-notes-export'),
    imp: !!document.getElementById('btn-notes-import'),
    file: !!document.getElementById('notes-file')
  }));
  check(noteTools.exp && noteTools.imp && noteTools.file, '导出/导入按钮与文件选择器就位');

  console.log('\n[12] 练习页工具栏（复刻原站）');
  await p.click('#btn-summary-home');
  await new Promise(r => setTimeout(r, 250));
  await p.click('#btn-quiz-start');
  await new Promise(r => setTimeout(r, 350));
  const toolbar = await p.evaluate(() => ({
    modes: document.querySelectorAll('#practice-modes .chip').length,
    ch: document.getElementById('p-chapter').options.length - 1,
    type: !!document.getElementById('p-type'),
    scope: document.getElementById('p-scope').options.length,
    shuffle: !!document.getElementById('p-shuffle'),
    btns: ['btn-p-restart', 'btn-quiz-finish', 'btn-quiz-exit', 'btn-p-notes-export', 'btn-p-notes-import']
      .map(id => !!document.getElementById(id)),
    noteN: (document.getElementById('p-notes-n') || {}).textContent
  }));
  check(toolbar.modes === 3, '模式切换 全部/收藏/错题', toolbar.modes);
  check(toolbar.ch === 7, '章节下拉 7 章', toolbar.ch);
  check(toolbar.type && toolbar.scope === 3, '题型 + 范围下拉（全部/没做过/做过）');
  check(toolbar.shuffle, '随机顺序勾选框');
  check(toolbar.btns.every(Boolean), '重新开始/交卷/返回首页/导出笔记/导入 齐全');
  check(Number(toolbar.noteN) >= 1, '导出笔记显示条数', toolbar.noteN);
  check(await p.$eval('#quiz-shuffle', e => e.checked) === true, '首页「随机顺序」默认勾选');

  console.log('\n[13] 工具栏筛选生效');
  // 默认题量是「全部题目」，这里显式切到 30 题分组，顺带验证工具栏题量能写回首页
  await p.evaluate(() => {
    const el = document.getElementById('p-limit');
    el.value = '30';
    el.dispatchEvent(new Event('change'));
  });
  await new Promise(r => setTimeout(r, 450));
  await p.select('#p-chapter', '4');
  await new Promise(r => setTimeout(r, 450));
  const ch4 = await p.evaluate(() => {
    const s = PPR.getSession();
    return {
      n: s.list.length,
      all4: s.list.every(q => q.chapter === 4),
      prog: document.getElementById('quiz-progress').textContent
    };
  });
  check(ch4.all4 && ch4.n > 0, '切到第 4 章后题池全是第 4 章（' + ch4.n + ' 题）');
  check(/^1 \/ /.test(ch4.prog), '切筛选后回到第 1 题', ch4.prog);

  // 取消随机 → 应按题库原顺序出题
  await p.evaluate(() => {
    const el = document.getElementById('p-shuffle');
    el.checked = false;
    el.dispatchEvent(new Event('change'));
  });
  await new Promise(r => setTimeout(r, 450));
  const ordered = await p.evaluate(() => {
    const prog = PPR.getProgress();
    const ch4 = PPR.getBank().filter(q => q.chapter === 4);
    const expect = ch4.filter(q => !prog[q.id]).concat(ch4.filter(q => prog[q.id])).slice(0, 30).map(q => q.id);
    const got = PPR.getSession().list.map(q => q.id);
    return { same: expect.join(',') === got.join(','), first: got[0], expFirst: expect[0], n: got.length, en: expect.length };
  });
  check(ordered.same, '取消随机后按题库顺序（首题 ' + ordered.first + '）', '实得 ' + ordered.n + ' 题 期望 ' + ordered.en + ' 题 / 首题 ' + ordered.first + ' vs ' + ordered.expFirst);

  // 收藏模式（先把章节放开，否则收藏题被章节筛选挡掉）
  await p.select('#p-chapter', 'all');
  await new Promise(r => setTimeout(r, 400));
  await p.click('#practice-modes .chip[data-mode="favorites"]');
  await new Promise(r => setTimeout(r, 450));
  const favMode = await p.evaluate(() => ({
    n: PPR.getSession().list.length,
    favs: JSON.parse(localStorage.getItem('myq-fav-v1') || '[]').length,
    mode: document.querySelector('#practice-modes .chip.active').getAttribute('data-mode'),
    prog: document.getElementById('quiz-progress').textContent
  }));
  check(favMode.mode === 'favorites' && favMode.n === favMode.favs,
    '切「收藏」模式只出收藏题', 'mode=' + favMode.mode + ' n=' + favMode.n + ' favs=' + favMode.favs);

  // 恢复全部 + 重新开始
  await p.click('#practice-modes .chip[data-mode="all"]');
  await new Promise(r => setTimeout(r, 400));
  await p.select('#p-chapter', 'all');
  await new Promise(r => setTimeout(r, 400));
  await p.click('#btn-p-restart');
  await new Promise(r => setTimeout(r, 400));
  const restarted = await p.evaluate(() => ({
    prog: document.getElementById('quiz-progress').textContent,
    n: PPR.getSession().list.length,
    chip: document.querySelector('#quiz-modes .chip.active').getAttribute('data-mode'),
    chSel: document.getElementById('quiz-chapter').value
  }));
  check(/^1 \/ /.test(restarted.prog) && restarted.chSel === 'all', '点「重新开始」按当前筛选重置', restarted.prog);
  check(restarted.chip === 'all', '首页模式 chip 与练习工具栏同步', restarted.chip);

  console.log('\n[14] 笔记导出 / 导入');
  const dlName = await p.evaluate(() => {
    let captured = null;
    const origClick = HTMLAnchorElement.prototype.click;
    const origCreate = URL.createObjectURL;
    HTMLAnchorElement.prototype.click = function () { captured = this.download; };
    URL.createObjectURL = function () { return 'blob:fake'; };
    document.getElementById('btn-p-notes-export').click();
    HTMLAnchorElement.prototype.click = origClick;
    URL.createObjectURL = origCreate;
    return captured;
  });
  check(/^mysql-quiz-notes-\d{8}\.json$/.test(dlName || ''), '导出笔记生成备份文件名', String(dlName));

  const noteId = await p.evaluate(() => PPR.getBank()[0].id);
  await p.evaluate((id) => {
    const payload = {
      app: 'mysql-quiz', kind: 'notes', version: 1,
      notes: {}
    };
    payload.notes[id] = { stem: '', note: '导入测试用的笔记' };
    const file = new File([JSON.stringify(payload)], 'notes.json', { type: 'application/json' });
    const dt = new DataTransfer();
    dt.items.add(file);
    const input = document.getElementById('notes-file');
    input.files = dt.files;
    input.dispatchEvent(new Event('change'));
  }, noteId);
  await new Promise(r => setTimeout(r, 600));
  const imported = await p.evaluate((id) => PPR.getNotes()[id] || '', noteId);
  check(imported === '导入测试用的笔记', '导入笔记写入成功', imported);

  console.log('\n[15] 题量：默认全部 / 分组 / 再来一组');
  await p.click('#btn-quiz-exit');
  await new Promise(r => setTimeout(r, 200));
  await p.select('#quiz-limit', 'all');
  await new Promise(r => setTimeout(r, 150));
  const cntAll = await p.$eval('#filter-count', e => e.textContent);
  const mAll = /题池 (\d+) 题 · 本组 (\d+) 题/.exec(cntAll);
  check(!!mAll && Number(mAll[1]) >= 400 && mAll[1] === mAll[2], '选「全部题目」时本组 = 题池', cntAll);
  await p.click('#btn-quiz-start');
  await new Promise(r => setTimeout(r, 400));
  const allProg = await p.$eval('#quiz-progress', e => e.textContent);
  const mProg = /^1 \/ (\d+)$/.exec(allProg);
  check(!!mProg && Number(mProg[1]) >= 400, '全部题量不再被截到 30', allProg);

  await p.click('#btn-quiz-exit');
  await new Promise(r => setTimeout(r, 200));
  await p.select('#quiz-limit', '30');
  await new Promise(r => setTimeout(r, 150));
  const cnt30 = await p.$eval('#filter-count', e => e.textContent);
  check(/本组 30 题$/.test(cnt30), '切到 30 题时计数同步', cnt30);
  await p.click('#btn-quiz-start');
  await new Promise(r => setTimeout(r, 400));
  const prog30 = await p.$eval('#quiz-progress', e => e.textContent);
  check(/^1 \/ 30$/.test(prog30), '分组模式按 30 题抽题', prog30);
  await p.click('#btn-quiz-finish');
  await new Promise(r => setTimeout(r, 300));
  const groupBtn = await p.evaluate(() => {
    const b = document.getElementById('btn-next-group');
    return b ? { hidden: b.classList.contains('hidden'), text: b.textContent } : null;
  });
  check(!!groupBtn && !groupBtn.hidden && /剩 \d+ 题/.test(groupBtn.text), '分组完成后出现「再来一组」', groupBtn && groupBtn.text);
  await p.click('#btn-summary-home');
  await new Promise(r => setTimeout(r, 200));
  await p.select('#quiz-limit', 'all');

  console.log('\n[16] 控制台');
  check(errs.length === 0, '控制台零错误', errs.slice(0, 3).join(' | '));

  console.log('\n──────────────');
  console.log('通过 ' + pass + ' / ' + (pass + fail));
  await b.close();
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error('脚本异常:', e); process.exit(1); });
