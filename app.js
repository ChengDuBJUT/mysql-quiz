/* MySQL 课件精读 · 复习站 —— 交互逻辑
   约定：开关/会话状态用内存，内容数据（进度/收藏）用 localStorage。 */
(function () {
  'use strict';

  var REVIEW = Array.isArray(window.REVIEW_DATA) ? window.REVIEW_DATA : [];
  var BANK = Array.isArray(window.PPT_QUESTIONS) ? window.PPT_QUESTIONS : [];
  var CHAPTERS = REVIEW.slice().sort(function (a, b) { return a.chapter - b.chapter; });
  var BY_ID = {};
  BANK.forEach(function (q) { BY_ID[q.id] = q; });

  /* ---------------- localStorage ---------------- */
  var PROGRESS_KEY = 'myq-progress-v1';
  var FAV_KEY = 'myq-fav-v1';
  var THEME_KEY = 'myq-theme';

  function loadJSON(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch (e) { return fallback; }
  }
  var progress = loadJSON(PROGRESS_KEY, {});   // { qid: { a:1, ok:0|1, peek:0|1, t:ts } }
  var favs = loadJSON(FAV_KEY, []);            // [qid]

  function saveProgress() {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }
    catch (e) { alert('进度保存失败（浏览器存储不可用或已满），建议先导出备份。'); }
  }
  function saveFavs() {
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); }
    catch (e) { alert('收藏保存失败，建议先导出备份。'); }
  }
  function isFav(id) { return favs.indexOf(id) !== -1; }
  function toggleFav(id) {
    var i = favs.indexOf(id);
    if (i === -1) favs.push(id); else favs.splice(i, 1);
    saveFavs(); updateFavCounts();
    return isFav(id);
  }
  function wrongIds() {
    return BANK.filter(function (q) {
      var p = progress[q.id]; return p && p.a && !p.ok;
    }).map(function (q) { return q.id; });
  }
  function updateFavCounts() {
    var f = document.getElementById('chip-fav-n'); if (f) f.textContent = favs.filter(function (id) { return BY_ID[id]; }).length;
    var w = document.getElementById('chip-wrong-n'); if (w) w.textContent = wrongIds().length;
  }

  /* ---------------- 工具 ---------------- */
  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // 选项过滤：只保留「有内容」的选项，避免切碎/空选项导致 answer 字母错位
  function optionList(q) {
    if (!q || q.type !== 'single' || !Array.isArray(q.options)) return [];
    return q.options.filter(function (o) { return /^[A-Za-z][.、．)]\s*\S/.test(String(o).trim()); });
  }
  // 填空归一化：去掉中英文分隔符与空白，小写化（等价写法判定）
  function normBlank(s) {
    return String(s == null ? '' : s).toLowerCase()
      .replace(/[，,、；;/｜|]/g, '')
      .replace(/[\s\u3000]/g, '')
      .replace(/[。．.]$/, '');
  }
  function judge(q, userAns, peeked) {
    if (peeked) return false;                 // 看答案按未掌握计入已答，不计入答对
    if (q.type === 'single') return String(userAns || '') === String(q.answer || '');
    if (q.type === 'blank') {
      var u = normBlank(userAns);
      if (!u) return false;
      var accepts = Array.isArray(q.answer) ? q.answer : [q.answer];
      for (var i = 0; i < accepts.length; i++) if (normBlank(accepts[i]) === u) return true;
      return false;
    }
    return false;
  }
  function chapterTitle(n) {
    for (var i = 0; i < CHAPTERS.length; i++) if (CHAPTERS[i].chapter === n) return CHAPTERS[i].title;
    return '第' + n + '章';
  }

  /* ---------------- 视图切换 ---------------- */
  function setView(name) {
    ['review', 'quiz', 'stats', 'essay'].forEach(function (v) {
      var el = byId('view-' + v); if (el) el.classList.toggle('active', v === name);
      var btn = byId('nav-' + v); if (btn) btn.classList.toggle('active', v === name);
    });
    if (name === 'review') renderReviewHome();
    if (name === 'stats') renderStats();
    if (name === 'quiz') updateFavCounts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------------- 章节精读 ---------------- */
  function chapterStats(ch) {
    var qs = BANK.filter(function (q) { return q.chapter === ch.chapter; });
    var done = qs.filter(function (q) { var p = progress[q.id]; return p && p.a; }).length;
    return { total: qs.length, done: done };
  }
  function renderReviewHome() {
    byId('review-home').classList.remove('hidden');
    byId('review-detail').classList.add('hidden');
    var doneAll = BANK.filter(function (q) { var p = progress[q.id]; return p && p.a; }).length;
    var okAll = BANK.filter(function (q) { var p = progress[q.id]; return p && p.ok; }).length;
    var points = CHAPTERS.reduce(function (s, c) { return s + (c.sections || []).reduce(function (t, sec) { return t + (sec.points || []).length; }, 0); }, 0);
    byId('review-stats').innerHTML = [
      stat(CHAPTERS.length, '章节'),
      stat(points, '知识点'),
      stat(BANK.length, '自测题'),
      stat(okAll + ' / ' + doneAll, '答对 / 已答')
    ].join('');
    byId('chapter-grid').innerHTML = CHAPTERS.map(function (c) {
      var s = chapterStats(c);
      var pct = s.total ? Math.round(s.done / s.total * 100) : 0;
      var secN = (c.sections || []).length;
      return '<button type="button" class="chapter-card" data-ch="' + c.chapter + '">' +
        '<div class="ch-no">CHAPTER ' + String(c.chapter).padStart(2, '0') + '</div>' +
        '<div class="ch-title">' + esc(c.title) + '</div>' +
        '<div class="ch-meta"><span>' + secN + ' 小节</span><span>' + s.total + ' 题</span><span>已练 ' + pct + '%</span></div>' +
        '<div class="ch-bar"><i style="width:' + pct + '%"></i></div>' +
        '</button>';
    }).join('');
  }
  function stat(n, label) {
    return '<div class="stat"><div class="stat-n">' + esc(n) + '</div><div class="stat-l">' + esc(label) + '</div></div>';
  }
  function openChapter(chNo) {
    var c = null;
    CHAPTERS.forEach(function (x) { if (x.chapter === chNo) c = x; });
    if (!c) return;
    byId('review-home').classList.add('hidden');
    var detail = byId('review-detail'); detail.classList.remove('hidden');
    detail.setAttribute('data-current-ch', chNo);

    var html = '<div class="detail-head">' +
      '<h2>第 ' + chNo + ' 章 · ' + esc(c.title) + '</h2>' +
      '<div class="sub">' + (c.sections || []).length + ' 小节 · ' + (c.questions || []).length + ' 道自测题</div></div>';

    if ((c.goals || []).length) {
      html += '<div class="goal-box"><h4>学习目标</h4><ul>' +
        c.goals.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul></div>';
    }
    if (c.ideology) {
      html += '<div class="goal-box" style="border-left-color:var(--cinnabar)"><h4 style="color:var(--cinnabar)">思政内涵</h4><div style="font-size:14px">' + esc(c.ideology) + '</div></div>';
    }

    (c.sections || []).forEach(function (sec) {
      html += '<div class="section-block">' +
        '<div class="section-head"><h3>' + esc(sec.id + '  ' + sec.title) + '</h3>' +
        (sec.pageRange ? '<span class="page-tag">课件 P' + esc(sec.pageRange) + '</span>' : '') + '</div>' +
        (sec.summary ? '<p class="section-summary">' + esc(sec.summary) + '</p>' : '');
      if ((sec.points || []).length) {
        html += '<ul class="point-list">' + sec.points.map(function (p) {
          return '<li><span class="point-term">' + esc(p.term) + '</span>' +
            '<span class="point-desc">：' + esc(p.desc) + '</span>' +
            (p.page ? '<span class="point-page">P' + esc(p.page) + '</span>' : '') + '</li>';
        }).join('') + '</ul>';
      }
      if ((sec.code || []).length) {
        html += sec.code.map(function (code) { return '<pre class="code-box">' + esc(code) + '</pre>'; }).join('');
      }
      if ((sec.tips || []).length) {
        html += '<div class="tips-box">' + sec.tips.map(function (t) { return '<div class="tip">' + esc(t) + '</div>'; }).join('') + '</div>';
      }
      html += '</div>';
    });
    byId('review-detail-body').innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------------- 自测 ---------------- */
  var session = { list: [], idx: 0, answered: 0, correct: 0, peeked: 0, revealed: false, userAns: null };

  function quizFilters() {
    var ch = byId('quiz-chapter').value;
    var type = byId('quiz-type').value;
    var mode = 'all';
    var chips = byId('quiz-modes').querySelectorAll('.chip');
    chips.forEach(function (c) { if (c.classList.contains('active')) mode = c.getAttribute('data-mode'); });
    return { ch: ch, type: type, mode: mode };
  }
  function filteredQuestions() {
    var f = quizFilters();
    var list = BANK.filter(function (q) {
      if (f.ch !== 'all' && String(q.chapter) !== f.ch) return false;
      if (f.type !== 'all' && q.type !== f.type) return false;
      if (f.mode === 'favorites' && !isFav(q.id)) return false;
      if (f.mode === 'wrong' && wrongIds().indexOf(q.id) === -1) return false;
      return true;
    });
    return list;
  }
  function updateFilterCount() {
    var el = byId('filter-count'); if (el) el.textContent = '共 ' + filteredQuestions().length + ' 题';
  }
  function startQuiz(list) {
    var qs = list || filteredQuestions();
    if (!qs.length) { alert('当前筛选条件下没有题目，换个条件试试。'); return; }
    session = { list: qs.slice(), idx: 0, answered: 0, correct: 0, peeked: 0, revealed: false, userAns: null };
    byId('quiz-home').classList.add('hidden');
    byId('quiz-summary').classList.add('hidden');
    byId('quiz-card').classList.remove('hidden');
    renderQuestion();
  }
  function renderQuestion() {
    var q = session.list[session.idx];
    if (!q) return finishQuiz();
    session.revealed = false; session.userAns = null;
    byId('quiz-progress').textContent = '第 ' + (session.idx + 1) + ' / ' + session.list.length + ' 题';
    var p = progress[q.id];
    if (p && p.a) {
      // 已答过的题：直接显示当时的结果与答案，避免重复计分
      session.revealed = true;
      session.userAns = p.peek ? null : (q.type === 'blank' ? p.u : p.u);
      session.wasAnswered = true;
    } else {
      session.wasAnswered = false;
    }

    var html = '<div class="q-head"><span class="q-type">' + (q.type === 'single' ? '单选题' : '填空题') + '</span>' +
      '<span class="q-chapter">第 ' + q.chapter + ' 章 · ' + esc(chapterTitle(q.chapter)) + '</span>' +
      '<span class="q-chapter">课件 P' + esc(q.page) + '</span></div>' +
      '<p class="q-stem">' + esc(q.stem) + '</p>';

    if (q.type === 'single') {
      var opts = optionList(q);
      html += '<div class="options" id="options">' + opts.map(function (o) {
        var key = o.charAt(0).toUpperCase();
        return '<div class="option" data-key="' + key + '"><span class="opt-key">' + key + '.</span><span>' + esc(o.replace(/^[A-Za-z][.、．)]\s*/, '')) + '</span></div>';
      }).join('') + '</div>';
    } else {
      html += '<input type="text" class="blank-input" id="blank-input" placeholder="输入答案，多个空用 / 或逗号分隔" autocomplete="off" />';
    }
    html += '<div class="answer-panel hidden" id="answer-panel"></div>';
    byId('question-card').innerHTML = html;

    var favBtn = byId('btn-quiz-fav');
    favBtn.classList.toggle('on', isFav(q.id));
    favBtn.textContent = isFav(q.id) ? '♥' : '♡';

    byId('btn-submit').classList.toggle('hidden', session.revealed);
    byId('btn-peek').classList.toggle('hidden', session.revealed);
    byId('btn-next').classList.toggle('hidden', !session.revealed);
    byId('btn-retry-wrong').classList.toggle('hidden', session.idx !== session.list.length - 1);
    byId('quiz-hint').classList.add('hidden');
    if (session.revealed) showAnswer(true);
  }

  function collectAnswer() {
    var q = session.list[session.idx];
    if (q.type === 'blank') {
      var el = byId('blank-input'); return el ? el.value.trim() : '';
    }
    var sel = byId('question-card').querySelector('.option.selected');
    return sel ? sel.getAttribute('data-key') : '';
  }
  function showAnswer(fromHistory) {
    var q = session.list[session.idx];
    var p = progress[q.id] || {};
    var ok = !!p.ok, peeked = !!p.peek;
    var panel = byId('answer-panel'); if (!panel) return;
    panel.classList.remove('hidden');
    var verdict = peeked ? '已看答案 · 按未掌握计' : (ok ? '✓ 回答正确' : '✗ 回答错误');
    panel.innerHTML = '<div class="verdict ' + (ok ? 'ok' : 'no') + '">' + verdict + '</div>' +
      '<div class="answer-line">正确答案：<b>' + esc(q.type === 'single' ? q.answer : q.answerText || (q.answer || []).join(' / ')) + '</b></div>' +
      (p.u ? '<div class="answer-line">你的答案：' + esc(p.u) + '</div>' : '') +
      '<div class="analysis-box">' + esc(q.analysis || '') +
      '<span class="basis">📖 依据：PPT 第 ' + q.chapter + ' 章 P' + esc(q.page) + '</span></div>';

    // 选项状态
    var opts = byId('question-card').querySelectorAll('.option');
    opts.forEach(function (o) {
      var key = o.getAttribute('data-key');
      if (key === String(q.answer)) o.classList.add('correct');
      else if (key === String(session.userAns)) o.classList.add('wrong');
      o.style.pointerEvents = 'none';
    });
  }
  function recordAnswer(peeked) {
    var q = session.list[session.idx];
    var u = peeked ? '' : collectAnswer();
    if (!peeked && !u) { byId('quiz-hint').textContent = '请先作答，或点「不会 · 看答案」。'; byId('quiz-hint').classList.remove('hidden'); return false; }
    var ok = judge(q, u, peeked);
    var existed = progress[q.id] && progress[q.id].a;
    if (!existed) {
      progress[q.id] = { a: 1, ok: ok ? 1 : 0, peek: peeked ? 1 : 0, u: u, t: Date.now() };
      saveProgress();
      session.answered++; if (ok) session.correct++; if (peeked) session.peeked++;
    } else {
      // 已答过的题不重复计分，仅保留首次结果
      ok = !!progress[q.id].ok; peeked = !!progress[q.id].peek;
    }
    session.userAns = u; session.revealed = true;
    showAnswer(false);
    byId('btn-submit').classList.add('hidden');
    byId('btn-peek').classList.add('hidden');
    byId('btn-next').classList.remove('hidden');
    updateFavCounts();
    return true;
  }
  function finishQuiz() {
    byId('quiz-card').classList.add('hidden');
    byId('quiz-summary').classList.remove('hidden');
    var rate = session.answered ? Math.round(session.correct / session.answered * 100) : 0;
    byId('summary-box').innerHTML = '<div class="big">' + rate + '%</div>' +
      '<div class="row"><span>本次作答 ' + session.answered + ' 题</span><span>答对 ' + session.correct + ' 题</span>' +
      '<span>看答案 ' + session.peeked + ' 题</span></div>' +
      '<p class="tiny-note">百分比按本次作答计；「看答案」按未掌握计入已答、不计入答对。</p>';
    byId('btn-retry-wrong-2').classList.toggle('hidden', wrongIds().length === 0);
  }

  /* ---------------- 统计 ---------------- */
  function renderStats() {
    var answered = BANK.filter(function (q) { var p = progress[q.id]; return p && p.a; });
    var ok = answered.filter(function (q) { return progress[q.id].ok; });
    var peek = answered.filter(function (q) { return progress[q.id].peek; });
    var rate = answered.length ? Math.round(ok.length / answered.length * 100) : 0;
    byId('stats-overview').innerHTML = [
      stat(BANK.length, '题库总量'), stat(answered.length, '已答题数'),
      stat(ok.length, '答对题数'), stat(rate + '%', '正确率')
    ].join('');

    byId('stats-chapters').innerHTML = CHAPTERS.map(function (c) {
      var qs = BANK.filter(function (q) { return q.chapter === c.chapter; });
      var done = qs.filter(function (q) { var p = progress[q.id]; return p && p.a; });
      var good = done.filter(function (q) { return progress[q.id].ok; });
      var pct = qs.length ? Math.round(done.length / qs.length * 100) : 0;
      var acc = done.length ? Math.round(good.length / done.length * 100) : 0;
      return '<div class="stat-chapter"><div class="row1"><b>第 ' + c.chapter + ' 章 · ' + esc(c.title) + '</b>' +
        '<span class="rate">已练 ' + done.length + '/' + qs.length + ' · 正确率 ' + acc + '%</span></div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div></div>';
    }).join('');
  }

  function exportData() {
    var data = { app: 'myq', version: 1, exportedAt: new Date().toISOString(), progress: progress, favs: favs };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ppt-review-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click(); URL.revokeObjectURL(a.href);
  }
  function importData(file) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var d = JSON.parse(reader.result);
        if (!d || typeof d !== 'object') throw new Error('bad');
        if (d.progress && typeof d.progress === 'object') {
          Object.keys(d.progress).forEach(function (id) {
            if (BY_ID[id]) progress[id] = d.progress[id];   // 同题以备份为准
          });
        }
        if (Array.isArray(d.favs)) {
          d.favs.forEach(function (id) { if (BY_ID[id] && favs.indexOf(id) === -1) favs.push(id); });
        }
        saveProgress(); saveFavs(); renderStats(); updateFavCounts();
        alert('导入完成。');
      } catch (e) { alert('导入失败：文件不是有效的备份 JSON。'); }
    };
    reader.readAsText(file);
  }

  /* ---------------- 主题 ---------------- */
  var THEME_KEY_LOCAL = THEME_KEY;
  function applyTheme(dark) {
    if (dark) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    var btn = byId('theme-toggle'); if (btn) btn.textContent = dark ? '☀️' : '🌙';
  }
  function initTheme() {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark');
    byId('theme-toggle').addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') !== 'dark';
      applyTheme(dark);
      try { localStorage.setItem(THEME_KEY_LOCAL, dark ? 'dark' : 'light'); } catch (e) {}
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener('change', function (e) {
        var saved = null; try { saved = localStorage.getItem(THEME_KEY_LOCAL); } catch (err) {}
        if (!saved) applyTheme(e.matches);
      });
    }
  }

  /* ---------------- 事件绑定 ---------------- */
  function bind() {
    byId('top-nav').addEventListener('click', function (e) {
      var btn = e.target.closest('.nav-btn'); if (btn) setView(btn.getAttribute('data-view'));
    });
    byId('chapter-grid').addEventListener('click', function (e) {
      var card = e.target.closest('.chapter-card'); if (card) openChapter(Number(card.getAttribute('data-ch')));
    });
    byId('btn-review-back').addEventListener('click', renderReviewHome);
    byId('btn-study-chapter').addEventListener('click', function () {
      var ch = byId('review-detail').getAttribute('data-current-ch');
      byId('quiz-chapter').value = ch;
      setView('quiz'); updateFilterCount(); startQuiz();
    });
    byId('btn-essay-go-review').addEventListener('click', function () { setView('review'); });

    byId('quiz-modes').addEventListener('click', function (e) {
      var chip = e.target.closest('.chip'); if (!chip) return;
      byId('quiz-modes').querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active'); updateFilterCount();
    });
    byId('quiz-chapter').addEventListener('change', updateFilterCount);
    byId('quiz-type').addEventListener('change', updateFilterCount);
    byId('btn-quiz-start').addEventListener('click', function () { startQuiz(); });
    byId('btn-quiz-exit').addEventListener('click', function () {
      byId('quiz-card').classList.add('hidden'); byId('quiz-home').classList.remove('hidden');
      updateFavCounts(); updateFilterCount();
    });
    byId('btn-quiz-fav').addEventListener('click', function () {
      var q = session.list[session.idx]; if (!q) return;
      var on = toggleFav(q.id);
      this.classList.toggle('on', on); this.textContent = on ? '♥' : '♡';
    });
    byId('question-card').addEventListener('click', function (e) {
      var opt = e.target.closest('.option'); if (!opt || session.revealed) return;
      byId('question-card').querySelectorAll('.option').forEach(function (o) { o.classList.remove('selected'); });
      opt.classList.add('selected');
      byId('quiz-hint').classList.add('hidden');
    });
    byId('btn-submit').addEventListener('click', function () { recordAnswer(false); });
    byId('btn-peek').addEventListener('click', function () { recordAnswer(true); });
    byId('btn-next').addEventListener('click', function () { session.idx++; renderQuestion(); });
    byId('btn-prev').addEventListener('click', function () { if (session.idx > 0) { session.idx--; renderQuestion(); } });
    byId('btn-retry-wrong').addEventListener('click', function () {
      var ids = wrongIds(); if (!ids.length) return;
      startQuiz(ids.map(function (id) { return BY_ID[id]; }).filter(Boolean));
    });
    byId('btn-retry').addEventListener('click', function () { startQuiz(session.list); });
    byId('btn-retry-wrong-2').addEventListener('click', function () {
      var ids = wrongIds();
      if (!ids.length) return;
      setView('quiz'); startQuiz(ids.map(function (id) { return BY_ID[id]; }).filter(Boolean));
    });
    byId('btn-summary-home').addEventListener('click', function () {
      byId('quiz-summary').classList.add('hidden'); byId('quiz-home').classList.remove('hidden'); updateFavCounts();
    });

    byId('btn-export').addEventListener('click', exportData);
    byId('btn-import').addEventListener('click', function () { byId('import-file').click(); });
    byId('import-file').addEventListener('change', function () {
      if (this.files && this.files[0]) importData(this.files[0]);
      this.value = '';
    });
    byId('btn-reset').addEventListener('click', function () {
      if (!confirm('确定清空所有进度、收藏和错题记录？此操作不可撤销，建议先导出备份。')) return;
      progress = {}; favs = []; saveProgress(); saveFavs(); renderStats(); updateFavCounts();
    });
  }

  /* ---------------- 初始化 ---------------- */
  function init() {
    // 章节下拉
    var sel = byId('quiz-chapter');
    CHAPTERS.forEach(function (c) {
      var o = document.createElement('option'); o.value = String(c.chapter);
      o.textContent = '第 ' + c.chapter + ' 章 · ' + c.title; sel.appendChild(o);
    });
    initTheme(); bind(); updateFavCounts(); updateFilterCount(); renderReviewHome();
    // 对外暴露，便于自动化验收
    window.PPR = {
      setView: setView, startQuiz: startQuiz, openChapter: openChapter,
      getProgress: function () { return progress; },
      getBank: function () { return BANK; },
      getChapters: function () { return CHAPTERS; },
      judge: judge, normBlank: normBlank
    };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
