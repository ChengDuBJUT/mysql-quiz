/* 选项乱序验收：node tools/check_option_shuffle.js
   覆盖：分布是否打平 / 答案跟着选项搬家后内容仍正确 / 判分闭环 / 关开关回原序 / 刷新后已答题顺序不变 */
const puppeteer = require('C:/Users/djej/.workbuddy/binaries/node/workspace/node_modules/puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const URL = process.env.URL || 'http://127.0.0.1:8766/index.html';
let pass = 0, fail = 0;
function check(ok, label, extra) {
  if (ok) { pass++; console.log('  ✓ ' + label + (extra ? ' → ' + extra : '')); }
  else { fail++; console.log('  ✗ ' + label + (extra ? ' → ' + extra : '')); }
}
const strip = s => String(s).replace(/^[A-Za-z][.、．)]\s*/, '');

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

  console.log('\n[1] 默认开启 + 选项乱序开关就位');
  const ui = await p.evaluate(() => ({
    home: !!document.getElementById('quiz-opt-shuffle'),
    homeOn: (document.getElementById('quiz-opt-shuffle') || {}).checked,
    on: window.PPR.getOptShuffle()
  }));
  check(ui.home && ui.homeOn && ui.on === true, '首页「选项乱序」默认勾选', JSON.stringify(ui));

  console.log('\n[2] 452 道单选题：答案分布被拉平');
  const dist = await p.evaluate(() => {
    const bank = window.PPR.getBank().filter(q => q.type === 'single');
    const c = { A: 0, B: 0, C: 0, D: 0 };
    let moved = 0, sameText = 0;
    bank.forEach(q => {
      const v = window.PPR.presentQuestion(q);
      c[v.answer] = (c[v.answer] || 0) + 1;
      if (v.answer !== q.answer) moved++;
      // 答案字母搬位置后，指向的选项正文必须还是原来那条正确答案
      const orig = q.options.find(o => o.charAt(0).toUpperCase() === String(q.answer)) || '';
      const now = v.options.find(o => o.charAt(0) === v.answer) || '';
      if (o_strip(now) === o_strip(orig)) sameText++;
    });
    function o_strip(s) { return String(s).replace(/^[A-Za-z][.、．)]\s*/, ''); }
    return { c, n: bank.length, moved, sameText, bankDist: bank.reduce((m, q) => (m[q.answer] = (m[q.answer] || 0) + 1, m), {}) };
  });
  const fair = ['A', 'B', 'C', 'D'].every(k => dist.c[k] >= 75 && dist.c[k] <= 155);
  check(fair, '打乱后 A/B/C/D 分布均衡（各约 113）', JSON.stringify(dist.c) + ' / 原分布 ' + JSON.stringify(dist.bankDist));
  check(dist.moved / dist.n > 0.6, '大部分题的正确项已离开原位置', dist.moved + '/' + dist.n);
  check(dist.sameText === dist.n, '答案字母搬家后指向的正文仍是原正确项', dist.sameText + '/' + dist.n);

  console.log('\n[3] 关闭开关 → 回到题库原顺序');
  const off = await p.evaluate(() => {
    window.PPR.setOptShuffle(false);
    const bank = window.PPR.getBank().filter(q => q.type === 'single').slice(0, 60);
    const same = bank.every(q => window.PPR.presentQuestion(q).answer === q.answer);
    window.PPR.setOptShuffle(true);
    return { same, homeOn: document.getElementById('quiz-opt-shuffle').checked };
  });
  check(off.same, '关闭后答案字母与题库一致');
  check(off.homeOn === true, '重新打开后开关同步回勾选状态');

  console.log('\n[4] UI 判分闭环：选错判错，高亮项与答案字母一致');
  const judgeTest = await p.evaluate(() => {
    const bank = window.PPR.getBank().find(q => q.type === 'single');
    window.PPR.setView('quiz');
    window.PPR.startQuiz([bank]);
    const v = window.PPR.getSession().list[0];
    const clean = s => String(s).replace(/^[A-Za-z][.、．)]\s*/, '');
    const opts = Array.from(document.querySelectorAll('#question-card .option'));
    const wrong = opts.find(o => o.getAttribute('data-key') !== v.answer);
    wrong.click();
    document.getElementById('btn-submit').click();
    return {
      verdict: (document.querySelector('.verdict') || {}).textContent || '',
      correctText: clean((document.querySelector('.option.correct') || {}).textContent || ''),
      ansBody: clean(v.options.find(o => o.charAt(0) === v.answer) || ''),
      wrongMarked: document.querySelectorAll('#question-card .option.wrong').length,
      ok: window.PPR.getProgress()[bank.id].ok
    };
  });
  check(/回答不正确/.test(judgeTest.verdict), '选错项判为不正确', judgeTest.verdict);
  check(judgeTest.correctText === judgeTest.ansBody, '「正确答案」高亮项 = 答案字母所指的项', judgeTest.correctText + ' vs ' + judgeTest.ansBody);
  check(judgeTest.wrongMarked === 1 && judgeTest.ok === 0, '选错的项标红且记为答错', '标红 ' + judgeTest.wrongMarked + ' 项 / ok=' + judgeTest.ok);

  console.log('\n[5] 刷新后：已答题沿用当时那次的选项顺序');
  const before = await p.evaluate(() => {
    localStorage.clear();
    const bank = window.PPR.getBank().filter(q => q.type === 'single');
    const clean = s => String(s).replace(/^[A-Za-z][.、．)]\s*/, '');
    window.PPR.setView('quiz');
    window.PPR.startQuiz([bank[3]]);
    const v = window.PPR.getSession().list[0];
    const pick = document.querySelectorAll('#question-card .option')[0];
    pick.click();
    document.getElementById('btn-submit').click();
    return {
      id: v.id, order: v._order, answer: v.answer,
      pickedText: clean(pick.textContent),
      rightText: clean((document.querySelector('.option.correct') || {}).textContent || '')
    };
  });
  await p.reload({ waitUntil: 'networkidle0' });
  await sleep(300);
  const after = await p.evaluate((id) => {
    const clean = s => String(s).replace(/^[A-Za-z][.、．)]\s*/, '');
    const bank = window.PPR.getBank().find(q => q.id === id);
    window.PPR.setView('quiz');
    window.PPR.startQuiz([bank]);
    const v = window.PPR.getSession().list[0];
    const sel = document.querySelector('#question-card .option.selected');
    const correct = document.querySelector('#question-card .option.correct');
    return {
      order: v._order, answer: v.answer,
      selectedText: sel ? clean(sel.textContent) : '',
      correctText: correct ? clean(correct.textContent) : '',
      saved: JSON.parse(localStorage.getItem('myq-progress-v1') || '{}')[id]
    };
  }, before.id);
  check(after.order && after.order.join('') === before.order.join(''), '顺序与作答时完全一致', JSON.stringify(after.order));
  check(after.selectedText === before.pickedText, '「你的答案」仍指向当时选中的那项', after.selectedText + ' vs ' + before.pickedText);
  check(after.correctText === before.rightText, '「正确答案」高亮项不变', after.correctText);
  check(after.saved && Array.isArray(after.saved.o), '进度里存下了当时的选项顺序 o', JSON.stringify(after.saved && after.saved.o));

  console.log('\n[6] 控制台');
  check(errs.length === 0, '零错误', errs.slice(0, 3).join(' | ') || 'none');

  console.log('\n──────────────');
  console.log('通过 ' + pass + ' / ' + (pass + fail));
  await b.close();
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error('脚本异常:', e); process.exit(1); });
