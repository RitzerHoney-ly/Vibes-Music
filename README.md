# VibePulse — Global Beats Music Hub

A late-night music hub built from your 21 Stitch mockups: 4 genre hubs (English, Urdu, Hindi, Phonk),
20 mood playlists, 352 songs, search, queue, shuffle/repeat, favourites, a full-screen player, and
legal stream links to YouTube and Spotify for every single track.

No frameworks, no build step, no database — just `index.html`, two JS files, one CSS file and the images.

---

## 1. Look at it on your computer

**Easiest (Windows):** right-click `preview.ps1` → **Run with PowerShell**.
A window opens and your browser goes to `http://localhost:8080`. Close the window when you are done.

**Even easier:** double-click `index.html`. It opens in a browser tab straight from the folder and
everything works — songs, pages, search, favourites. The only thing a plain file opening cannot do is
listen inside the `assets/audio` folder automatically (browsers block folder reading for local files).

**If you have Node.js installed:** `npx serve` in this folder, then open the address it prints.

Why the local server is better: the player can check which song files exist, audio seeking works, and
you see exactly what visitors will see.

## 2. Make the music actually play here

The site ships with the song list but **no audio files**, because recordings belong to whoever made
them and cannot be bundled with a website. You own the files you add.

1. Open `assets/audio`.
2. Put in the audio files you have the right to play, named exactly the way the site shows them:
   `Adele - Someone Like You.mp3` (artist, space, dash, space, title). Keep the capitals — on Vercel
   `adele` and `Adele` are different files. MP3, M4A, OGG, WAV, AAC and FLAC all work.
3. Reload the page and press ▶ on that row. It now plays inside the site.

Anything you have not added still works as a launcher: the arrow on each row opens that exact song on
YouTube search, and the full-screen player has both YouTube and Spotify buttons.

`assets/audio/index.json` controls the behaviour:

| What it contains | What happens |
| --- | --- |
| `["*"]` (default) | The player quietly checks `assets/audio` for a matching file when you press ▶ |
| `["Adele - Someone Like You.mp3", …]` | Only those files are used — no guessing, no 404s in the console |
| `[]` | Never looks for files; every ▶ just shows the "add a file" hint |

More detail in `assets/audio/README.md` and on the site itself at `#/info/music-setup`.

## 3. Song photos appear by themselves

Every song row, the bar at the bottom and the full-screen player show the real cover for that song.
The pictures are **not** stored inside this project: while a page is on screen the site asks Apple's
public iTunes search for that one song, checks that both the title *and* the singer line up, and
remembers the answer in the visitor's browser.

- Apple allows about 20 searches a minute, so lookups are spaced out and go to the list you are
  actually looking at — songs on a page you left are dropped from the queue, not fetched.
- One answer is used for every song on the page it covers, so several rows often fill from a single lookup.
- The Hindi and Urdu pages ask Apple's Indian and Pakistani stores as well as the American one, because
  a lot of those songs are in no other catalogue.
- If Apple refuses a request the site waits longer and tries that song again later; nothing is given up on
  after one failure.
- Once remembered, covers appear instantly — even with no internet.
- A song that cannot be matched with confidence keeps its coloured initial tile instead of showing some
  other artist's album. This is mostly the phonk rows: several of those recordings are not in Apple's
  searchable catalogue at all (checked against four different ways of asking).
- The memory lives in the browser under `vp.art`. To start over, open the browser console and run
  `localStorage.removeItem('vp.art')`.
- Nothing is uploaded on your behalf: your visitors' browsers do the looking-up, so Vercel only ever
  serves your own files. Covers need the preview server or Vercel — opening `index.html` straight from
  the folder cannot call the search on purpose.

## 4. Put it on Vercel

Vercel does not accept a dragged folder, so pick one of these two routes. Both end the same way.

