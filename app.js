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
  var NOTES_KEY = 'myq-notes-v1';
  var notes = loadJSON(NOTES_KEY, {});         // { qid: '笔记正文' }
  var noteTimer = null;
  var pendingNote = null;
  var noteOpenId = null;      // 当前展开笔记面板的题 id（不持久化）
  var lastRenderedQid = null; // 换题即收起笔记面板

  function saveNotes() {
    try {
      localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
      updateNoteCount();
      return true;
    } catch (e) { return false; }
  }
  function noteCount() {
    return Object.keys(notes).filter(function (k) { return !!notes[k]; }).length;
  }
  /* 输入框失焦 / 换题时立刻把待写内容落盘，避免防抖窗口内丢字 */
  function flushNote() {
    if (!pendingNote) return;
    var p = pendingNote;
    pendingNote = null;
    if (noteTimer) { clearTimeout(noteTimer); noteTimer = null; }
    if (p.value) notes[p.id] = p.value; else delete notes[p.id];
    saveNotes();
  }

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
    var wb = document.getElementById('wrong-btn-n'); if (wb) wb.textContent = wrongIds().length;
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
  function setScopeNote(show) {
    var el = document.querySelector('.scope-note');
    if (el) el.classList.toggle('hidden', !show);
  }

  function setView(name) {
    ['review', 'quiz', 'stats', 'essay'].forEach(function (v) {
      var el = byId('view-' + v); if (el) el.classList.toggle('active', v === name);
      var btn = byId('nav-' + v); if (btn) btn.classList.toggle('active', v === name);
    });
    if (name === 'review') renderReviewHome();
    if (name === 'stats') renderStats();
    if (name === 'quiz') updateFavCounts();
    // 做题时收起顶部的范围说明，腾出空间；回到自测首页再显示
    setScopeNote(!(name === 'quiz' && !byId('quiz-card').classList.contains('hidden')));
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
    var scopeEl = byId('quiz-scope');
    var scope = scopeEl ? scopeEl.value : 'all';
    var shufEl = byId('quiz-shuffle');
    var shuffleOn = shufEl ? shufEl.checked : true;
    var mode = 'all';
    var chips = byId('quiz-modes').querySelectorAll('.chip');
    chips.forEach(function (c) { if (c.classList.contains('active')) mode = c.getAttribute('data-mode'); });
    return { ch: ch, type: type, mode: mode, scope: scope, shuffle: shuffleOn };
  }
  function filteredQuestions() {
    var f = quizFilters();
    var list = BANK.filter(function (q) {
      if (f.ch !== 'all' && String(q.chapter) !== f.ch) return false;
      if (f.type !== 'all' && q.type !== f.type) return false;
      if (f.mode === 'favorites' && !isFav(q.id)) return false;
      if (f.mode === 'wrong' && wrongIds().indexOf(q.id) === -1) return false;
      if (f.scope === 'fresh' && progress[q.id] && progress[q.id].a) return false;
      if (f.scope === 'done' && !(progress[q.id] && progress[q.id].a)) return false;
      return true;
    });
    return list;
  }
  function updateFilterCount() {
    var el = byId('filter-count'); if (el) el.textContent = '共 ' + filteredQuestions().length + ' 题';
  }

  /* 练习页工具栏：与首页筛选共用同一份状态（首页控件是权威，练习工具栏镜像它） */
  function setQuizMode(mode) {
    ['quiz-modes', 'practice-modes'].forEach(function (id) {
      var box = byId(id); if (!box) return;
      box.querySelectorAll('.chip').forEach(function (c) {
        c.classList.toggle('active', c.getAttribute('data-mode') === mode);
      });
    });
  }
  function currentMode() {
    var mode = 'all';
    byId('quiz-modes').querySelectorAll('.chip').forEach(function (c) {
      if (c.classList.contains('active')) mode = c.getAttribute('data-mode');
    });
    return mode;
  }
  function updateNoteCount() {
    var n = noteCount();
    var a = byId('p-notes-n'); if (a) a.textContent = n;
    var b = byId('notes-n'); if (b) b.textContent = n;
  }
  function syncPracticeToolbar() {
    if (!byId('p-chapter')) return;
    byId('p-chapter').value = byId('quiz-chapter').value;
    byId('p-type').value = byId('quiz-type').value;
    byId('p-scope').value = byId('quiz-scope').value;
    byId('p-shuffle').checked = byId('quiz-shuffle').checked;
    setQuizMode(currentMode());
    updateNoteCount();
  }
  /* 练习中改了筛选 → 写回首页控件 → 按新条件重新抽题 */
  function applyPracticeFilter() {
    byId('quiz-chapter').value = byId('p-chapter').value;
    byId('quiz-type').value = byId('p-type').value;
    byId('quiz-scope').value = byId('p-scope').value;
    byId('quiz-shuffle').checked = byId('p-shuffle').checked;
    updateFilterCount();
    startQuiz();
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  // 每组抽题：优先未做过的题，不足再补已做过的；ordered=true 时保持题库原顺序
  function sampleQuestions(list, limit, ordered) {
    if (!limit || limit === 'all' || limit >= list.length) return ordered ? list.slice() : list;
    var n = Number(limit);
    var fresh = [], done = [];
    list.forEach(function (q) {
      var p = progress[q.id];
      (p && p.a ? done : fresh).push(q);
    });
    if (ordered) return fresh.concat(done).slice(0, n);
    return shuffle(fresh).concat(shuffle(done)).slice(0, n);
  }
  function renderEmptyState() {
    var mode = currentMode();
    var icon = mode === 'favorites' ? '♡' : (mode === 'wrong' ? '✓' : '—');
    var msg = mode === 'favorites'
      ? '还没有收藏任何题。做题时点题卡右上角「♡ 收藏」，题目就会出现在这里。'
      : (mode === 'wrong'
        ? '错题本是空的。答错的题、以及点「不会 · 看答案」的题会自动进来。'
        : '当前筛选条件下没有题目，把章节 / 题型 / 范围放宽一点再试。');
    byId('question-card').innerHTML =
      '<div class="empty-state"><div class="empty-icon">' + icon + '</div><p>' + msg + '</p>' +
      '<p class="tiny-note">也可以点上方「全部练习」回到全部题目。</p></div>';
    var act = byId('quiz-actions');
    if (act) act.classList.add('hidden');
    var kbd = document.querySelector('.kbd-hint');
    if (kbd) kbd.classList.add('hidden');
  }

  function startQuiz(list) {
    var qs = list || filteredQuestions();
    if (!qs.length) {
      if (!byId('quiz-card').classList.contains('hidden')) {
        renderEmptyState();
      } else {
        alert('当前筛选条件下没有题目，换个条件试试。');
      }
      return;
    }
    // 显式传入的列表（如「只重做错题」「刷本章」）不抽样，只对筛选结果抽
    if (!list) {
      var limitEl = byId('quiz-limit');
      var f = quizFilters();
      qs = sampleQuestions(qs, limitEl ? limitEl.value : 'all', !f.shuffle);
    }
    flushNote();
    session = { list: qs.slice(), idx: 0, answered: 0, correct: 0, peeked: 0, revealed: false, userAns: null, wasAnswered: false, pendingAns: null, pendingText: '' };
    noteOpenId = null; lastRenderedQid = null;
    byId('quiz-home').classList.add('hidden');
    byId('quiz-summary').classList.add('hidden');
    byId('quiz-card').classList.remove('hidden');
    setScopeNote(false);
    syncPracticeToolbar();
    renderQuestion();
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
  }
  function qTypeLabel(q) { return q.type === 'single' ? '单选题' : '填空题'; }

  function updateScore() {
    var idx = session.idx + 1, len = session.list.length;
    var el = byId('quiz-progress');
    if (el) el.textContent = idx + ' / ' + len;
    var fill = byId('progress-fill');
    if (fill) fill.style.width = (len ? (idx / len) * 100 : 0) + '%';
    var rate = session.answered ? Math.round((session.correct / session.answered) * 100) : null;
    var st = byId('score-text');
    if (st) {
      st.textContent = '答对 ' + session.correct + ' / 已答 ' + session.answered +
        ' · 正确率 ' + (rate == null ? '—' : rate + '%');
    }
  }

  function setAnswerControls(allowAnswer) {
    var submit = byId('btn-submit'), peek = byId('btn-peek');
    var prev = byId('btn-prev'), next = byId('btn-next');
    if (submit) submit.disabled = !allowAnswer;
    if (peek) peek.disabled = !allowAnswer;
    if (prev) prev.disabled = session.idx <= 0;
    if (next) next.disabled = session.idx >= session.list.length - 1;
  }

  function renderQuestion() {
    var q = session.list[session.idx];
    if (!q) return finishQuiz();
    flushNote();
    var act = byId('quiz-actions');
    if (act) act.classList.remove('hidden');
    var kbd = document.querySelector('.kbd-hint');
    if (kbd) kbd.classList.remove('hidden');

    var p = progress[q.id];
    var wasAnswered = !!(p && p.a);
    session.revealed = wasAnswered;
    session.wasAnswered = wasAnswered;
    session.userAns = wasAnswered ? (p.peek ? null : (p.u || null)) : null;
    /* 换题（含刷新后首次渲染）就收起笔记面板，内容仍在、下次点开自动带出 */
    if (lastRenderedQid !== q.id) {
      noteOpenId = null; lastRenderedQid = q.id;
      session.pendingAns = null; session.pendingText = '';
    }

    var favOn = isFav(q.id);
    var noteOn = noteOpenId === q.id;
    var html = '';
    html += '<div class="meta-row"><span id="quiz-progress"></span>' +
      '<span class="score-pill" id="score-text"></span></div>';
    html += '<div class="progress-bar"><span id="progress-fill"></span></div>';

    html += '<div class="q-head"><div class="q-head-left">';
    html += '<span class="q-type">' + qTypeLabel(q) + '</span>';
    html += '<span class="q-chapter">第 ' + q.chapter + ' 章 · ' + esc(chapterTitle(q.chapter)) + '</span>';
    html += '<span class="src-tag">课件 P' + esc(q.page) + '</span>';
    html += '</div><div class="q-head-actions">';
    html += '<button type="button" class="note-toggle-btn' + (noteOn ? ' on' : '') +
      (notes[q.id] ? ' has-note' : '') + '" id="toggle-notes" aria-pressed="' + (noteOn ? 'true' : 'false') +
      '" title="给这道题记笔记，只存在这台设备；再点一次关闭"><span>📝</span> 笔记' +
      (notes[q.id] ? '<i class="note-dot" aria-hidden="true"></i>' : '') + '</button>';
    html += '<button type="button" class="fav-btn' + (favOn ? ' on' : '') + '" id="btn-quiz-fav" aria-pressed="' +
      (favOn ? 'true' : 'false') + '"><span class="heart">' + (favOn ? '♥' : '♡') + '</span> ' +
      (favOn ? '已收藏' : '收藏') + '</button>';
    html += '</div></div>';

    html += '<p class="q-stem">' + esc(q.stem) + '</p>';

    /* 笔记面板默认收起；内容按题 id 存本机，下次做到同一题自动带出 */
    if (noteOn) html += notePanelHtml(q);

    if (q.type === 'single') {
      var opts = optionList(q);
      var picked = wasAnswered ? session.userAns : (session.pendingAns || null);
      html += '<div class="options" id="options">' + opts.map(function (o) {
        var key = o.charAt(0).toUpperCase();
        var sel = !!picked && String(picked).toUpperCase() === key;
        return '<div class="option' + (sel ? ' selected' : '') + '" data-key="' + key + '">' +
          '<span class="opt-key">' + key + '.</span><span class="opt-body">' +
          esc(o.replace(/^[A-Za-z][.、．)]\s*/, '')) + '</span></div>';
      }).join('') + '</div>';
    } else {
      var typed = wasAnswered && !p.peek ? (p.u || '') : (session.pendingText || '');
      html += '<input type="text" class="blank-input" id="blank-input" placeholder="输入答案，多个空用 / 或逗号分隔" autocomplete="off" value="' +
        esc(typed) + '" />';
    }
    html += '<div class="answer-panel hidden" id="answer-panel"></div>';
    byId('question-card').innerHTML = html;

    bindNoteEditor(q);
    bindNoteToggle(q);
    bindFavButton(q);
    bindOptionPicks();
    byId('quiz-hint').classList.add('hidden');
    hideAiHint();
    if (wasAnswered) showAnswer(true);
    updateScore();
    setAnswerControls(!wasAnswered);
  }

  function notePanelHtml(q) {
    var nv = notes[q.id] || '';
    return '<div class="note-area" id="note-area">' +
      '<div class="note-head"><b>📝 我的笔记</b><span class="note-status" id="note-status">' +
      (nv ? '已保存' : '') + '</span></div>' +
      '<textarea id="note-input" class="note-input" placeholder="记下这题的坑 / 记法 / 为什么错，下次做到会自动显示…">' +
      esc(nv) + '</textarea>' +
      '<div class="note-foot"><span class="note-count" id="note-count">' + nv.length +
      ' 字 · 只存在这台设备</span><button type="button" class="note-clear" id="note-clear"' +
      (nv ? '' : ' disabled') + '>删除这条</button></div></div>';
  }

  /* 切换笔记面板：局部插入/移除，不重渲染题目，避免丢掉已选的选项 */
  function bindNoteToggle(q) {
    var btn = byId('toggle-notes');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var existing = byId('note-area');
      if (existing) {
        flushNote();
        var hadNote = !!notes[q.id];
        existing.parentNode.removeChild(existing);
        noteOpenId = null;
        btn.classList.remove('on');
        btn.setAttribute('aria-pressed', 'false');
        btn.classList.toggle('has-note', hadNote);
        return;
      }
      flushNote();
      noteOpenId = q.id;
      var stem = byId('question-card').querySelector('.q-stem');
      var tmp = document.createElement('div');
      tmp.innerHTML = notePanelHtml(q);
      stem.insertAdjacentElement('afterend', tmp.firstElementChild);
      bindNoteEditor(q);
      btn.classList.add('on');
      btn.setAttribute('aria-pressed', 'true');
      var ta = byId('note-input');
      if (ta) ta.focus();
    });
  }

  function bindNoteEditor(q) {
    var input = byId('note-input');
    if (!input) return;
    var status = byId('note-status');
    var count = byId('note-count');
    var clear = byId('note-clear');
    var toggle = byId('toggle-notes');

    function afterSave(saved) {
      if (toggle) toggle.classList.toggle('has-note', !!notes[q.id]);
      if (saved) flushNote();
    }

    input.addEventListener('input', function () {
      var val = input.value;
      pendingNote = { id: q.id, value: val };
      if (status) status.textContent = '输入中…';
      if (count) count.textContent = val.length + ' 字 · 只存在这台设备';
      if (clear) clear.disabled = !val;
      if (noteTimer) clearTimeout(noteTimer);
      noteTimer = setTimeout(function () {
        if (!pendingNote) return;
        var pp = pendingNote;
        pendingNote = null; noteTimer = null;
        if (pp.value) notes[pp.id] = pp.value; else delete notes[pp.id];
        var ok = saveNotes();
        if (status) status.textContent = ok ? (pp.value ? '已保存' : '已删除') : '保存失败';
        if (toggle) toggle.classList.toggle('has-note', !!notes[q.id]);
      }, 350);
    });
    input.addEventListener('blur', function () {
      flushNote();
      if (count) count.textContent = input.value.length + ' 字 · 只存在这台设备';
      if (toggle) toggle.classList.toggle('has-note', !!notes[q.id]);
    });

    if (clear) {
      clear.addEventListener('click', function () {
        if (!notes[q.id]) return;
        if (!confirm('删除这道题的笔记？（其他题的笔记不受影响）')) return;
        delete notes[q.id];
        saveNotes();
        input.value = '';
        pendingNote = null;
        if (status) status.textContent = '已删除';
        if (count) count.textContent = '0 字 · 只存在这台设备';
        clear.disabled = true;
        if (toggle) toggle.classList.remove('has-note');
      });
    }
  }

  function bindFavButton(q) {
    var favBtn = byId('btn-quiz-fav');
    if (!favBtn) return;
    favBtn.addEventListener('click', function () {
      var on = toggleFav(q.id);
      favBtn.classList.toggle('on', on);
      favBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      favBtn.innerHTML = '<span class="heart">' + (on ? '♥' : '♡') + '</span> ' + (on ? '已收藏' : '收藏');
    });
  }

  function bindOptionPicks() {
    var box = byId('question-card');
    if (!box) return;
    box.querySelectorAll('.option').forEach(function (opt) {
      opt.addEventListener('click', function () {
        if (session.revealed) return;
        box.querySelectorAll('.option').forEach(function (o) { o.classList.remove('selected'); });
        opt.classList.add('selected');
        session.pendingAns = opt.getAttribute('data-key');
        byId('quiz-hint').classList.add('hidden');
      });
    });
    var blank = byId('blank-input');
    if (blank) {
      blank.addEventListener('input', function () { session.pendingText = blank.value; });
      blank.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); if (!session.revealed) recordAnswer(false); }
      });
    }
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

    var verdict, vcls;
    if (peeked) { verdict = '不会 · 已看答案'; vcls = 'peek'; }
    else if (ok) { verdict = '✓ 回答正确'; vcls = 'ok'; }
    else { verdict = '✗ 回答不正确'; vcls = 'no'; }

    var right = q.type === 'single'
      ? (optionList(q).filter(function (o) {
          return o.charAt(0).toUpperCase() === String(q.answer).toUpperCase();
        })[0] || String(q.answer))
      : (q.answerText || (q.answer || []).join(' / '));

    var html = '<div class="verdict ' + vcls + '">' + verdict + '</div>';
    html += '<div class="box answer-box"><strong>正确答案</strong>' + esc(right) + '</div>';
    if (p.u && !peeked) {
      var mine = String(p.u);
      if (q.type === 'single') {
        var hit = optionList(q).filter(function (o) {
          return o.charAt(0).toUpperCase() === mine.toUpperCase();
        })[0];
        mine = hit || mine;
      }
      html += '<div class="box"><strong>你的答案</strong>' + esc(mine) + '</div>';
    }
    if (q.analysis) {
      var ana = String(q.analysis).replace(/^(【?解析】?|分析)\s*[:：]\s*/, '');
      html += '<div class="box"><strong>解析</strong>' + esc(ana) + '</div>';
    }
    html += '<p class="src">依据：第 ' + q.chapter + ' 章 · 课件 P' + esc(q.page) + '</p>';
    panel.innerHTML = html;

    // 选项着色：正确项标绿，选错的标红
    byId('question-card').querySelectorAll('.option').forEach(function (o) {
      var key = o.getAttribute('data-key');
      o.classList.remove('correct', 'wrong');
      if (key === String(q.answer)) o.classList.add('correct');
      else if (key === String(p.u)) o.classList.add('wrong');
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
    updateScore();
    setAnswerControls(false);
    updateFavCounts();
    return true;
  }

  function go(delta) {
    if (!session.list.length) return;
    var t = session.idx + delta;
    if (t < 0 || t >= session.list.length) return;
    session.idx = t;
    renderQuestion();
  }

  function finishQuiz() {
    flushNote();
    byId('quiz-card').classList.add('hidden');
    byId('quiz-home').classList.add('hidden');
    byId('quiz-summary').classList.remove('hidden');
    setScopeNote(true);
    var rate = session.answered ? Math.round(session.correct / session.answered * 100) : 0;
    byId('summary-box').innerHTML = '<div class="big">' + rate + '%</div>' +
      '<div class="row"><span>本次作答 ' + session.answered + ' 题</span><span>答对 ' + session.correct + ' 题</span>' +
      '<span>看答案 ' + session.peeked + ' 题</span></div>' +
      '<p class="tiny-note">百分比按本次作答计；「不会 · 看答案」按未掌握计入已答、不计入答对。错题已进错题本，可点「只重做错题」二轮。</p>';
    byId('btn-retry-wrong-2').classList.toggle('hidden', wrongIds().length === 0);
  }

  /* ---------------- 问 AI（DeepSeek / 千问） ---------------- */
  // 两家官网都能把 ?q= 的内容自动填进输入框；DeepSeek 额度用完可以换千问接着问
  var AI_TARGETS = [
    { key: 'deepseek', name: 'DeepSeek', bare: 'https://chat.deepseek.com/', autoSend: false },
    { key: 'qwen', name: '千问', bare: 'https://www.qianwen.com/', autoSend: true }
  ];
  // 分级上限：先按完整长度发，超了再逐级压缩，尽量保住「自动填入输入框」
  var AI_CAPS = [
    { q: 1600, ans: 520, opt: 400 },
    { q: 900, ans: 300, opt: 260 },
    { q: 500, ans: 180, opt: 180 },
    { q: 260, ans: 100, opt: 120 }
  ];
  var AI_URL_BUDGET = 6000;   // 实测官网能吃下约 1.7KB 的 ?q=，留足余量

  function aiTarget(key) {
    for (var i = 0; i < AI_TARGETS.length; i++) {
      if (AI_TARGETS[i].key === key) return AI_TARGETS[i];
    }
    return AI_TARGETS[0];
  }

  function clipText(s, max) {
    s = String(s == null ? '' : s);
    if (s.length <= max) return s;
    return s.slice(0, max) + '…（后面还有 ' + (s.length - max) + ' 字，已省略）';
  }

  // 把我的作答还原成可读文本：选择题带上选项内容
  function myAnswerText(q, p) {
    if (!p || !p.a) return '';
    if (q.type === 'single') {
      if (!p.u) return '';
      var hit = optionList(q).filter(function (o) {
        return o.charAt(0).toUpperCase() === String(p.u).toUpperCase();
      })[0];
      return hit || String(p.u);
    }
    return String(p.u || '').trim();
  }

  function buildAiPrompt(q, cap) {
    var p = progress[q.id];
    var answered = !!(p && p.a);
    var mine = answered ? myAnswerText(q, p) : '';
    var ref = (q.type === 'single'
      ? String(q.answer || '')
      : String(q.answerText || (q.answer || []).join(' / '))).trim();
    var hasRef = !!ref;
    var L = [];

    L.push(answered
      ? '我在复习 MySQL 数据库课程，这道题我已经做过了。请像助教一样帮我把这道题讲透，别再替我重答一遍。'
      : '我在复习 MySQL 数据库课程，这道题还没动笔。请像助教一样点一下我思路，先别把答案直接给我。');
    L.push('');
    L.push('第' + q.chapter + '章 ' + String(chapterTitle(q.chapter)).trim() + ' · ' + qTypeLabel(q));
    L.push(clipText(String(q.stem || '').trim(), cap.q));

    var opts = optionList(q);
    if (opts.length) {
      L.push('');
      L.push('选项：');
      opts.forEach(function (o) { L.push(clipText(String(o), cap.opt)); });
    }

    if (answered) {
      L.push('');
      if (mine) {
        L.push('我的答案：' + clipText(mine, cap.ans));
      } else {
        L.push(hasRef ? '我的答案：这题我没作答，直接看了参考答案。' : '我的答案：这题我没作答。');
      }
      if (hasRef) {
        L.push('');
        L.push('参考答案：' + clipText(ref, cap.ans));
      }
      if (q.analysis) {
        L.push('');
        L.push('课件解析：' + clipText(String(q.analysis), cap.ans));
      }
    }

    L.push('');
    if (!answered) {
      L.push('只讲思路和关键提示，不要写出最终答案；中文口语，讲几句给我方向就行。');
    } else if (mine && hasRef) {
      L.push('请先自己对比我的答案和参考答案，再按下面的顺序讲：');
      L.push('- 两个答案对不上：指出我错在哪，我大概是把哪个概念弄混了，那个概念本来的意思是什么；');
      L.push('- 两个答案对得上（或者我是蒙对的）：讲清这题背后真正的道理，以及最容易栽跟头的地方。');
      L.push('不要抄题目原文，也别套「答案：」「分点说明」这类模板。');
      L.push('像坐在旁边讲题那样，中文口语，三四段话就够。');
    } else if (mine) {
      L.push('这题没有课件标准答案，请你直接看我的答案：说清哪里对、哪里不到位或者漏了什么，再补上我没想到的点。中文口语，三四段话。');
    } else {
      L.push('这题我没做出来，直接看的答案，所以别讲「你错在哪」，讲清这题该从哪儿想起、为什么会走到参考答案这条路，再点一下最容易想岔的地方。中文口语，三四段话。');
    }
    return L.join('\n');
  }

  // 逐级压缩：优先保住「官网自动填入」，压到最短仍超限才退回裸链接走粘贴
  function pickPrompt(q) {
    var last = null;
    for (var i = 0; i < AI_CAPS.length; i++) {
      last = buildAiPrompt(q, AI_CAPS[i]);
      if (encodeURIComponent(last).length + 28 <= AI_URL_BUDGET) {
        return { prompt: last, autoFill: true, level: i, compressed: i > 0 };
      }
    }
    return { prompt: last, autoFill: false, level: AI_CAPS.length - 1, compressed: true };
  }

  function legacyCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', 'readonly');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, ta.value.length);
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return legacyCopy(text); }
      );
    }
    return Promise.resolve(legacyCopy(text));
  }

  function showAiHint(msg, kind) {
    var el = byId('ai-hint');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden', 'bad');
    if (kind === 'bad') el.classList.add('bad');
  }
  function hideAiHint() {
    var el = byId('ai-hint');
    if (!el) return;
    el.classList.add('hidden');
    el.textContent = '';
    el.classList.remove('bad');
  }

  function askAI(key) {
    var t = aiTarget(key);
    var q = session.list[session.idx];
    if (!q) return;
    var p = progress[q.id];
    var answered = !!(p && p.a);
    var built = pickPrompt(q);
    var prompt = built.prompt;
    var url = t.bare;
    if (built.autoFill) url = t.bare + '?q=' + encodeURIComponent(prompt);
    var win = window.open(url, '_blank');
    if (win) { try { win.opener = null; } catch (e) {} }
    copyText(prompt).then(function (ok) {
      if (!ok) {
        showAiHint('自动复制被浏览器拦截，请手动复制下面的内容（Ctrl/⌘ + C）：' + prompt, 'bad');
        return;
      }
      if (!built.autoFill) {
        showAiHint('这题内容比较长，已复制到剪贴板：在「' + t.name + '」里粘贴（Ctrl/⌘ + V）发送即可。');
      } else if (t.autoSend) {
        showAiHint('已打开「' + t.name + '」：' +
          (answered ? '问题已经直接发过去了，等它回答就行。' : '这题你还没作答，问题已直接发出去、只让它给思路。') +
          '（如果停在空白输入框，说明没登录，按 Ctrl/⌘ + V 粘贴再发送）');
      } else if (answered) {
        showAiHint('已打开「' + t.name + '」：题目、你的答案、参考答案都填进输入框了，按 Enter 发送。' +
          '（没填入就 Ctrl/⌘ + V 粘贴）' + (built.compressed ? '（题太长，答案做了截断）' : ''));
      } else {
        showAiHint('已打开「' + t.name + '」：这题你还没作答，所以只让它给思路。做完再点一次，它就会针对你的答案讲。' +
          '（填进输入框后按 Enter；没填入就 Ctrl/⌘ + V 粘贴）');
      }
    });
    if (!win) showAiHint('浏览器拦截了新标签页，请允许本站弹窗后重试。', 'bad');
  }

  /* ---------------- 笔记导出 / 导入 ---------------- */
  function exportNotes() {
    flushNote();
    var ids = Object.keys(notes).filter(function (k) { return !!notes[k]; });
    if (!ids.length) { alert('还没有任何笔记。在题目页点「📝 笔记」写点东西再导出。'); return; }
    var payload = {
      app: 'mysql-quiz', kind: 'notes', version: 1,
      exportedAt: new Date().toISOString(), count: ids.length, notes: {}
    };
    ids.forEach(function (id) {
      payload.notes[id] = { stem: (BY_ID[id] || {}).stem || '', note: notes[id] };
    });
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    var d = new Date();
    var stamp = d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
    a.href = URL.createObjectURL(blob);
    a.download = 'mysql-quiz-notes-' + stamp + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  function importNotes(file) {
    var reader = new FileReader();
    reader.onload = function () {
      var data;
      try { data = JSON.parse(reader.result); }
      catch (e) { alert('文件不是合法的 JSON，导入失败。'); return; }
      var src = data && data.notes;
      if (!src || typeof src !== 'object') { alert('这个文件里没有笔记数据（需要本站「导出笔记」生成的 .json）。'); return; }
      var n = 0, skipped = 0;
      Object.keys(src).forEach(function (id) {
        var v = src[id];
        var text = (v && typeof v === 'object') ? v.note : v;
        if (typeof text !== 'string' || !text) { skipped++; return; }
        if (!BY_ID[id]) { skipped++; return; }
        notes[id] = text; n++;
      });
      if (!n) { alert('没有可导入的笔记（题库里找不到对应题目）。'); return; }
      if (!saveNotes()) { alert('笔记写入浏览器存储失败，可能空间已满。'); return; }
      alert('已导入 ' + n + ' 条笔记' + (skipped ? '，跳过 ' + skipped + ' 条（空内容或题目不匹配）' : '') + '。');
      if (session && session.list.length) { noteOpenId = null; renderQuestion(); }
    };
    reader.readAsText(file, 'utf-8');
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
    byId('btn-quiz-wrong').addEventListener('click', function () {
      var ids = wrongIds();
      if (!ids.length) { alert('错题本是空的——先做几道题，答错的会自动进来。'); return; }
      startQuiz(ids.map(function (id) { return BY_ID[id]; }).filter(Boolean));
    });

    // 练习页工具栏
    byId('practice-modes').addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      setQuizMode(chip.getAttribute('data-mode'));
      applyPracticeFilter();
    });
    ['p-chapter', 'p-type', 'p-scope'].forEach(function (id) {
      var el = byId(id); if (el) el.addEventListener('change', applyPracticeFilter);
    });
    byId('p-shuffle').addEventListener('change', applyPracticeFilter);
    byId('btn-p-restart').addEventListener('click', function () { startQuiz(); });
    byId('btn-p-notes-export').addEventListener('click', exportNotes);
    byId('btn-p-notes-import').addEventListener('click', function () { byId('notes-file').click(); });
    byId('btn-quiz-exit').addEventListener('click', function () {
      flushNote();
      byId('quiz-card').classList.add('hidden'); byId('quiz-home').classList.remove('hidden');
      setScopeNote(true);
      updateFavCounts(); updateFilterCount(); renderStats();
    });
    byId('btn-quiz-finish').addEventListener('click', function () { finishQuiz(); });
    byId('btn-submit').addEventListener('click', function () { recordAnswer(false); });
    byId('btn-peek').addEventListener('click', function () { recordAnswer(true); });
    byId('btn-next').addEventListener('click', function () { go(1); });
    byId('btn-prev').addEventListener('click', function () { go(-1); });
    byId('btn-ai-ds').addEventListener('click', function () { askAI('deepseek'); });
    byId('btn-ai-qw').addEventListener('click', function () { askAI('qwen'); });

    // 快捷键：1-4 选项 / Enter 提交或下一题 / 0 看答案 / ←→ 翻题
    document.addEventListener('keydown', function (e) {
      if (byId('quiz-card').classList.contains('hidden')) return;
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'textarea' || (tag === 'input' && e.target.type === 'text')) {
        if (e.key === 'Enter') { e.preventDefault(); if (!session.revealed) recordAnswer(false); else go(1); }
        return;
      }
      if (tag === 'input' || tag === 'select') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (/^[1-4]$/.test(e.key) && !session.revealed) {
        var opt = byId('question-card').querySelector('.option[data-key="' + 'ABCD'[Number(e.key) - 1] + '"]');
        if (opt) { opt.click(); }
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        if (!session.revealed) recordAnswer(false); else go(1);
      } else if (e.key === '0') {
        e.preventDefault(); if (!session.revealed) recordAnswer(true);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault(); go(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault(); go(1);
      }
    });

    byId('btn-retry').addEventListener('click', function () { startQuiz(session.list); });
    byId('btn-retry-wrong-2').addEventListener('click', function () {
      var ids = wrongIds();
      if (!ids.length) return;
      setView('quiz'); startQuiz(ids.map(function (id) { return BY_ID[id]; }).filter(Boolean));
    });
    byId('btn-summary-home').addEventListener('click', function () {
      byId('quiz-summary').classList.add('hidden'); byId('quiz-home').classList.remove('hidden');
      setScopeNote(true);
      updateFavCounts(); updateFilterCount(); renderStats();
    });

    byId('btn-notes-export').addEventListener('click', exportNotes);
    byId('btn-notes-import').addEventListener('click', function () { byId('notes-file').click(); });
    byId('notes-file').addEventListener('change', function () {
      if (this.files && this.files[0]) importNotes(this.files[0]);
      this.value = '';
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
    var psel = byId('p-chapter');
    CHAPTERS.forEach(function (c) {
      var o = document.createElement('option'); o.value = String(c.chapter);
      o.textContent = '第 ' + c.chapter + ' 章 · ' + c.title; sel.appendChild(o);
      var o2 = document.createElement('option'); o2.value = String(c.chapter);
      o2.textContent = '第 ' + c.chapter + ' 章'; psel.appendChild(o2);
    });
    initTheme(); bind(); updateFavCounts(); updateFilterCount(); updateNoteCount(); renderReviewHome();
    // 对外暴露，便于自动化验收
    window.PPR = {
      setView: setView, startQuiz: startQuiz, openChapter: openChapter,
      getProgress: function () { return progress; },
      getBank: function () { return BANK; },
      getChapters: function () { return CHAPTERS; },
      judge: judge, normBlank: normBlank,
      getNotes: function () { return notes; },
      syncPracticeToolbar: syncPracticeToolbar,
      getSession: function () { return session; },
      go: go, askAI: askAI, buildPrompt: function (q) { return pickPrompt(q || session.list[session.idx]); },
      renderQuestion: renderQuestion
    };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
