/* ==========================================================================
   VibePulse app.js — routing, the player, search and favourites.
   Everything here reads from assets/data.js and writes to this one page.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- icons */
  var P = {
    play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>',
    pause: '<path d="M7.5 5h3.2v14H7.5zM13.3 5h3.2v14h-3.2z" fill="currentColor" stroke="none"/>',
    next: '<path d="M7 5l8 7-8 7z" fill="currentColor" stroke="none"/><path d="M17.5 5v14"/>',
    prev: '<path d="M17 5l-8 7 8 7z" fill="currentColor" stroke="none"/><path d="M6.5 5v14"/>',
    shuffle: '<path d="M3 7h3.5l10 10H21"/><path d="M3 17h3.5l10-10H21"/><path d="M18 4l3 3-3 3"/><path d="M18 14l3 3-3 3"/>',
    repeat: '<path d="M4 10V8a3 3 0 013-3h10"/><path d="M20 14v2a3 3 0 01-3 3H7"/><path d="M17 2l3 3-3 3"/><path d="M7 19l-3 3 3 3" transform="translate(0,-3)"/>',
    heart: '<path d="M12 20s-7-4.6-7-9.4A3.9 3.9 0 0112 8a3.9 3.9 0 017 2.6c0 4.8-7 9.4-7 9.4z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    queue: '<path d="M4 6h11M4 12h11M4 18h7"/><path d="M19 12v7"/><circle cx="17.5" cy="19" r="1.8"/>',
    volume: '<path d="M4 10v4h3l4 3V7L7 10z"/><path d="M15.5 9.5a4 4 0 010 5"/>',
    expand: '<path d="M4 9V4h5"/><path d="M20 15v5h-5"/><path d="M15 4h5v5"/><path d="M9 20H4v-5"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    person: '<circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c1.4-3.4 4-5 7-5s5.6 1.6 7 5"/>',
    spark: '<path d="M12 4l1.7 4.6L18 10l-4.3 1.4L12 16l-1.7-4.6L6 10l4.3-1.4z"/><path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
    eq: '<path d="M6 9v6M12 5v14M18 8v8"/>',
    external: '<path d="M14 4h6v6"/><path d="M20 4l-8.5 8.5"/><path d="M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h4"/>',
    arrow: '<path d="M5 12h13"/><path d="M13 6l6 6-6 6"/>',
    music: '<circle cx="7" cy="18" r="2.6"/><circle cx="18" cy="16" r="2.6"/><path d="M9.6 18V7l11-2v11"/>',
    home: '<path d="M4 11l8-6.5 8 6.5"/><path d="M6.5 9.5V19h11V9.5"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3.5 2"/>',
    radio: '<circle cx="12" cy="12" r="2.4"/><path d="M7.8 7.8a6 6 0 000 8.4M16.2 16.2a6 6 0 000-8.4"/><path d="M5 5a10 10 0 000 14M19 19a10 10 0 000-14"/>',
    bookmark: '<path d="M7 4h10v16l-5-4-5 4z"/>'
  };
  function icon(name, cls) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" class="icn ' + (cls || '') + '">' + (P[name] || '') + '</svg>';
  }
  function paintIcons(root) {
    var nodes = (root || document).querySelectorAll('[data-icon]');
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.innerHTML = icon(n.getAttribute('data-icon'));
      n.removeAttribute('data-icon');
    }
  }

  /* --------------------------------------------------------------- utils */
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function durToSeconds(d) {
    var p = String(d || '').split(':');
    if (p.length !== 2) return 0;
    return (parseInt(p[0], 10) || 0) * 60 + (parseInt(p[1], 10) || 0);
  }
  function fmt(sec) {
    sec = Math.max(0, Math.floor(sec || 0));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }
  function humanTotal(seconds) {
    var h = Math.floor(seconds / 3600), m = Math.round((seconds % 3600) / 60);
    return (h ? h + 'h ' : '') + m + ' min';
  }
  function norm(s) {
    return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }
  function store(key, value) {
    try {
      if (value === undefined) return JSON.parse(localStorage.getItem(key) || 'null');
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { /* private mode or file:// — the site still works */ }
    return null;
  }

  /* ------------------------------------------------------------ the data */
  var CATS = VIBE.cats, PAGES = VIBE.pages, TRACKS = VIBE.tracks || {};
  var ACCENT = {
    violet: { a: '#a078ff', b: '#d0bcff', glow: 'rgba(160,120,255,.35)' },
    cyan: { a: '#03b5d3', b: '#4cd7f6', glow: 'rgba(76,215,246,.32)' },
    pink: { a: '#f751a1', b: '#ffb0cd', glow: 'rgba(247,81,161,.32)' }
  };

  /* All playlists flattened, with stable ids. */
  var LIB = {};                       /* id -> track */
  var BY_KEY = {};                    /* likeKey -> first song record with that title+artist */
  Object.keys(TRACKS).forEach(function (slug) {
    var page = PAGES[slug] || {};
    TRACKS[slug].tracks.forEach(function (t, i) {
      var id = slug + ':' + (t.n || i + 1);
      var rec = {
        id: id, slug: slug, page: page.name || slug, cat: page.cat || '', mood: page.mood || '',
        n: t.n || String(i + 1).padStart(2, '0'),
        title: t.t, artist: t.a, album: t.al, vibe: t.tag, bpm: t.bpm, key: t.key,
        length: t.d, seconds: durToSeconds(t.d), img: t.img || '',
        likeKey: norm((t.a ? t.a + ' ' : '') + t.t)
      };
      LIB[id] = rec;
      if (!BY_KEY[rec.likeKey]) BY_KEY[rec.likeKey] = rec;
    });
  });

  function playlistOf(slug) {
    return Object.keys(LIB).filter(function (id) { return LIB[id].slug === slug; }).map(function (id) { return LIB[id]; });
  }

  /* Home-page "Trending Right Now" picks, listed in assets/data.js. */
  var TRENDING = VIBE.trendingPicks || [];
  function trendingList() {
    var out = [], byTitle = {};
    Object.keys(LIB).forEach(function (id) {
      var t = LIB[id];
      if (!byTitle[norm(t.title)]) byTitle[norm(t.title)] = t;
    });
    TRENDING.forEach(function (title) { var t = byTitle[norm(title)]; if (t) out.push(t); });
    /* pad with a spread across categories if the mockups ever change */
    if (out.length < 12) {
      Object.keys(LIB).forEach(function (id) {
        if (out.length >= 12) return;
        var t = LIB[id];
        if (out.indexOf(t) === -1 && /0[1-4]$/.test(t.n)) out.push(t);
      });
    }
    return out;
  }
  var TOP50 = (function () {
    var pool = Object.keys(LIB).map(function (k) { return LIB[k]; });
    var picked = trendingList().slice();
    var step = Math.floor(pool.length / 50) || 1;
    for (var i = 0; i < pool.length && picked.length < 50; i += step) {
      if (picked.indexOf(pool[i]) === -1) picked.push(pool[i]);
    }
    return picked.slice(0, 50);
  })();

  var ALL_PLAYLISTS = Object.keys(PAGES).filter(function (s) { return PAGES[s].type === 'playlist'; });
  var TOTAL = Object.keys(LIB).length;

  /* ------------------------------------------------------------- player */
  var audio = new Audio();
  audio.preload = 'metadata';
  audio.volume = 0.8;

  /* Which songs have a real file in assets/audio.
     assets/audio/index.json holds the list: [], ["Artist - Title.mp3", …] or ["*"] to auto-detect. */
  var AUDIO = { files: null };
  function fileKey(name) {
    return String(name || '').toLowerCase().replace(/\.(mp3|m4a|ogg|wav|aac|flac)$/, '').replace(/[^a-z0-9]+/g, ' ').trim();
  }
  function audioInit() {
    if (location.protocol === 'file:') { return; }
    fetch('assets/audio/index.json', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (!Array.isArray(j) || j.indexOf('*') > -1) return;
        AUDIO.files = {};
        j.forEach(function (name) { AUDIO.files[fileKey(name)] = 'assets/audio/' + encodeURIComponent(name); });
      })
      .then(paintAudioStatus)
      .catch(function () { AUDIO.files = null; });
  }
  function audioReadyCount() {
    return AUDIO.files ? Object.keys(AUDIO.files).length : Object.keys(S.files).length;
  }
  function audioStatusText() {
    var n = audioReadyCount();
    if (AUDIO.files) {
      return n
        ? n + ' of ' + TOTAL + ' songs are listed in assets/audio and play right here. The rest open a stream link.'
        : 'assets/audio/index.json is empty, so nothing plays inside the site yet — every row still opens the song on YouTube or Spotify.';
    }
    return n
      ? n + ' song file' + (n === 1 ? '' : 's') + ' found in assets/audio so far. Press ▶ and the player keeps looking for the others.'
      : 'A song plays here as soon as its file is in assets/audio — press ▶ on any row to see the exact name to use. Until then the arrow opens it on YouTube or Spotify.';
  }
  function audioStatusHTML() {
    return '<p class="audio-status" id="audioStatus" hidden></p>';
  }
  function paintAudioStatus() {
    var node = $('#audioStatus');
    if (!node) return;
    node.hidden = false;
    node.innerHTML = esc(audioStatusText()) + ' <a href="#/info/music-setup">How to add your songs</a>';
  }

  var S = {
    queue: [],          /* array of track records, current play order */
    base: [],           /* same tracks before shuffling */
    pos: -1,
    playing: false,
    shuffle: false,
    repeat: 'off',      /* off | all | one */
    liked: store('vp.liked') || {},
    files: store('vp.files') || {},   /* likeKey -> filename that worked before */
    missing: {},                      /* session memory: id -> true, no local file */
    source: null                      /* where the queue came from, for the drawer label */
  };

  var el = {
    view: $('#view'), dock: $('#dock'), art: $('#dockArt'), title: $('#dockTitle'), artist: $('#dockArtist'),
    like: $('#dockLike'), play: $('#playBtn'), prev: $('#prevBtn'), next: $('#nextBtn'),
    shuffle: $('#shuffleBtn'), repeat: $('#repeatBtn'), seek: $('#seek'), vol: $('#volume'),
    cur: $('#curTime'), tot: $('#totTime'), fill: $('#dockFill'), notice: $('#notice'),
    queue: $('#queueBtn'), queueBody: $('#queueBody'), queueDrawer: $('#queueDrawer'), live: $('#liveRegion'),
    np: $('#nowPlaying'), npInner: $('#npInner'), search: $('#searchSheet'), searchInput: $('#searchInput'),
    searchBody: $('#searchBody'), nav: $('#mainnav')
  };

  function current() { return S.pos >= 0 ? S.queue[S.pos] : null; }

  function fileNameFor(t) {
    var safe = function (s) { return String(s || '').replace(/[\\/:*?"<>|#%]/g, '').replace(/\s+/g, ' ').trim(); };
    return (safe(t.artist) ? safe(t.artist) + ' - ' : '') + safe(t.title);
  }

  /* Files the player looks for inside assets/audio, in order. */
  function candidates(t) {
    var out = [], names = [fileNameFor(t), t.title], exts = ['mp3', 'm4a'];
    for (var e = 0; e < exts.length; e++) {
      for (var i = 0; i < names.length; i++) {
        if (!names[i]) continue;
        var p = 'assets/audio/' + encodeURIComponent(names[i]) + '.' + exts[e];
        if (out.indexOf(p) === -1) out.push(p);
      }
    }
    if (S.files[t.likeKey]) out.unshift(S.files[t.likeKey]);
    return out;
  }

  /* Which of the possible names really exists? Asked once per song, then remembered. */
  function findLocal(t, done) {
    if (AUDIO.files) {
      return done(AUDIO.files[fileKey(fileNameFor(t))] || AUDIO.files[fileKey(t.title)] || null);
    }
    if (S.missing[t.id]) return done(null);
    if (S.files[t.likeKey]) return done(S.files[t.likeKey]);
    var list = candidates(t);
    if (location.protocol === 'file:') return probeMedia(t, list, done);
    Promise.all(list.map(function (url) {
      return fetch(url, { method: 'HEAD', cache: 'no-store' })
        .then(function (r) { return r.ok ? url : null; })
        .catch(function () { return null; });
    })).then(function (found) {
      var url = null;
      for (var i = 0; i < found.length && !url; i++) url = found[i];
      if (url) { S.files[t.likeKey] = url; store('vp.files', S.files); paintAudioStatus(); }
      else { S.missing[t.id] = true; }
      done(url);
    });
  }

  /* Opened straight from the folder, fetch is not allowed — ask the audio element instead. */
  function probeMedia(t, list, done) {
    var i = 0, timer = null;
    function stop() { if (timer) { clearTimeout(timer); timer = null; } }
    function attempt() {
      if (i >= list.length) { S.missing[t.id] = true; return done(null); }
      var url = list[i++], probe = new Audio();
      timer = setTimeout(function () { probe.src = ''; attempt(); }, 4000);
      probe.preload = 'metadata';
      probe.onloadedmetadata = function () {
        stop();
        S.files[t.likeKey] = url; store('vp.files', S.files);
        paintAudioStatus();
        probe.src = '';
        done(url);
      };
      probe.onerror = function () { stop(); attempt(); };
      probe.src = url;
    }
    attempt();
  }

  function setTrack(t, autoplay) {
    if (!t) return;
    el.title.textContent = t.title;
    el.artist.textContent = t.artist || t.page;
    el.art.innerHTML = artTag(t);
    el.art.setAttribute('data-art', t.likeKey);
    el.dock.hidden = false;
    paintIcons(el.dock);
    el.tot.textContent = fmt(t.seconds);
    el.cur.textContent = '0:00';
    el.seek.value = 0;
    el.seek.style.setProperty('--fill', '0%');
    el.fill.style.width = '0%';
    syncLike();
    paintRows();
    renderQueue();
    renderNowPlaying();
    document.title = t.title + ' — ' + (t.artist || t.page) + ' · VibePulse';
    el.live.textContent = 'Loaded ' + t.title + ' by ' + (t.artist || t.page);
    setMediaSession(t);
    if (autoplay) loadAndPlay(t);
  }

  function setMediaSession(t) {
    if (!('mediaSession' in navigator) || !window.MediaMetadata) return;
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: t.title, artist: t.artist || t.page, album: t.page,
        artwork: t.img ? [{ src: t.img, sizes: '256x256', type: 'image/jpeg' }] : []
      });
    } catch (e) { /* some browsers refuse incomplete origins */ }
  }

  function loadAndPlay(t) {
    findLocal(t, function (url) {
      if (!url) { S.playing = false; paintTransport(); showNotice(t, null); return; }
      audio.src = url;
      audio.play().then(function () {
        S.playing = true; paintTransport();
        el.live.textContent = 'Playing ' + t.title;
      }).catch(function (err) {
        if (err && err.name === 'NotAllowedError') {
          showNotice(t, 'The file is here, but the browser wants a real click first. Press play again.');
          return;
        }
        reportFailure(t, url);
      });
    });
  }

  /* A file can fail because it is not there, or because the browser cannot decode it. */
  function reportFailure(t, src) {
    if (location.protocol === 'file:') return playFailed(src, t, true);
    fetch(src, { method: 'HEAD', cache: 'no-store' })
      .then(function (r) { playFailed(src, t, !!r.ok); })
      .catch(function () { playFailed(src, t, false); });
  }

  function playFailed(url, t, exists) {
    if (exists) {
      showNotice(t, 'That file is in assets/audio but the browser cannot play it. Try re-saving it as a plain MP3 or M4A.');
      return;
    }
    delete S.files[t.likeKey];
    store('vp.files', S.files);
    S.missing[t.id] = true;
    S.playing = false;
    paintTransport();
    paintAudioStatus();
    showNotice(t, null);
  }

  function shuffleAround(list, first) {
    var rest = list.filter(function (x) { return x !== first; });
    for (var i = rest.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), tmp = rest[i];
      rest[i] = rest[j]; rest[j] = tmp;
    }
    return first ? [first].concat(rest) : rest;
  }

  function playTrack(t, queue) {
    if (queue && queue.length) {
      S.base = queue.slice();
      S.queue = S.shuffle ? shuffleAround(queue, t) : queue.slice();
    } else if (S.queue.indexOf(t) < 0) {
      S.base = [t];
      S.queue = [t];
    }
    S.source = (PAGES[t.slug] || {}).name || 'Queue';
    S.pos = S.queue.indexOf(t);
    setTrack(t, true);
  }

  function togglePlay() {
    if (!current()) { var hot = trendingList(); if (hot.length) playTrack(hot[0], hot); return; }
    if (S.playing) { audio.pause(); S.playing = false; paintTransport(); }
    else {
      if (S.missing[current().id]) { showNotice(current(), null); return; }
      audio.play().then(function () { S.playing = true; paintTransport(); }).catch(function () { loadAndPlay(current()); });
    }
  }

  function step(delta) {
    if (!S.queue.length) return;
    var next = S.pos + delta;
    if (next >= S.queue.length) next = S.repeat === 'all' ? 0 : S.queue.length - 1;
    if (next < 0) next = 0;
    S.pos = next;
    setTrack(S.queue[next], true);
  }

  function paintTransport() {
    var t = current();
    el.play.innerHTML = icon(S.playing ? 'pause' : 'play');
    el.play.setAttribute('aria-label', S.playing ? 'Pause' : 'Play');
    el.shuffle.classList.toggle('on', S.shuffle);
    el.repeat.classList.toggle('on', S.repeat !== 'off');
    el.repeat.innerHTML = icon(S.repeat === 'one' ? 'bookmark' : 'repeat');
    el.prev.disabled = !S.queue.length;
    el.next.disabled = !S.queue.length;
    if (t) { paintRows(); if (!el.np.hidden) renderNowPlaying(); }
  }

  function paintRows() {
    var t = current();
    $$('.track').forEach(function (row) {
      var id = row.getAttribute('data-id');
      var on = t && id === t.id;
      row.classList.toggle('playing', !!on);
      var btn = $('.t-play', row);
      if (btn) btn.innerHTML = icon(on && S.playing ? 'pause' : 'play');
      var idx = $('.idx', row);
      if (idx) idx.innerHTML = on && S.playing ? '<span class="equalizer"><i></i><i></i><i></i></span>' : esc(row.getAttribute('data-n'));
    });
    $$('.queue-row').forEach(function (row) {
      row.classList.toggle('active', !!(t && row.getAttribute('data-id') === t.id));
    });
  }

  /* ------------------------------------------------------------ notices */
  function ytLink(t) {
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent((t.artist ? t.artist + ' ' : '') + t.title);
  }
  function spotifyLink(t) {
    return 'https://open.spotify.com/search/' + encodeURIComponent((t.artist ? t.artist + ' ' : '') + t.title);
  }

  var noticeTimer = null;
  function showNotice(t, message) {
    el.notice.hidden = false;
    el.notice.innerHTML =
      '<div>' +
        (message ? '<p>' + esc(message) + '</p>' :
          '<p><b>' + esc(t.title) + '</b> — ' + esc(t.artist) + ' is not in <span class="hint">assets/audio</span> yet, so it cannot play inside the site.</p>') +
        '<p class="hint">Save your own file as <span class="hint">' + esc(fileNameFor(t)) + '.mp3</span> to play it here, or open the official stream below.</p>' +
      '</div>' +
      '<div class="notice-actions">' +
        '<a class="mini mini-a" target="_blank" rel="noopener" href="' + esc(ytLink(t)) + '">' + icon('play', '') + ' YouTube</a>' +
        '<a class="mini mini-b" target="_blank" rel="noopener" href="' + esc(spotifyLink(t)) + '">' + icon('external', '') + ' Spotify</a>' +
        '<a class="mini mini-b" href="#/info/music-setup">' + icon('spark', '') + ' How to add music</a>' +
        '<button class="mini mini-b" data-close-notice type="button">Dismiss</button>' +
      '</div>';
    el.notice.querySelector('[data-close-notice]').addEventListener('click', hideNotice);
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(hideNotice, 14000);
  }
  function hideNotice() { el.notice.hidden = true; el.notice.innerHTML = ''; }

  /* ------------------------------------------------------------- likes */
  function syncLike() {
    var t = current();
    el.like.classList.toggle('on-pink', !!(t && S.liked[t.likeKey]));
    $$('.like-row').forEach(function (b) {
      b.classList.toggle('on-pink', !!S.liked[b.getAttribute('data-like')]);
    });
  }
  function toggleLike(key) {
    if (S.liked[key]) delete S.liked[key]; else S.liked[key] = true;
    store('vp.liked', S.liked);
    syncLike();
  }

  /* --------------------------------------------------------------- audio */
  audio.addEventListener('timeupdate', function () {
    var d = audio.duration && isFinite(audio.duration) ? audio.duration : (current() ? current().seconds : 0);
    if (!d) return;
    var pct = audio.currentTime / d;
    el.cur.textContent = fmt(audio.currentTime);
    el.tot.textContent = fmt(d);
    el.seek.value = Math.round(pct * 1000);
    el.seek.style.setProperty('--fill', (pct * 100).toFixed(2) + '%');
    el.fill.style.width = (pct * 100).toFixed(2) + '%';
  });
  audio.addEventListener('ended', function () {
    if (S.repeat === 'one') { audio.currentTime = 0; audio.play(); return; }
    step(1);
  });
  audio.addEventListener('pause', function () { S.playing = false; paintTransport(); });
  audio.addEventListener('play', function () { S.playing = true; paintTransport(); });
  audio.addEventListener('error', function () { S.playing = false; paintTransport(); });

  el.play.addEventListener('click', togglePlay);
  el.prev.addEventListener('click', function () { step(-1); });
  el.next.addEventListener('click', function () { step(1); });
  el.like.addEventListener('click', function () { var t = current(); if (t) toggleLike(t.likeKey); });
  el.shuffle.addEventListener('click', function () {
    S.shuffle = !S.shuffle;
    var cur = current();
    if (S.shuffle) {
      S.base = S.queue.slice();
      S.queue = shuffleAround(S.base, cur);
      S.pos = cur ? 0 : -1;
    } else if (S.base.length) {
      S.queue = S.base.slice();
      S.pos = cur ? S.queue.indexOf(cur) : -1;
    }
    paintTransport(); renderQueue();
    el.live.textContent = S.shuffle ? 'Shuffle on' : 'Shuffle off';
  });
  el.repeat.addEventListener('click', function () {
    S.repeat = S.repeat === 'off' ? 'all' : S.repeat === 'all' ? 'one' : 'off';
    paintTransport();
    el.live.textContent = 'Repeat ' + S.repeat;
  });
  el.seek.addEventListener('input', function () {
    var d = audio.duration && isFinite(audio.duration) ? audio.duration : (current() ? current().seconds : 0);
    if (!d) return;
    audio.currentTime = (el.seek.value / 1000) * d;
    el.seek.style.setProperty('--fill', (el.seek.value / 10).toFixed(2) + '%');
  });
  el.vol.addEventListener('input', function () {
    audio.volume = el.vol.value / 100;
    audio.muted = el.vol.value === 0;
    el.vol.style.setProperty('--fill', el.vol.value + '%');
  });
  el.vol.style.setProperty('--fill', '80%');

  /* queue drawer */
  function renderQueue() {
    var t = current();
    el.queueBody.innerHTML = S.queue.length
      ? S.queue.map(function (q) {
          return '<div class="queue-row' + (t && q.id === t.id ? ' active' : '') + '" data-id="' + esc(q.id) + '" role="button" tabindex="0">' +
            '<span class="q-num">' + esc(q.n) + '</span>' +
            '<div style="min-width:0"><div class="q-title">' + esc(q.title) + '</div><div class="q-artist">' + esc(q.artist) + '</div></div>' +
            '<span class="q-len">' + esc(q.length) + '</span>' +
          '</div>';
        }).join('')
      : '<p class="empty">Nothing queued yet.</p>';
    $$('.queue-row', el.queueBody).forEach(function (row) {
      function pick() {
        var i = S.queue.map(function (q) { return q.id; }).indexOf(row.getAttribute('data-id'));
        if (i > -1) setTrack(S.queue[i], true);
      }
      row.addEventListener('click', pick);
      row.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.code === 'Space') { e.preventDefault(); pick(); }
      });
    });
  }
  el.queue.addEventListener('click', function () { renderQueue(); el.queueDrawer.hidden = false; });
  $('#queueClose').addEventListener('click', function () { el.queueDrawer.hidden = true; });

  /* full screen player */
  function renderNowPlaying() {
    var t = current();
    if (!t) return;
    var bars = '';
    for (var i = 0; i < 22; i++) bars += '<i style="animation-delay:' + (i * 0.07).toFixed(2) + 's;height:' + (8 + (i % 5) * 7) + 'px"></i>';
    el.npInner.innerHTML =
      '<div class="np-art" data-art="' + esc(t.likeKey) + '">' + artTag(t) + '</div>' +
      '<p class="eyebrow">' + esc(t.page) + '</p>' +
      '<h2>' + esc(t.title) + '</h2>' +
      '<p class="np-artist">' + esc(t.artist || t.page) + '</p>' +
      '<p class="np-meta">' + esc([t.album, t.vibe, t.bpm ? t.bpm + ' BPM' : '', t.key, t.length].filter(Boolean).join('  ·  ')) + '</p>' +
      '<div class="np-bars">' + bars + '</div>' +
      '<div class="np-controls">' +
        '<button class="icon-btn' + (S.shuffle ? ' on' : '') + '" data-np="shuffle" type="button" aria-label="Shuffle the queue">' + icon('shuffle') + '</button>' +
        '<button class="icon-btn" data-np="prev" type="button" aria-label="Previous song">' + icon('prev') + '</button>' +
        '<button class="play-btn" data-np="play" type="button" aria-label="' + (S.playing ? 'Pause' : 'Play') + '">' + icon(S.playing ? 'pause' : 'play') + '</button>' +
        '<button class="icon-btn" data-np="next" type="button" aria-label="Next song">' + icon('next') + '</button>' +
        '<button class="icon-btn' + (S.repeat !== 'off' ? ' on' : '') + '" data-np="repeat" type="button" aria-label="Repeat">' + icon(S.repeat === 'one' ? 'bookmark' : 'repeat') + '</button>' +
      '</div>' +
      '<div class="stream-links">' +
        '<a class="btn btn-ghost" target="_blank" rel="noopener" href="' + esc(ytLink(t)) + '">' + icon('external') + ' Watch on YouTube</a>' +
        '<a class="btn btn-quiet" target="_blank" rel="noopener" href="' + esc(spotifyLink(t)) + '">' + icon('external') + ' Open in Spotify</a>' +
      '</div>' +
      '<p class="np-meta" style="margin-top:1.5rem">File that plays here: <span class="inline-code">' + esc(fileNameFor(t)) + '.mp3</span></p>';
    $$('#npInner [data-np]').forEach(function (b) {
      b.addEventListener('click', function () {
        var a = b.getAttribute('data-np');
        if (a === 'prev') step(-1);
        else if (a === 'next') step(1);
        else if (a === 'shuffle' || a === 'repeat') el[a].click();
        else togglePlay();
        renderNowPlaying();
      });
    });
    hydrateArt();
  }
  $('#expandBtn').addEventListener('click', function () { renderNowPlaying(); el.np.hidden = false; });
  $('#npClose').addEventListener('click', function () { el.np.hidden = true; });

  /* media keys / lock-screen controls where the browser supports them */
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.setActionHandler('play', function () { audio.play(); });
      navigator.mediaSession.setActionHandler('pause', function () { audio.pause(); });
      navigator.mediaSession.setActionHandler('nexttrack', function () { step(1); });
      navigator.mediaSession.setActionHandler('previoustrack', function () { step(-1); });
    } catch (e) { /* older browsers */ }
  }

  /* ------------------------------------------------------------- renders */
  function accentOf(page) { return ACCENT[(CATS[page.cat] || {}).accent] || ACCENT.violet; }

  /* Rows without their own artwork get a coloured initial tile, like the mockups. */
  function hue(s) {
    var h = 0, str = String(s || '');
    for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
    return h;
  }
  function artTag(t) {
    var url = artFor(t);
    if (url) return '<img src="' + esc(url) + '" alt="" loading="lazy">';
    var h = hue(t.title);
    return '<span class="letter" style="background:linear-gradient(135deg,hsl(' + h + ' 60% 30%),hsl(' + ((h + 70) % 360) + ' 65% 22%))">' +
      esc((t.title || '?').slice(0, 1).toUpperCase()) + '</span>';
  }

  /* ------------------------------------------------- real cover artwork
     The photo for each song comes from Apple's public iTunes Search API, asked
     one song at a time only while that song is on screen, and remembered in
     localStorage so the next visit is instant. No photo is stored in the site
     itself, and a song whose picture is not found (or a visitor with no
     internet) simply keeps the coloured initial tile. */
  var ART = store('vp.art') || {};
  var ART_PX = 400;                 /* cover size asked from Apple's image CDN */
  /* How sure the match has to be before a picture is used: the singer confirmed
     plus the title exact, or the title exact apart from a version tag. */
  var ART_MIN = 7;
  var ART_FAST = 3000;              /* ms between lookups: Apple allows ~20 a minute */
  var ART_SLOW_TO = 12000;          /* ... and the longest we ever wait between two */
  var artQueue = [], artTimer = null, artLastAt = 0, artPace = ART_FAST, artOkRun = 0;
  var artSeen = {};                 /* key -> asked, or waiting to be asked */
  var artOn = {};                   /* keys with a tile on the page you are looking at */

  function artFor(t) { return ART[t.likeKey] || t.img || ''; }

  /* Apple spells titles both ways — "Dança" and "Danca" — and searches are
     accent-sensitive, so accents are folded away on both sides before comparing.
     NFD does most of it; the letters below have no accents to strip. */
  var ART_LETTERS = { '\u00f8': 'o', '\u00fe': 'th', '\u00f0': 'd', '\u0111': 'd', '\u00e6': 'ae', '\u0153': 'oe', '\u00df': 'ss' };
  function artFlat(s) {
    return String(s || '').toLowerCase()
      .replace(/[\u00f8\u00fe\u00f0\u0111\u00e6\u0153\u00df]/g, function (c) { return ART_LETTERS[c]; })
      .normalize('NFD').replace(/[\u0300-\u036f]+/g, '')
      .replace(/[.,!?:;"'`()\[\]&/\\-]+/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  /* "snowfall (Chill Wave Redux)" is listed as "snowfall" in most catalogues. */
  function artCore(s) {
    return artFlat(String(s || '')
      .replace(/[(\[].*$/, ' ')
      .replace(/\s(?:feat|ft|with)\b.*$/i, ' '));
  }
  var ART_STOP = { ft: 1, feat: 1, featuring: 1, with: 1, and: 1, the: 1, x: 1, vs: 1 };

  /* How much of one phrase appears inside the other, as whole words. */
  function artOverlap(want, got) {
    if (!want || !got) return 0;
    var words = want.split(' '), sig = 0, hit = 0;
    words.forEach(function (w) {
      if (w.length > 2 && !ART_STOP[w]) {
        sig++;
        if ((' ' + got + ' ').indexOf(' ' + w + ' ') > -1) hit++;
      }
    });
    if (!sig) return 0;
    if (hit === sig) return 4;
    return hit / sig >= 0.6 ? 2 : 0;
  }

  /* This genre lives on sped-up and slowed edits, so "GigaChad Theme [Sped Up]"
     is the same song while "Shadow Voice" is not "Shadow". The extra words decide. */
  var ART_EDIT = /^(sped|speed|slow|slowed|slow+reverb|reverb|nightcore|daycore|remix|edit|version|ver|mix|live|acoustic|instrumental|bootleg|mashup|extended|radio|slush|dark|chopped|screwed|part|orig|original)\b/;

  /* Does the singer credit line up? Whole words only, so a two-letter name
     cannot hide inside an unrelated one. Our own list often adds a music
     director next to the singer, so matching on the lead name alone is allowed. */
  function artHasWords(hay, needle) {
    return (' ' + hay + ' ').indexOf(' ' + needle + ' ') > -1;
  }
  function artArtistEvidence(want, got) {
    if (!want || !got) return 0;
    if (want === got || artHasWords(got, want) || artHasWords(want, got)) return 4;
    return artOverlap(want, got) ? 2 : 0;
  }

  /* How many letter changes turn one phrase into the other. */
  function artDistance(a, b) {
    if (a === b) return 0;
    if (!a || !b) return 99;
    var prev = [], cur, i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1));
      }
      prev = cur;
    }
    return prev[b.length];
  }

  /* Title and singer both have to line up: a same-titled song by someone else
     must not steal the tile. */
  function artScore(t, r) {
    if (r.kind && r.kind !== 'song') return 0;
    var want = artFlat(t.title), core = artCore(t.title);
    var gotFull = artFlat(r.trackName), got = artCore(r.trackName);
    var wantA = artFlat(t.artist), gotA = artFlat(r.artistName);
    if (!gotFull) return 0;

    var ae = 0;
    if (!wantA) ae = 1;
    else {
      ae = artArtistEvidence(wantA, gotA);
      var lead = artLead(t.artist);
      if (ae < 4 && lead && lead !== wantA) ae = Math.max(ae, artArtistEvidence(lead, gotA));
    }
    if (wantA && !ae) return 0;

    var s;
    /* Both sides have the "(...)" and "[...]" tags taken off first, otherwise
       "GigaChad Theme (Phonk House Version)" could never meet
       "GigaChad Theme (Phonk House Version) [Sped Up]". */
    if (got && (got === core || gotFull === want || gotFull === core)) s = 6;
    else if (got && (got.indexOf(core) === 0 || core.indexOf(got) === 0)) {
      var rest = got.length > core.length ? got.slice(core.length) : core.slice(got.length);
      s = rest && !ART_EDIT.test(rest.trim()) ? 1 : 3;   /* a new word, not a version tag */
    }
    else {
      s = artOverlap(core, gotFull);
      if (s > 2) s = 2;                                  /* a partial title never outweighs the singer */
      /* A song spelled a little differently — "Lukka Chuppi" for "Luka Chuppi" —
         is still the same record when the singer is confirmed. On its own it is not. */
      if (!s && ae === 4 && core.length > 4 && got && artDistance(core, got) <= 2) s = 3;
    }
    if (!s) return 0;
    s += ae;
    if (t.album && artFlat(r.collectionName) === artFlat(t.album)) s += 2;
    return s;
  }

  /* Apple finds nothing at all for "DJ Samir, Slowboy brazilian dança phonk": a
     list of names has to be narrowed to the lead artist, and the accents dropped,
     because its search is accent-sensitive. */
  function artLead(artist) {
    return artFlat(String(artist || '').split(/[,&]/)[0]);
  }

  function artQueries(t) {
    var core = artCore(t.title), who = artLead(t.artist), out = [];
    if (who && core) out.push(who + ' ' + core);
    if (core) out.push(core);
    if (who) out.push(who);
    if (!out.length && t.title) out.push(artFlat(t.title));
    return out;
  }

  /* Apple runs a separate catalogue per country, and the two differ more than
     you would expect: "Alag Aasmaan" by Anuv Jain is in the Indian store and in
     neither of the others. A page's language is only a guess at the store, so
     Urdu pages are asked in Pakistan, India and the US before giving up. */
  function artStores(t) {
    var s = t.slug || '';
    if (s.indexOf('urdu') > -1) return ['PK', 'IN', 'US'];
    if (s.indexOf('hindi') > -1) return ['IN', 'US'];
    return ['US'];
  }

  /* The wordings to try, in order, for one song. Kept short on purpose: every
     step is one of the very few lookups per minute Apple allows. */
  function artLadder(t) {
    var q = artQueries(t), stores = artStores(t), out = [];
    stores.forEach(function (c) {
      if (out.length < 2 || stores.length >= 3) out.push({ c: c, q: q[0] });
    });
    if (q[1] && out.length < 3) out.push({ c: stores[0], q: q[1], wide: true });
    return out.slice(0, 3);
  }

  function artEnqueue(t) {
    if (!t || ART[t.likeKey] || artSeen[t.likeKey]) return;
    artSeen[t.likeKey] = 1;
    artQueue.push({ key: t.likeKey, step: 0, tries: 0 });
    artWake(0);
  }

  function artWake(delay) {
    if (artTimer) return;
    artTimer = setTimeout(function () { artTimer = null; artDrain(); }, delay);
  }

  /* One request at a time, spaced out. Every attempt goes through here, so the
     gap between two tries of the same song is the same as between two songs.
     A song whose tile you have navigated away from is dropped instead of asked
     for: the minute's few lookups should go to the list you are actually looking
     at, otherwise page 2 of a playlist never gets its pictures. */
  function artDrain() {
    if (!artQueue.length) return;
    var gap = artPace - (Date.now() - artLastAt);
    if (gap > 0) return artWake(gap);
    var item = artQueue.shift();
    var t = BY_KEY[item.key];
    if (!t || ART[t.likeKey] || !artOn[t.likeKey]) { delete artSeen[item.key]; return artWake(0); }
    artLastAt = Date.now();
    artAsk(t, item);
    if (artQueue.length) artWake(60);
  }

  /* A refusal usually means "you asked too often": wait longer, then carry on. */
  function artBackOff() {
    artPace = Math.min(ART_SLOW_TO, Math.max(artPace * 2, 3000));
    artOkRun = 0;
  }

  function artFetch(url) {
    var opts = {}, timer = null;
    if (window.AbortController) {
      var ctrl = new AbortController();
      opts.signal = ctrl.signal;
      timer = setTimeout(function () { ctrl.abort(); }, 7000);
    }
    return fetch(url, opts).then(function (r) {
      if (timer) clearTimeout(timer);
      return r;
    }, function (e) {
      if (timer) clearTimeout(timer);
      throw e;
    });
  }

  /* One answer usually holds several other songs from the same page — the same
     singer, or the same record. Match those right away instead of spending a
     later lookup on each of them. */
  function artHarvest(t, results) {
    var a = artFlat(t.artist);
    if (!a || !results.length) return;
    for (var i = artQueue.length - 1; i >= 0; i--) {
      var o = BY_KEY[artQueue[i].key];
      if (!o || artQueue[i].step > 0 || ART[o.likeKey] || artFlat(o.artist) !== a) continue;
      var best = null, bs = 0;
      results.forEach(function (r) { var sc = artScore(o, r); if (sc > bs) { bs = sc; best = r; } });
      if (best && bs >= ART_MIN && best.artworkUrl100) { artGot(o, best.artworkUrl100); artQueue.splice(i, 1); }
    }
  }

  function artBest(t, results) {
    var best = null, bs = 0;
    (results || []).forEach(function (r) {
      var sc = artScore(t, r);
      if (sc > bs) { bs = sc; best = r; }
    });
    return best && bs >= ART_MIN && best.artworkUrl100 ? best : null;
  }

  function artAsk(t, item) {
    var steps = artLadder(t);
    if (item.step >= steps.length) return artRelease(t);
    var s = steps[item.step];
    /* Apple's own limit is 20 lookups a minute per visitor, so each one has to
       carry as much as possible: a wide result list, not just the first few. */
    var url = 'https://itunes.apple.com/search?media=music&entity=song&limit=' +
      (s.wide ? 100 : 50) + '&country=' + s.c + '&term=' + encodeURIComponent(s.q);
    artFetch(url).then(function (r) {
      if (!r.ok) throw new Error('http ' + r.status);
      return r.json();
    }).then(function (j) {
      var results = (j && j.results) || [];
      artHarvest(t, results);
      var hit = artBest(t, results);
      if (hit) return artGot(t, hit.artworkUrl100);
      item.step++;                       /* try the next wording, behind the rest */
      artQueue.push(item);
      artWake(0);
    }).catch(function () {
      artBackOff();                      /* refused, blocked or offline */
      item.tries++;
      if (item.tries <= 2) artQueue.push(item);   /* ask again later, don't give up */
      else artRelease(t);
      artWake(0);
    });
  }

  /* Forget a song we stopped asking for so the next visit to its page tries again. */
  function artRelease(t) { delete artSeen[t.likeKey]; }

  function artGot(t, raw) {
    artOkRun++;
    if (artOkRun >= 5 && artPace > ART_FAST) {
      artOkRun = 0;
      artPace = Math.max(ART_FAST, Math.round(artPace / 2));
    }
    ART[t.likeKey] = raw.replace(/\/\d+x\d+bb\./, '/' + ART_PX + 'x' + ART_PX + 'bb.');
    var keys = Object.keys(ART);
    if (keys.length > 800) { delete ART[keys[0]]; store('vp.art', ART); }
    else store('vp.art', ART);
    paintArt(t.likeKey);
  }

  /* Drop the new photo into every tile already showing that song. */
  function paintArt(key) {
    var url = ART[key];
    if (!url) return;
    var nodes = document.querySelectorAll('[data-art]');
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].getAttribute('data-art') !== key) continue;
      nodes[i].innerHTML = '<img src="' + esc(url) + '" alt="" loading="lazy">';
      nodes[i].classList.add('art-in');
    }
    var cur = current();
    if (cur && cur.likeKey === key) setMediaSession(cur);
  }

  /* Ask for the photos of whatever is currently on screen. Tiles inside a panel
     that is closed (the search sheet, the full-screen player) are left out: they
     are asked for the moment that panel is opened instead of now. */
  function hydrateArt() {
    if (location.protocol === 'file:') return;   /* browsers refuse API calls from a folder page */
    var nodes = document.querySelectorAll('[data-art]');
    artOn = {};
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].closest && nodes[i].closest('[hidden]')) continue;
      var key = nodes[i].getAttribute('data-art');
      artOn[key] = 1;
      var t = BY_KEY[key];
      if (t) artEnqueue(t);
    }
  }

  function trackRowHTML(t) {
    return '<div class="track" data-id="' + esc(t.id) + '" data-n="' + esc(t.n) + '">' +
      '<div class="t-num"><button class="t-play" type="button" aria-label="Play ' + esc(t.title) + '">' + icon('play') + '</button><span class="idx">' + esc(t.n) + '</span></div>' +
      '<div class="t-title-wrap">' +
        '<span class="t-art" data-art="' + esc(t.likeKey) + '">' + artTag(t) + '</span>' +
        '<span class="t-text"><span class="t-title">' + esc(t.title) + '</span>' +
        '<span class="t-artist">' + esc(t.artist) + '</span></span>' +
      '</div>' +
      '<div class="t-album">' + esc(t.album || '—') + '</div>' +
      '<div class="t-tag"><span class="vibe">' + esc(t.vibe || '—') + '</span>' +
        '<span class="meta">' + esc([t.bpm ? t.bpm + ' BPM' : '', t.key, t.length].filter(Boolean).join(' · ')) + '</span></div>' +
      '<div class="t-dur">' + esc(t.length) + '</div>' +
      '<div class="t-act">' +
        '<a class="icon-btn" href="' + esc(ytLink(t)) + '" target="_blank" rel="noopener" title="Stream on YouTube" aria-label="Stream ' + esc(t.title) + ' on YouTube">' + icon('external') + '</a>' +
        '<button class="icon-btn like-row" data-like="' + esc(t.likeKey) + '" type="button" aria-label="Save ' + esc(t.title) + '">' + icon('heart') + '</button>' +
      '</div>' +
    '</div>';
  }

  function bindTrackRows(ctx) {
    $$('.track', ctx).forEach(function (row) {
      row.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        var t = LIB[row.getAttribute('data-id')];
        if (!t) return;
        if (e.target.closest('.like-row')) { toggleLike(t.likeKey); return; }
        playTrack(t, visibleList());
      });
    });
    syncLike();
  }

  function heroHTML(page, extra) {
    var a = accentOf(page);
    return '<section class="hero"><div class="hero-glow" style="background:radial-gradient(circle,' + a.glow + ',transparent 70%)"></div><div class="wrap">' +
      '<p class="freq-badge kicker"><span class="dot"></span>' + esc(page.kicker || '') + '</p>' +
      '<h1>' + esc(page.title || page.name) + '</h1>' +
      (page.sub ? '<p class="hero-sub">' + page.sub + '</p>' : '') +
      (page.desc ? '<p class="hero-desc">' + esc(page.desc) + '</p>' : '') +
      (extra || '') +
      '</div></section>';
  }

  function runningSeconds(list) {
    return list.reduce(function (s, t) { return s + t.seconds; }, 0);
  }

  function statsHTML(list, page) {
    var total = runningSeconds(list);
    var bpms = list.map(function (t) { return parseInt(t.bpm, 10); }).filter(Boolean);
    var lo = bpms.length ? Math.min.apply(null, bpms) : 0, hi = bpms.length ? Math.max.apply(null, bpms) : 0;
    return '<div class="hero-stats">' +
      '<div class="stat"><b>' + list.length + '</b><span>Tracks</span></div>' +
      '<div class="stat"><b>' + humanTotal(total) + '</b><span>Total runtime</span></div>' +
      (bpms.length ? '<div class="stat"><b>' + lo + '–' + hi + '</b><span>BPM range</span></div>' : '') +
      (page.meter ? '<div class="stat"><b>' + page.meter.value + '%</b><span>' + esc(page.meter.label) + '</span></div>' : '') +
      '</div>' + audioStatusHTML();
  }

  function moodChipsHTML(cat, activeSlug) {
    var c = CATS[cat];
    if (!c) return '';
    return '<div class="moodchips">' + c.moods.map(function (m) {
      return '<a class="moodchip' + (m.slug === activeSlug ? ' active' : '') + '" href="#/' + esc(m.slug) + '">' +
        '<span>' + m.emoji + '</span>' + esc(m.label) + '</a>';
    }).join('') + '</div>';
  }

  /* ------------------------------------------------------------- the pages */
  function renderHome() {
    var trend = trendingList().slice(0, 6);
    var html =
      '<section class="hero"><div class="hero-glow"></div><div class="wrap">' +
        '<p class="freq-badge"><span class="dot"></span>' + esc(PAGES.home.kicker) + ' <i>/</i> ' + esc(PAGES.home.kickerNote) + '</p>' +
        '<div class="emblem"><span class="emblem-core">' + icon('eq') + '</span></div>' +
        '<h1>Vibe<span>Pulse</span></h1>' +
        '<p class="hero-sub">' + PAGES.home.sub + '</p>' +
        '<p class="hero-desc">' + esc(PAGES.home.desc) + '</p>' +
        audioStatusHTML() +
      '</div></section>' +

      '<section class="wrap section" style="padding-top:0"><div class="grid cats">' +
        Object.keys(CATS).map(function (k) {
          var c = CATS[k], a = ACCENT[c.accent], pl = playlistOf(c.hub);
          return '<a class="cat-card" href="#/' + esc(c.hub) + '">' +
            '<span class="halo" style="background:' + a.a + '"></span>' +
            '<span class="stripe" style="background:linear-gradient(90deg,' + a.a + ',' + a.b + ')"></span>' +
            '<span class="cat-top"><span class="cat-emoji">' + c.emoji + '</span>' +
              '<span class="badge" style="background:' + a.a + '22;color:' + a.b + '">' + esc(c.badge) + '</span></span>' +
            '<div><h2>' + esc(c.label) + '</h2><p>' + esc(c.blurb) + '</p></div>' +
            '<span class="tags">' + c.tags.map(function (tg) { return '<span class="tag">' + esc(tg) + '</span>'; }).join('') + '</span>' +
            '<span class="cat-foot"><span class="go" style="color:' + a.b + '">' + esc(c.cta) + '</span>' +
              '<span class="go-circle" style="background:' + a.a + '">' + icon('arrow') + '</span></span>' +
            '<span class="eyebrow" style="color:var(--outline)">' + pl.length + ' featured · ' + c.moods.length + ' mood vaults</span>' +
          '</a>';
        }).join('') +
      '</div></section>' +

      '<section class="wrap section">' +
        '<div class="section-head"><h2>Trending Right Now</h2>' +
          '<a class="navlink" href="#/trending">See all ' + TOP50.length + ' ' + icon('arrow') + '</a></div>' +
        '<div class="playlist">' +
          '<div class="playlist-head"><span>#</span><span>Title &amp; Artist</span><span>From</span><span>Vibe</span><span>Time</span><span></span></div>' +
          trend.map(trackRowHTML).join('') +
        '</div>' +
      '</section>' +

      '<section class="wrap section">' +
        '<div class="section-head"><h2>Pick a mood</h2><span class="eyebrow">' + ALL_PLAYLISTS.length + ' curated vaults</span></div>' +
        '<div class="grid moods">' + ALL_PLAYLISTS.map(function (slug) {
          var p = PAGES[slug], list = playlistOf(slug), a = ACCENT[(CATS[p.cat] || {}).accent] || ACCENT.violet;
          return '<a class="mix-card" href="#/' + esc(slug) + '">' +
            '<span class="mix-cover">' + (p.cat && TRACKS[slug] && TRACKS[slug].cover
                ? '<img src="' + esc(TRACKS[slug].cover) + '" alt="" loading="lazy">' : '') +
              '<span class="overlay" style="background:' + a.glow + '">' + icon('play') + '</span>' +
              '<span class="emoji">' + ((CATS[p.cat].moods.filter(function (m) { return m.slug === slug; })[0] || {}).emoji || '🎧') + '</span>' +
            '</span>' +
            '<h4>' + esc(p.name) + '</h4><p>' + list.length + ' tracks · ' + humanTotal(runningSeconds(list)) + '</p>' +
          '</a>';
        }).join('') + '</div>' +
      '</section>';
    paint(html, 'home');
  }

  function renderHub(slug) {
    var page = PAGES[slug], cat = CATS[page.cat], list = playlistOf(slug);
    var html =
      heroHTML(page,
        '<div class="hero-stats">' +
          '<div class="stat"><b>' + esc(page.streams) + '</b><span>Streams active</span></div>' +
          '<div class="stat"><b>' + esc(page.bpm) + '</b><span>BPM range</span></div>' +
          '<div class="stat"><b>' + cat.moods.length + '</b><span>Mood vaults</span></div>' +
        '</div>' +
        '<div class="actionbar" style="justify-content:center">' +
          '<button class="btn btn-primary" data-playall="' + esc(slug) + '">' + icon('play') + ' Play featured</button>' +
          '<button class="btn btn-ghost" data-shuffleall="' + esc(slug) + '">' + icon('shuffle') + ' Shuffle</button>' +
        '</div>') +
      '<section class="wrap" style="padding-bottom:var(--s-xl)">' +
        '<p class="eyebrow" style="text-align:center;margin-bottom:var(--s-md)">Select a mood</p>' +
        moodChipsHTML(page.cat, slug) +
      '</section>' +
      '<section class="wrap section">' +
        '<div class="section-head"><h2>' + esc(cat.label) + ' essentials</h2>' +
        '<span class="eyebrow">' + list.length + ' master tracks</span></div>' +
        '<div class="playlist">' +
          '<div class="playlist-head"><span>#</span><span>Title &amp; Artist</span><span>Album</span><span>Vibe</span><span>Time</span><span></span></div>' +
          list.map(trackRowHTML).join('') +
        '</div>' +
        '<div class="panel" style="margin-top:var(--s-lg)"><p class="quote">“' + esc(page.curator.note) + '”</p>' +
          '<p class="eyebrow" style="margin-top:12px">Curated by ' + esc(page.curator.name) + '</p></div>' +
      '</section>' +
      '<section class="wrap section">' +
        '<div class="section-head"><h2>Next mood in ' + esc(cat.label) + '</h2></div>' +
        '<div class="grid moods">' + cat.moods.map(function (m) {
          var pl = playlistOf(m.slug);
          return '<a class="mix-card" href="#/' + esc(m.slug) + '">' +
            '<span class="mix-cover">' + (TRACKS[m.slug] && TRACKS[m.slug].cover ? '<img src="' + esc(TRACKS[m.slug].cover) + '" alt="" loading="lazy">' : '') +
              '<span class="emoji">' + m.emoji + '</span></span>' +
            '<h4>' + esc(PAGES[m.slug].name) + '</h4><p>' + esc(PAGES[m.slug].sub) + '</p>' +
            '<p class="eyebrow">' + pl.length + ' tracks</p></a>';
        }).join('') + '</div>' +
      '</section>';
    paint(html, slug);
  }

  function renderPlaylist(slug) {
    var page = PAGES[slug], cat = CATS[page.cat], list = playlistOf(slug);
    var others = cat.moods.filter(function (m) { return m.slug !== slug; });
    var html =
      heroHTML(page, '<div class="actionbar" style="justify-content:center">' +
          '<button class="btn btn-primary" data-playall="' + esc(slug) + '">' + icon('play') + ' Play session</button>' +
          '<button class="btn btn-ghost" data-shuffleall="' + esc(slug) + '">' + icon('shuffle') + ' Shuffle waves</button>' +
          '<a class="btn btn-quiet" href="#/' + esc(cat.hub) + '">' + icon('arrow') + ' Back to ' + esc(cat.label) + '</a>' +
        '</div>') +
      '<section class="wrap">' + moodChipsHTML(page.cat, slug) + '</section>' +
      '<section class="wrap section">' + statsHTML(list, page) +
        '<div class="playlist">' +
          '<div class="playlist-head"><span>#</span><span>Title &amp; Artist</span><span>Album / Film</span><span>Vibe signature</span><span>Time</span><span></span></div>' +
          list.map(trackRowHTML).join('') +
        '</div></section>' +
      '<section class="wrap section"><div class="two-col">' +
        '<div class="panel"><h3>' + esc(page.meter.label) + '</h3><div class="meters">' +
          '<div class="meter"><b>Mood saturation <i>' + page.meter.value + '%</i></b><div class="meter-bar"><span style="width:' + page.meter.value + '%"></span></div></div>' +
          '<div class="meter"><b>Acoustic ratio <i>' + (100 - page.meter.value) + '%</i></b><div class="meter-bar"><span style="width:' + (100 - page.meter.value) + '%"></span></div></div>' +
          '<div class="meter"><b>Runtime <i>' + humanTotal(runningSeconds(list)) + '</i></b><div class="meter-bar"><span style="width:' + Math.min(100, Math.round(runningSeconds(list) / 5400 * 100)) + '%"></span></div></div>' +
        '</div><p class="quote" style="margin-top:1.25rem">“' + esc(page.curator.note) + '”</p>' +
        '<p class="eyebrow" style="margin-top:12px">Curated by ' + esc(page.curator.name) + ' · Verified line-up</p></div>' +
        '<div class="grid mini" style="grid-template-columns:1fr">' +
          others.map(function (m) {
            var pl = playlistOf(m.slug);
            return '<a class="mix-card" href="#/' + esc(m.slug) + '">' +
              '<span class="mix-cover" style="aspect-ratio:2.2">' + (TRACKS[m.slug] && TRACKS[m.slug].cover ? '<img src="' + esc(TRACKS[m.slug].cover) + '" alt="" loading="lazy">' : '') +
              '<span class="emoji">' + m.emoji + '</span></span>' +
              '<h4>' + esc(PAGES[m.slug].name) + '</h4><p>' + esc(PAGES[m.slug].sub) + '</p>' +
              '<p class="eyebrow">' + pl.length + ' tracks</p></a>';
          }).join('') +
        '</div>' +
      '</div></section>' +
      '<section class="wrap section"><div class="panel">' +
        '<h3>Want this vault in your browser?</h3>' +
        '<p class="hero-desc" style="margin:0 0 1rem;text-align:left">Drop your own audio files into <span class="code">assets/audio</span> and the play button here starts working. ' +
        'Until then every row has a stream button that opens the song on YouTube or Spotify.</p>' +
        '<a class="btn btn-ghost" href="#/info/music-setup">' + icon('spark') + ' Open music setup</a>' +
      '</div></section>';
    paint(html, slug);
  }

  function renderListPage(slug, list) {
    var page = PAGES[slug];
    var html =
      '<section class="hero" style="padding-bottom:var(--s-lg)"><div class="wrap">' +
        '<p class="freq-badge kicker"><span class="dot"></span>' + esc(page.kicker) + '</p>' +
        '<h1>' + esc(page.title || page.name) + '</h1>' +
        (page.desc ? '<p class="hero-desc">' + esc(page.desc) + '</p>' : '') +
      '</div></section>' +
      '<section class="wrap section">' +
        (list.length
          ? audioStatusHTML() +
            '<div class="actionbar"><button class="btn btn-primary" data-playlist-current="1">' + icon('play') + ' Play all</button>' +
            '<button class="btn btn-ghost" data-playlist-shuffle="1">' + icon('shuffle') + ' Shuffle</button></div>' +
            '<div class="playlist">' +
            '<div class="playlist-head"><span>#</span><span>Title &amp; Artist</span><span>Playlist</span><span>Vibe</span><span>Time</span><span></span></div>' +
            list.map(trackRowHTML).join('') + '</div>'
          : '<div class="empty">' + icon('heart') + '<h2>Nothing saved yet</h2>' +
            '<p>Tap the heart on any song and it will wait for you here.</p>' +
            '<p style="margin-top:1rem"><a class="btn btn-ghost" href="#/home">Browse playlists</a></p></div>') +
      '</section>';
    paint(html, slug);
  }

  function likedTracks() {
    var out = [], seen = {};
    Object.keys(LIB).forEach(function (id) {
      var t = LIB[id];
      if (S.liked[t.likeKey] && !seen[t.likeKey]) { seen[t.likeKey] = true; out.push(t); }
    });
    return out;
  }

  function renderLibrary() {
    renderListPage('library', likedTracks());
  }
  function renderTrending() {
    renderListPage('trending', TOP50);
  }

  function renderInfo(key) {
    var item = VIBE.info[key];
    var html = '<section class="wrap section"><div class="prose">' +
      '<p class="eyebrow">Guide</p><h1 style="font-size:clamp(1.8rem,6vw,2.6rem)">' + esc(item.title) + '</h1>' +
      item.body.map(function (b) { return '<div class="panel"><p>' + b + '</p></div>'; }).join('') +
      '<div class="panel"><h3>Jump back in</h3><div class="moodrow moodchips">' +
        Object.keys(CATS).map(function (k) {
          return '<a class="moodchip" href="#/' + esc(CATS[k].hub) + '">' + CATS[k].emoji + ' ' + esc(CATS[k].label) + '</a>';
        }).join('') + '</div></div>' +
      '</div></section>';
    paint(html, 'info-' + key);
  }

  function render404(hash) {
    var html = '<section class="wrap section"><div class="prose">' +
      '<p class="eyebrow">Signal lost</p>' +
      '<h1 style="font-size:clamp(1.8rem,6vw,2.4rem)">That page is not in the vault</h1>' +
      '<p class="hero-desc" style="margin:0">Nothing lives at <span class="code">' + esc(hash) + '</span>. Try one of these instead:</p>' +
      '<div class="moodrow moodchips">' +
        ['home'].concat(Object.keys(CATS).map(function (k) { return CATS[k].hub; })).concat(ALL_PLAYLISTS.slice(0, 4)).map(function (s) {
          return '<a class="moodchip" href="#/' + esc(s) + '">' + esc(PAGES[s].name) + '</a>';
        }).join('') +
      '</div></div></section>';
    paint(html, '404');
  }

  /* ------------------------------------------------------------ painting */
  function paint(html, slug) {
    el.view.innerHTML = html;
    paintIcons(el.view);
    bindTrackRows(el.view);
    bindActionButtons();
    document.title = (PAGES[slug] ? PAGES[slug].name + ' · ' : '') + 'VibePulse — Global Beats Music Hub';
    markNav(slug);
    paintAudioStatus();
    hydrateArt();
    if (!el.dock.hidden) { paintRows(); }
  }

  function bindActionButtons() {
    $$('[data-playall]').forEach(function (b) {
      b.addEventListener('click', function () {
        var list = playlistOf(b.getAttribute('data-playall'));
        if (list.length) playTrack(list[0], list);
      });
    });
    $$('[data-shuffleall]').forEach(function (b) {
      b.addEventListener('click', function () {
        var list = playlistOf(b.getAttribute('data-shuffleall')).slice();
        for (var i = list.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = list[i]; list[i] = list[j]; list[j] = t; }
        S.shuffle = true; paintTransport();
        if (list.length) playTrack(list[0], list);
      });
    });
    var playAll = $('[data-playlist-current]');
    if (playAll) {
      playAll.addEventListener('click', function () {
        var list = visibleList();
        if (list.length) playTrack(list[0], list);
      });
    }
    var shufAll = $('[data-playlist-shuffle]');
    if (shufAll) {
      shufAll.addEventListener('click', function () {
        var list = visibleList().slice();
        for (var i = list.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = list[i]; list[i] = list[j]; list[j] = t; }
        S.shuffle = true; paintTransport();
        if (list.length) playTrack(list[0], list);
      });
    }
  }
  function visibleList() {
    return $$('.track').map(function (r) { return LIB[r.getAttribute('data-id')]; }).filter(Boolean);
  }

  function markNav(slug) {
    var active = slug;
    if (!$$('.navlink', el.nav).some(function (a) { return a.getAttribute('data-slug') === active; })) {
      var page = PAGES[slug];
      if (page && page.cat && CATS[page.cat]) active = CATS[page.cat].hub;
    }
    $$('.navlink', el.nav).forEach(function (a) {
      var on = a.getAttribute('data-slug') === active;
      if (on) {
        a.setAttribute('aria-current', 'page');
        el.nav.scrollLeft = Math.max(0, a.offsetLeft - el.nav.clientWidth / 2 + a.offsetWidth / 2);
      } else {
        a.removeAttribute('aria-current');
      }
    });
  }

  function buildNav() {
    var items = [{ slug: 'home', label: 'Home' }];
    Object.keys(CATS).forEach(function (k) { items.push({ slug: CATS[k].hub, label: CATS[k].label }); });
    items.push({ slug: 'trending', label: 'Trending' });
    items.push({ slug: 'library', label: 'Library' });
    el.nav.innerHTML = items.map(function (i) {
      return '<a class="navlink" data-slug="' + esc(i.slug) + '" href="#/' + esc(i.slug) + '">' + esc(i.label) + '</a>';
    }).join('');
  }

  /* --------------------------------------------------------------- route */
  var ROUTES = {};
  Object.keys(PAGES).forEach(function (s) {
    var p = PAGES[s];
    ROUTES[s] = p.type === 'home' ? renderHome
      : p.type === 'hub' ? function () { renderHub(s); }
      : p.type === 'playlist' ? function () { renderPlaylist(s); }
      : p.type === 'library' ? renderLibrary
      : renderTrending;
  });
  VIBE.tracks && Object.keys(TRACKS).forEach(function (s) { if (!ROUTES[s]) ROUTES[s] = function () { renderPlaylist(s); }; });

  function route() {
    var hash = (location.hash || '#/home').replace(/^#\/?/, '').split('?')[0];
    if (!hash) hash = 'home';
    var infoMatch = hash.match(/^info\/([\w-]+)$/);
    if (infoMatch && VIBE.info[infoMatch[1]]) { renderInfo(infoMatch[1]); window.scrollTo(0, 0); return; }
    var slug = hash;
    if (ROUTES[slug]) { ROUTES[slug](); window.scrollTo(0, 0); return; }
    /* links written with underscores, like the mockup folder names, also work */
    var alt = slug.replace(/_/g, '-');
    if (ROUTES[alt]) { ROUTES[alt](); window.scrollTo(0, 0); return; }
    render404('#/' + hash);
  }

  /* -------------------------------------------------------------- search */
  function searchHTML(q) {
    q = norm(q);
    if (!q) {
      return '<p class="eyebrow" style="text-align:center">Start typing a song, an artist, a film or a mood.</p>' +
        '<div class="moodrow moodchips" style="margin-top:1.25rem;justify-content:center">' +
        ALL_PLAYLISTS.slice(0, 8).map(function (s) { return '<a class="moodchip" href="#/' + esc(s) + '">' + esc(PAGES[s].name) + '</a>'; }).join('') + '</div>';
    }
    var tracks = [], pages = [];
    Object.keys(LIB).forEach(function (id) {
      var t = LIB[id];
      if (norm(t.title + ' ' + t.artist + ' ' + t.album + ' ' + t.vibe).indexOf(q) > -1) tracks.push(t);
    });
    Object.keys(PAGES).forEach(function (s) {
      var p = PAGES[s];
      if (norm(p.name + ' ' + (p.sub || '') + ' ' + (p.desc || '')).indexOf(q) > -1) pages.push(p);
    });
    tracks.sort(function (a, b) { return norm(a.title).indexOf(q) < norm(b.title).indexOf(q) ? -1 : 1; });
    var out = '';
    if (pages.length) {
      out += '<p class="group-label">Playlists</p><div class="results">' + pages.slice(0, 6).map(function (p) {
        return '<a class="result" href="#/' + esc(routeSlug(p)) + '"><span class="result-art">' + icon('music') + '</span>' +
          '<span><div class="q-title">' + esc(p.name) + '</div><div class="q-artist">' + esc(p.sub || p.kicker || '') + '</div></span>' +
          '<span class="go2 ic">' + icon('arrow') + '</span></a>';
      }).join('') + '</div>';
    }
    out += '<p class="group-label">Songs <span style="color:var(--outline-variant)">(' + tracks.length + ')</span></p>';
    out += tracks.length
      ? '<div class="results">' + tracks.slice(0, 40).map(function (t) {
          return '<div class="result" data-sid="' + esc(t.id) + '">' +
            '<span class="result-art" data-art="' + esc(t.likeKey) + '">' + artTag(t) + '</span>' +
            '<span style="min-width:0"><div class="q-title">' + esc(t.title) + '</div>' +
            '<div class="q-artist">' + esc(t.artist) + ' · ' + esc(t.page) + '</div></span>' +
            '<span class="q-num" style="margin-left:auto">' + esc(t.length) + '</span></div>';
        }).join('') + '</div>'
      : '<p class="empty">No song matches “' + esc(q) + '”.</p>';
    $$('.result[data-sid]', el.searchBody).forEach(function (r) {
      r.addEventListener('click', function () {
        var t = LIB[r.getAttribute('data-sid')];
        closeSearch();
        playTrack(t, playlistOf(t.slug));
        location.hash = '#/' + t.slug;
      });
    });
    return out;
  }
  function routeSlug(p) {
    if (p.type === 'home') return 'home';
    var found = 'home';
    Object.keys(PAGES).forEach(function (s) { if (PAGES[s] === p) found = s; });
    return found;
  }
  function openSearch() {
    el.search.hidden = false;
    el.searchInput.value = '';
    el.searchBody.innerHTML = searchHTML('');
    hydrateArt();
    setTimeout(function () { el.searchInput.focus(); }, 30);
  }
  function closeSearch() { el.search.hidden = true; hydrateArt(); }
  $('#searchToggle').addEventListener('click', openSearch);
  $('#searchClose').addEventListener('click', closeSearch);
  el.searchInput.addEventListener('input', function () {
    el.searchBody.innerHTML = searchHTML(el.searchInput.value);
    hydrateArt();
  });
  el.search.addEventListener('click', function (e) { if (e.target === el.search) closeSearch(); });

  /* --------------------------------------------------------- surprise me */
  $('#surpriseBtn').addEventListener('click', function () {
    var slug = ALL_PLAYLISTS[Math.floor(Math.random() * ALL_PLAYLISTS.length)];
    var list = playlistOf(slug);
    var t = list[Math.floor(Math.random() * list.length)];
    location.hash = '#/' + slug;
    playTrack(t, list);
    el.live.textContent = 'Surprise: ' + t.title + ' from ' + PAGES[slug].name;
  });

  /* ------------------------------------------------------- keyboard + misc */
  var typing = /input|textarea|select/i;
  document.addEventListener('keydown', function (e) {
    if (typing.test(e.target.tagName)) {
      if (e.key === 'Escape') closeSearch();
      return;
    }
    if (e.key === '/') { e.preventDefault(); openSearch(); }
    else if (e.key === 'Escape') { closeSearch(); el.queueDrawer.hidden = true; el.np.hidden = true; hideNotice(); }
    else if (e.code === 'Space' && (e.target === document.body || e.target === el.view)) { e.preventDefault(); togglePlay(); }
    else if (e.key === 'ArrowRight' && e.shiftKey) step(1);
    else if (e.key === 'ArrowLeft' && e.shiftKey) step(-1);
  });

  window.addEventListener('hashchange', route);

  /* -------------------------------------------------------------- start */
  buildNav();
  paintIcons(document);
  audioInit();
  route();
})();
