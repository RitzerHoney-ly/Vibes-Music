# Put your own song files here

The site knows 352 songs (title, artist, album, vibe, BPM, key, length) but it does not
ship with any audio — recording labels own those files. This folder is where your own
copies go.

## How the player finds a file

When you press play, the site looks for the song's file in this folder:

1. `Artist - Title.mp3`  (the name shown under "File that plays here" in the full-screen player)
2. `Title.mp3`
3. the same two names with `.m4a`

Example: the row *Someone Like You — Adele* plays `Adele - Someone Like You.mp3`.

That search costs four quick checks per song, so the browser console may show a
"404 (Not Found)" line the first time you press play on a song that is not here yet.
That is the player looking, not a broken link.

## Optional: list the files for instant playback

`index.json` tells the player what is in this folder.

- `["*"]` — the default. Search for the file every time (works with no editing at all).
- `[]` — never search. Every play button goes straight to the stream links.
- `["Adele - Someone Like You.mp3", "Joji - Glimpse of Us.mp3"]` — play instantly, no searching.

If you list the names, the site stops making those 404 checks and the home page shows
how many songs are ready.

## What kind of files

Anything your browser can decode: MP3 and AAC/M4A are the safest. Only use files you
own or have the right to play.