**Route A — the Vercel command line (fewest clicks)**
1. Install Node.js from <https://nodejs.org> (LTS button; keep the ticked "Add to PATH" option).
2. Open this folder in a terminal (in the folder's address bar type `cmd` and press Enter).
3. Run:
   ```
   npm i -g vercel      # once, installs the tool
   vercel               # answers a couple of questions, then deploys
   vercel --prod        # publishes the official production address
   ```
   Accept the defaults ("Do you want to override?" → no). You get
   `https://vibepulse-<random>.vercel.app` and later a stable address you can rename in the dashboard.

**Route B — through GitHub (no terminal on your PC)**
1. Create a free account at <https://github.com> and make a new empty repository.
2. Upload every file from this folder into it (Add file → Upload files).
3. Create a free account at <https://vercel.com> (sign in with GitHub is easiest).
4. **Add New… → Project →** pick your repository → **Import**.
5. Framework Preset: **Other**. Build Command: leave empty. Output Directory: leave empty or `.`.
6. **Deploy**. About a minute later you have a live URL; every push to GitHub re-publishes it.

Nothing else to configure: `vercel.json` already sets clean URLs, the audio/image caching rules and the
security headers, and because the site uses `#/page-name` addresses (hash routing) no rewrite rules are
needed — which is also why it opens perfectly straight from the folder.

## 5. Change content without touching code

Everything the site displays lives in `assets/data.js`:

| Section | What it controls |
| --- | --- |
| `brand`, `cats` | Name, tagline, the four genre hubs, colours, emoji |
| `pages` | Every page: title, kicker, description, curator note, mood meter |
| `tracks` | Each playlist: cover image and its list of songs (`n, t, a, al, tag, bpm, key, d, img`) |
| `info` | Terms, Privacy, Support and Music Setup text |
| `trendingPicks` | The songs that show in "Trending Right Now" |

Add a song = add one line to a `tracks` list. Add a playlist = add an entry to `pages` with
`type: "playlist"` plus a matching `tracks` list and a mood in its category. Re-open the page — done.

Design tokens (colours, fonts, spacing) are the `:root` variables at the top of `assets/styles.css`,
taken from the mockups' `DESIGN.md`.

## 6. What was tested before publishing

Run through a headless browser at 1440 / 1100 / 860 / 768 / 500 / 390 / 320 px, clicking every button
on every page:

- 28 routes render, no dead `href="#"`, no link pointing at a page that does not exist
- 352 tracks across 20 playlists, all cross-links consistent, unknown address shows the 404 page
- every image reference resolves (102 unused mockup images were removed, 73 kept)
- no JavaScript or console errors; icons all draw
- play, queue, shuffle, repeat, seek, volume, favourites (saved in the browser), full-screen player,
  search and the library all respond
- no horizontal scrolling at any width; the bottom player bar stays reachable at 320 px
- cover matching was checked against live iTunes search answers for songs from the pop, R&B, phonk,
  Hindi and Urdu playlists: correct albums accepted, same-title-different-artist collisions rejected
- the matcher's rules were run over 22 hand-picked cases (sped-up edits, accent spellings like
  `Dança`/`Danca`, co-artist credits, `Lukka`/`Luka` spellings, same-title collisions) — all 22 decided
  correctly
- the lookup queue was driven against a fake clock: a 20-row page fills 20/20; six refused requests in a
  row slow it down and it still finishes 20/20; navigating away stops paying for the page you left;
  a song Apple cannot find is asked about twice and then left alone until you revisit
- live against Apple: the Hindi page filled 20/20 and the Urdu page 16/20 in one pass; five of six
  well-known songs matched on a first try
- where a song is genuinely not in Apple's catalogue — several phonk rows are — the coloured initial
  tile stays, which is the intended behaviour and not an error
- with the cover cache pre-filled, the rows, the player bar, the full-screen player and the search sheet
  all show the picture; with no internet the coloured tiles stay and nothing errors

Known console noise: when the player is looking for a song file that is not there yet it tries four
names, so a few `404` lines can appear. That is the search working, not a broken link. Use the
`index.json` list mode if you want a perfectly quiet console.

## 7. Folder map

```
index.html            the whole page shell (nav, player bar, drawers)
assets/app.js         routing, player, search, favourites
assets/data.js        all songs, playlists, pages, legal text
assets/styles.css     the design from the mockups
assets/img/           73 cover images used by the playlists
assets/audio/         your mp3s go here (+ index.json switch)
preview.ps1           local test server for Windows
vercel.json           hosting rules: caching, headers, clean urls
```

Only use music you own or are allowed to distribute, and keep this site private or within your
entitlements if you upload recordings you do not own the rights to publish.
