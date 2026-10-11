/* VibePulse data — the words, playlists and song lists behind every page.
   Generated from your design mockups. Edit freely: this file is only text. */
var VIBE = VIBE || {};

VIBE.brand = {
  name: 'VibePulse',
  tagline: 'Late-Night Sonic Sanctuary',
  heroLine: 'Turn on the vibe. Pick what you want to hear.'
};

/* The four big doors on the home page. */
VIBE.cats = {
  english: {
    id: 'english', label: 'English Songs', emoji: '🎵', hub: 'english-songs',
    badge: 'Billboard 100', blurb: 'Global Hits & Vibes', accent: 'violet',
    tags: ['Synthpop', 'RnB', 'Indie Alt'], cta: 'Stream Now',
    moods: [
      { slug: 'sad-english-songs', label: 'Sad', emoji: '😢' },
      { slug: 'fun-english-songs', label: 'Fun', emoji: '🎉' },
      { slug: 'exciting-english-songs', label: 'Exciting', emoji: '⚡' },
      { slug: 'chill-english-songs', label: 'Chill', emoji: '☕' }
    ]
  },
  urdu: {
    id: 'urdu', label: 'Urdu Songs', emoji: '🌙', hub: 'urdu-songs',
    badge: 'Deep Raw Soul', blurb: 'Poetry, Soul & Acoustic', accent: 'cyan',
    tags: ['Ghazal', 'Coke Studio', 'Sufi Rock'], cta: 'Immerse',
    moods: [
      { slug: 'sad-urdu-songs', label: 'Sad & Melancholy', emoji: '😢' },
      { slug: 'fun-urdu-songs', label: 'Fun & Party', emoji: '🎉' },
      { slug: 'exciting-urdu-songs', label: 'Exciting & Hype', emoji: '⚡' },
      { slug: 'sufi-soul-urdu-songs', label: 'Sufi & Soul', emoji: '🕊️' }
    ]
  },
  hindi: {
    id: 'hindi', label: 'Hindi Songs', emoji: '✨', hub: 'hindi-songs',
    badge: 'Golden Beats', blurb: 'Bollywood, Indie & Romance', accent: 'pink',
    tags: ['Bollywood', 'Acoustic', 'Midnight Lo-Fi'], cta: 'Feel Rhythm',
    moods: [
      { slug: 'sad-hindi-songs', label: 'Sad (Dard)', emoji: '😢' },
      { slug: 'fun-party-hindi-songs', label: 'Fun & Party', emoji: '🎉' },
      { slug: 'exciting-beat-hindi-songs', label: 'Exciting & Beat', emoji: '⚡' },
      { slug: 'romantic-chill-hindi-songs', label: 'Romantic & Chill', emoji: '☕' }
    ]
  },
  phonk: {
    id: 'phonk', label: 'Phonk', emoji: '⚡', hub: 'phonk',
    badge: '160 BPM Sub-Bass', blurb: 'Bass, Drift & Night Drive', accent: 'violet',
    tags: ['Drift Phonk', 'Cowbell', 'Memphis Rap'], cta: 'Unleash Drift',
    moods: [
      { slug: 'sad-phonk', label: 'Sad Phonk', emoji: '😢' },
      { slug: 'drift-phonk', label: 'Drift Phonk', emoji: '🏎️' },
      { slug: 'exciting-gym-phonk', label: 'Exciting / Gym', emoji: '⚡' },
      { slug: 'chill-wave-phonk', label: 'Chill Wave', emoji: '🌊' }
    ]
  }
};

/* One entry per page. `slug` is what appears after #/ in the address bar. */
VIBE.pages = {
  'home': {
    type: 'home', name: 'Home', title: 'VibePulse',
    kicker: 'Select Frequency', kickerNote: '320kbps Pure Sanctuary',
    sub: 'Turn on the vibe. <b>Pick what you want to hear.</b>',
    desc: 'Four worlds of sound — English, Urdu, Hindi and Phonk — split into moods so you never waste time hunting for the right song.'
  },

  /* ------------------------------------------------------------ English */
  'english-songs': {
    type: 'hub', cat: 'english', name: 'English Songs', title: 'English Songs',
    kicker: 'Global Vault • Curated Soundscapes', streams: '3.8M', bpm: '68 – 142',
    desc: 'Billboard-sized pop, bedroom RnB and indie anthems, sorted by the way they make you feel.',
    curator: { name: 'VibePulse Pop Desk', note: 'Start with the mood you are in — each board is sequenced so the songs flow without a single skip.' }
  },
  'sad-english-songs': {
    type: 'playlist', cat: 'english', mood: 'sad', name: 'Sad English Songs',
    title: 'Sad English Songs', kicker: 'Late-Night Emotional Frequency',
    sub: 'Sad English Songs — Late Night Heartbreaks & Melancholy',
    desc: 'Cinematic acoustic ballads, poignant piano chords and nocturnal vulnerability for quiet, introspective hours.',
    meter: { label: 'Melancholy Index', value: 98 },
    curator: { name: 'VibePulse Nocturne', note: 'Late nights amplify every unsaid thought. This set is crafted with zero filler — pure emotional catharsis from Adele’s resonance to Joji’s soft yearning.' }
  },
  'fun-english-songs': {
    type: 'playlist', cat: 'english', mood: 'fun', name: 'Fun English Songs',
    title: 'Fun English Songs', kicker: 'Sonic Mood Archive • English Spectrum',
    sub: 'Feel-good pop, disco grooves and party anthems',
    desc: 'Upbeat pop, infectious disco grooves and feel-good party anthems curated to turn any living room into a dancefloor.',
    meter: { label: 'Dopamine Index', value: 96 },
    curator: { name: 'VibePulse Daylight', note: 'Every track here is a guaranteed mood lift. Built for car windows down and kitchen dance breaks.' }
  },
  'exciting-english-songs': {
    type: 'playlist', cat: 'english', mood: 'exciting', name: 'Exciting English Songs',
    title: 'Exciting English Songs', kicker: 'Voltage Level 99 • Mainstage Surge',
    sub: 'High-voltage hype, festival bangers and trap energy',
    desc: 'High-voltage hype, festival bangers, trap energy and adrenaline rush tracks designed for maximum kinetic flow.',
    meter: { label: 'Adrenaline Index', value: 94 },
    curator: { name: 'VibePulse Mainstage', note: 'Loudest songs in the building. Sequenced for workouts, road trips and pre-game hype.' }
  },
  'chill-english-songs': {
    type: 'playlist', cat: 'english', mood: 'chill', name: 'Chill English Songs',
    title: 'Chill English Songs', kicker: 'Sanctuary Frequency • Late Night Session #04',
    sub: 'Late-night lo-fi, warm acoustic bedroom pop',
    desc: 'Late-night lo-fi, warm acoustic bedroom pop and calm mellow vibrations crafted for quiet contemplation and neon-lit drift.',
    meter: { label: 'Calm Index', value: 92 },
    curator: { name: 'VibePulse Slow Room', note: 'Soft edges, tape hiss, no pressure. Perfect under a rainy window or a long study session.' }
  },

  /* --------------------------------------------------------------- Urdu */
  'urdu-songs': {
    type: 'hub', cat: 'urdu', name: 'Urdu Songs', title: 'Urdu Songs',
    kicker: 'Acoustic & Melancholic Archive', streams: '2.1M', bpm: '70 – 150',
    desc: 'Ghazals, Coke Studio sessions, hip-hop and Sufi rock — the full Pakistani sound, curated by mood.',
    curator: { name: 'VibePulse Studio', note: 'Eight core masterpieces to get you in, then four mood vaults to keep you going.' }
  },
  'sad-urdu-songs': {
    type: 'playlist', cat: 'urdu', mood: 'sad', name: 'Sad Urdu Songs',
    title: 'Sad Urdu Songs', kicker: 'Poetic Melancholy • Midnight Ghazal Archive',
    sub: 'Yearning ghazals and soul-stirring Urdu poetry',
    desc: 'Poignant late-night acoustics, yearning ghazal harmonies and soul-stirring Urdu poetry curated for solitary rainfall and introspective hours.',
    meter: { label: 'Melancholy Index', value: 95 },
    curator: { name: 'VibePulse Midnight Dastaan', note: 'The delicate ache of nocturnal Urdu poetry — best played after everyone else has gone to sleep.' }
  },
  'fun-urdu-songs': {
    type: 'playlist', cat: 'urdu', mood: 'fun', name: 'Fun Urdu Songs',
    title: 'Fun Urdu Songs', kicker: 'Desi Funk • Upbeat Indie Fusion & Shaadi Vibes',
    sub: 'Infectious Pakistani pop grooves and sangeet bangers',
    desc: 'Infectious Pakistani pop grooves, catchy indie bops, feel-good sangeet dance tracks and playful shaadi-floor energy.',
    meter: { label: 'Party Index', value: 93 },
    curator: { name: 'Karachi Dancefloor', note: 'Dholak swing, retro twist and modern remixes — built to make a hall full of cousins dance.' }
  },
  'exciting-urdu-songs': {
    type: 'playlist', cat: 'urdu', mood: 'exciting', name: 'Exciting Urdu Songs',
    title: 'Exciting Urdu Songs', kicker: 'Urdu Rap Overdrive • Hard-Hitting Bars & Drill Bass',
    sub: 'Karachi drill, Urdu rap anthems and booming 808s',
    desc: 'High-octane Karachi drill beats, relentless Urdu rap anthems, booming 808 sub-bass and stadium-rock intensity.',
    meter: { label: 'Impact Index', value: 97 },
    curator: { name: 'VibePulse Street Desk', note: 'Young Stunners, Talha Anjum and Faris Shafi back to back. Bars first, bass second, no mercy.' }
  },
  'sufi-soul-urdu-songs': {
    type: 'playlist', cat: 'urdu', mood: 'sufi', name: 'Sufi & Soul Urdu Songs',
    title: 'Sufi & Soul Urdu Songs', kicker: 'Active Sanctuary • Sacred Qawwali & Coke Studio Archive',
    sub: 'Mystical transcendence in 24-bit master audio',
    desc: 'Ecstatic qawwali, harmonium-driven Coke Studio sessions and Sufi rock that lifts the room out of the body.',
    meter: { label: 'Transcendence Index', value: 99 },
    curator: { name: 'VibePulse Dargah Room', note: 'Nusrat, Abida, Rahat and Junoon in one continuous arc — long tracks, bigger feelings.' }
  },

  /* -------------------------------------------------------------- Hindi */
  'hindi-songs': {
    type: 'hub', cat: 'hindi', name: 'Hindi Songs', title: 'Hindi Songs',
    kicker: 'Curated Stream • Vol. 04', streams: '2,490,120 listeners', bpm: '72 – 155',
    desc: 'Bollywood heartbreak, indie sukoon and party anthems — the Hindi-speaking world in four moods.',
    curator: { name: 'VibePulse Desi Desk', note: 'Arijit to The Local Train: eight essential masters, then pick your weather.' }
  },
  'sad-hindi-songs': {
    type: 'playlist', cat: 'hindi', mood: 'sad', name: 'Sad Hindi Songs',
    title: 'Sad Hindi Songs', kicker: 'Dard & Heartbreak Archive • Late Night Melancholy',
    sub: 'Bollywood heartbreak ballads and tear-jerker acoustics',
    desc: 'Soul-stirring Bollywood heartbreak ballads, tear-jerker acoustic melodies and haunting midnight indie.',
    meter: { label: 'Dard Index', value: 97 },
    curator: { name: 'VibePulse Nocturne', note: 'Channa Mereya to Tadap Tadap — the full Arijit-era grief cycle in one queue.' }
  },
  'fun-party-hindi-songs': {
    type: 'playlist', cat: 'hindi', mood: 'fun', name: 'Fun & Party Hindi Songs',
    title: 'Fun & Party Hindi Songs', kicker: 'Dhol & Desi Party Vault • High Voltage Dopamine',
    sub: 'Bollywood dance anthems and wedding floor igniters',
    desc: 'Infectious Bollywood dance anthems, high-energy sangeet bangers and Punjabi-Hindi club bops.',
    meter: { label: 'Dancefloor Index', value: 98 },
    curator: { name: 'VibePulse Baraat Unit', note: 'Badtameez Dil to London Thumakda — built for the moment the DJ says "everyone on the floor".' }
  },
  'exciting-beat-hindi-songs': {
    type: 'playlist', cat: 'hindi', mood: 'exciting', name: 'Exciting & Beat Hindi Songs',
    title: 'Exciting & Beat Hindi Songs', kicker: 'Voltage Level 99 • Desi Bass & Hip-Hop Surge',
    sub: 'Bollywood action anthems, Desi hip-hop and gym PR music',
    desc: 'Adrenaline-fuelled Bollywood action anthems, hard-hitting Desi hip-hop, heavy 808 trap drops and gym workout beats.',
    meter: { label: 'Power Index', value: 96 },
    curator: { name: 'VibePulse Iron Room', note: 'DIVINE, Raftaar and Vishal Dadlani at 150 BPM. Put this on before a heavy set.' }
  },
  'romantic-chill-hindi-songs': {
    type: 'playlist', cat: 'hindi', mood: 'romantic', name: 'Romantic & Chill Hindi Songs',
    title: 'Romantic & Chill Hindi Songs', kicker: 'Acoustic Warmth • Monsoon Indie & Sukoon Archive',
    sub: 'Late-night acoustic love confessions and rainy-window lo-fi',
    desc: 'Late-night acoustic love confessions, rainy window lo-fi beats, gentle monsoon indie acoustics and timelessness.',
    meter: { label: 'Sukoon Index', value: 94 },
    curator: { name: 'VibePulse Monsoon Desk', note: 'Kesariya, Baarishein, Tum Se Hi — the sound of a window fogging up.' }
  },

  /* -------------------------------------------------------------- Phonk */
  'phonk': {
    type: 'hub', cat: 'phonk', name: 'Phonk', title: 'Phonk',
    kicker: 'Sub-Bass Frequency Hub • Genre Archive 04', streams: '5.4M', bpm: '120 – 160',
    desc: 'Cowbells, 808s and night-highway energy — Memphis roots, drift edits and slowed heartbreak.',
    curator: { name: 'VibePulse Drift Crew', note: 'Eight entry-level bangers, then four sub-genre vaults depending on how hard you want to drive.' }
  },
  'sad-phonk': {
    type: 'playlist', cat: 'phonk', mood: 'sad', name: 'Sad Phonk',
    title: 'Sad Phonk', kicker: 'Nocturnal Drift Archive • Slowed & Reverb Memories',
    sub: 'Tape-decayed Rhodes, weeping cowbells, highway echoes',
    desc: 'Tape-decayed Rhodes pianos, weeping distorted TR-808 cowbells, nocturnal highway echoes and slowed reverb.',
    meter: { label: 'Night Index', value: 91 },
    curator: { name: 'Archive Node #404-SD', note: 'For 3 AM roads with no destination. Slowed, reverb-heavy, emotionally honest.' }
  },
  'drift-phonk': {
    type: 'playlist', cat: 'phonk', mood: 'drift', name: 'Drift Phonk',
    title: 'Drift Phonk', kicker: 'Touge Division 01 • Underground Touge Archive',
    sub: 'Screeching tyres, razor 808 distortion, cowbell slides',
    desc: 'Screeching Falken tyres, razor-sharp 808 distortion and synchronized cowbell slides tuned for downhill night runs.',
    meter: { label: 'Velocity Index', value: 97 },
    curator: { name: 'VibePulse Touge Unit', note: 'DVRST, Kordhell, INTERWORLD — the exact order a mountain pass wants.' }
  },
  'exciting-gym-phonk': {
    type: 'playlist', cat: 'phonk', mood: 'gym', name: 'Exciting & Gym Phonk',
    title: 'Exciting & Gym Phonk', kicker: 'Voltage Level 99 • Maximum PR Overdrive',
    sub: 'Hardstyle kicks, sub-bass drops, relentless cowbell',
    desc: 'Heart-pounding hardstyle kicks, earth-shaking sub-bass drops and relentless cowbell patterns built for one more rep.',
    meter: { label: 'Overdrive Index', value: 99 },
    curator: { name: 'VibePulse Iron Cage', note: '140–160 BPM only. This is the playlist that finishes the set for you.' }
  },
  'chill-wave-phonk': {
    type: 'playlist', cat: 'phonk', mood: 'chill', name: 'Chill Wave Phonk',
    title: 'Chill Wave Phonk', kicker: 'Cosmic Drift Archive • Ambient Wave & Dreamy Glide',
    sub: 'Dreamy synth pads, smooth sub-aquatic 808 glides',
    desc: 'Dreamy synth pads, smooth sub-aquatic 808 glides, hazy vocal atmospheres and tranquil wave Phonk.',
    meter: { label: 'Dream Index', value: 93 },
    curator: { name: 'VibePulse Astral Vault', note: 'VØJ, Øneheart and Skeler — Phonk with the aggression turned down and the lights turned way up.' }
  },

  /* -------------------------------------------------------- utility pages */
  'library': {
    type: 'library', name: 'My Library', title: 'My Library',
    kicker: 'Saved on this device', sub: 'Every song you hearted, kept in this browser.',
    desc: 'Likes are stored locally with localStorage — nothing is uploaded anywhere.'
  },
  'trending': {
    type: 'trending', name: 'Trending', title: 'Trending Right Now',
    kicker: 'Live Rotation', sub: 'The most-played anchors across every VibePulse vault.',
    desc: 'A hand-picked rotation drawn from all 20 playlists.'
  }
};

/* Footer / info pages */
VIBE.info = {
  'terms': {
    title: 'Terms of Use',
    body: [
      'VibePulse is a personal music-hub website. Song titles, artists and metadata are shown so you can find and play music you already have or stream from the official services.',
      'When you press <b>Play in-site</b>, the site only plays an audio file that you placed inside <span class="code">assets/audio</span> and that is served with your own deployment. When you press a <b>Stream</b> button, the site opens the official YouTube or Spotify search results for that song in a new tab.',
      'You are responsible for making sure the audio files you add are yours to use, or are licensed for the way you use them. Record labels and artists keep their own rights to every recording.',
      'This site is provided as-is with no warranty. It is not affiliated with, endorsed by or sponsored by any artist, label, YouTube or Spotify.'
    ]
  },
  'privacy': {
    title: 'Privacy',
    body: [
      'VibePulse does not create accounts, does not ask for an email address, and does not send your data to any analytics or tracking service.',
      'Two things are stored in your browser only: the songs you heart (favourites) and the technical names of audio files this site already checked, so playback feels instant. Both live in localStorage and vanish when you clear your browser data.',
      'If you deploy this site on Vercel, Vercel’s own hosting logs apply — see their privacy policy for that part.'
    ]
  },
  'support': {
    title: 'Support',
    body: [
      '<b>Song shows “No local file yet”</b> — that is expected on a fresh install. Put the MP3 in <span class="code">assets/audio</span> using the exact name shown under the song, or press a Stream button to listen on YouTube or Spotify.',
      '<b>Player is silent</b> — check your device volume, then make sure the browser tab is not muted. Some browsers block autoplay until you press a button once.',
      '<b>Artwork missing</b> — every image lives in <span class="code">assets/img</span>; if you moved or renamed files, the site falls back to a generated cover instead of showing a broken picture.',
      '<b>Something looks wrong on a phone</b> — hard-refresh (Ctrl+F5) so the new CSS loads, and tell us the device and browser.'
    ]
  },
  'music-setup': {
    title: 'How to make every song playable',
    body: [
      '<b>1.</b> Open the <span class="code">assets/audio</span> folder in this project.',
      '<b>2.</b> Put the audio files you own or are allowed to play in that folder, named exactly the way the site shows them — for example <span class="code">Adele - Someone Like You.mp3</span> (artist, space, dash, space, title). Keep the capital letters as they are: on Vercel <span class="code">adele</span> and <span class="code">Adele</span> are two different files. MP3, M4A, OGG, WAV, AAC and FLAC all work.',
      '<b>3.</b> Reload and press the play button on that row. The player tries <span class="code">Artist - Title.mp3</span>, then <span class="code">Title.mp3</span>, remembers the match, and plays it instantly from then on.',
      '<b>4.</b> Skipping the guessing game: list your file names inside <span class="code">assets/audio/index.json</span>, like <span class="code">["Adele - Someone Like You.mp3"]</span>. Then the site only plays what you listed. <span class="code">["*"]</span> means auto-detect, <span class="code">[]</span> means never look for files.',
      '<b>5.</b> The line at the top of every page tells you how many songs have a file right now. If you press play on a song with no file, a message appears with the exact name to use — and the console may log a few 404s while the player looks. Those are not broken links.',
      '<b>6.</b> Deploying to Vercel uploads the audio folder along with everything else. Keep single files under roughly 15 MB so the first play stays quick, and only upload music you have the rights to distribute.',
      '<b>7.</b> Launcher mode needs no files at all: the arrow on each row opens that exact song on YouTube or Spotify search.',
      '<b>8.</b> The cover photo for every song is looked up while you browse, from Apple\'s public song search — one song at a time, only for the songs actually on your screen, and the answer is checked against both the title and the singer before it is used. It is then remembered in your own browser, so the next visit shows the pictures straight away. Nothing is downloaded into this project folder. A song whose cover cannot be matched with confidence keeps its coloured letter tile instead of showing somebody else\'s album; this happens mainly with phonk and regional releases that Apple\'s catalogue does not carry.',
    ]
  }
};

/* Home-page "Trending Right Now" picks (matched by song title across playlists). */
VIBE.trendingPicks = [
  'Glimpse of Us', 'Pasoori', 'Levitating', 'Close Eyes',
  'Channa Mereya', 'Coffee', 'Metamorphosis', 'Tajdar-e-Haram'
];
VIBE.tracks = {
  "chill-english-songs": { cover: "assets/img/c626a3163608.jpg", tracks: [
    { n: "01", t: "Coffee", a: "beabadoobee", al: "", tag: "Lo-Fi Acoustic Bedroom", bpm: "74", key: "", d: "02:06", img: "" },
    { n: "02", t: "Sunday Best", a: "Surfaces", al: "", tag: "Sunny Breezy Chill", bpm: "112", key: "", d: "02:38", img: "" },
    { n: "03", t: "Put Your Records On", a: "Ritt Momney", al: "", tag: "Synth Melancholy Pop", bpm: "96", key: "", d: "03:30", img: "" },
    { n: "04", t: "Japanese Denim", a: "Daniel Caesar", al: "", tag: "Velvet Slow R&B", bpm: "72", key: "", d: "04:30", img: "" },
    { n: "05", t: "Location", a: "Khalid", al: "", tag: "Smooth Sunset Soul", bpm: "80", key: "", d: "03:39", img: "" },
    { n: "06", t: "Best Part", a: "Daniel Caesar & H.E.R.", al: "", tag: "Acoustic Pure Duet", bpm: "75", key: "", d: "03:29", img: "" },
    { n: "07", t: "Sunflower", a: "Rex Orange County", al: "", tag: "Jazzy Bedroom Indie", bpm: "78", key: "", d: "04:12", img: "" },
    { n: "08", t: "death bed (coffee for your head)", a: "Powfu ft. beabadoobee", al: "", tag: "Lo-Fi Hip-Hop Beat", bpm: "72", key: "", d: "02:53", img: "" },
    { n: "09", t: "Peach Jam", a: "Joji & BlocBoy JB", al: "", tag: "Tropical Mellow Summer", bpm: "85", key: "", d: "02:41", img: "" },
    { n: "10", t: "Get You", a: "Daniel Caesar ft. Kali Uchis", al: "", tag: "Late Night Neo-Soul", bpm: "68", key: "", d: "04:38", img: "" },
    { n: "11", t: "Are You Bored Yet?", a: "Wallows ft. Clairo", al: "", tag: "Dreamy Bedroom Indie", bpm: "82", key: "", d: "02:58", img: "" },
    { n: "12", t: "Falling in Reverse", a: "Dominic Fike", al: "", tag: "Acoustic Raw Melodic", bpm: "70", key: "", d: "02:11", img: "" },
    { n: "13", t: "Bags", a: "Clairo", al: "", tag: "Warm Tape Bedroom", bpm: "105", key: "", d: "04:20", img: "" },
    { n: "14", t: "Talk", a: "Khalid", al: "", tag: "Midtempo Chill R&B", bpm: "86", key: "", d: "03:17", img: "" },
    { n: "15", t: "Redbone", a: "Childish Gambino", al: "", tag: "Psychedelic Soul Chill", bpm: "80", key: "", d: "05:26", img: "" },
    { n: "16", t: "3:15 (Breathe)", a: "Russ", al: "", tag: "Midnight Meditation", bpm: "73", key: "", d: "03:15", img: "" },
    { n: "17", t: "Lover Is a Day", a: "Cuco", al: "", tag: "Chicano Dream Pop", bpm: "76", key: "", d: "07:36", img: "" },
    { n: "18", t: "Softly", a: "Clairo", al: "", tag: "Vintage Tape Breeze", bpm: "78", key: "", d: "03:05", img: "" },
    { n: "19", t: "Electric Love (Acoustic)", a: "BØRNS", al: "", tag: "Stripped Acoustic Aura", bpm: "76", key: "", d: "03:45", img: "" },
    { n: "20", t: "Easily", a: "Bruno Major", al: "", tag: "Mellow Piano Romance", bpm: "72", key: "", d: "03:28", img: "" },
  ] },
  "chill-wave-phonk": { cover: "assets/img/f8b1f0b44600.jpg", tracks: [
    { n: "01", t: "Memory Reboot (Ambient Wave)", a: "VØJ, Narvent", al: "", tag: "Astral Drift", bpm: "", key: "", d: "02:40", img: "" },
    { n: "02", t: "Odyssey", a: "LXST CXNTURY", al: "", tag: "Wave Phonk Masterpiece", bpm: "", key: "", d: "02:48", img: "" },
    { n: "03", t: "crystals", a: "Isolate.exe", al: "", tag: "Hypnotic Ambient", bpm: "", key: "", d: "02:30", img: "" },
    { n: "04", t: "snowfall (Chill Wave Redux)", a: "Øneheart", al: "", tag: "Ethereal Snow", bpm: "", key: "", d: "02:15", img: "" },
    { n: "05", t: "Midnight City Phonk", a: "skeler.", al: "", tag: "Night Wave Anthem", bpm: "", key: "", d: "03:10", img: "" },
    { n: "06", t: "Tel Aviv", a: "Skeler", al: "", tag: "Deep Wave Bass", bpm: "", key: "", d: "03:22", img: "" },
    { n: "07", t: "CARBON", a: "LXST CXNTURY", al: "", tag: "Sub-Glide Wave", bpm: "", key: "", d: "02:35", img: "" },
    { n: "08", t: "Resonance (Wave Phonk Flip)", a: "HOME", al: "", tag: "Nostalgic Synth", bpm: "", key: "", d: "03:04", img: "" },
    { n: "09", t: "After Dark (Wave Phonk Rework)", a: "Mr. Kitty", al: "", tag: "Ethereal Darkwave", bpm: "", key: "", d: "03:25", img: "" },
    { n: "10", t: "ETERNITY", a: "DVRST, Iamjakehill", al: "", tag: "Peaceful Cowbell", bpm: "", key: "", d: "02:18", img: "" },
    { n: "11", t: "Lost in Tokyo", a: "VØJ", al: "", tag: "Cyber Chill", bpm: "", key: "", d: "02:22", img: "" },
    { n: "12", t: "Neon Dreams", a: "Barnacle Boi", al: "", tag: "Tranquil Wave", bpm: "", key: "", d: "02:45", img: "" },
    { n: "13", t: "Ghost in the Shell Phonk", a: "Loneliness", al: "", tag: "Underwater Sub", bpm: "", key: "", d: "02:50", img: "" },
    { n: "14", t: "Sakura Drift", a: "CHXRN", al: "", tag: "Smooth Melancholy", bpm: "", key: "", d: "02:16", img: "" },
    { n: "15", t: "Mirage", a: "PLENKA", al: "", tag: "Ambient Nostalgia", bpm: "", key: "", d: "02:38", img: "" },
    { n: "16", t: "VIRTUAL LONELINESS", a: "CHXRN", al: "", tag: "Deep Midnight", bpm: "", key: "", d: "02:24", img: "" },
    { n: "17", t: "NIGHT DRIVE", a: "KAS:ST x Phonk Wave", al: "", tag: "Hypnotic Highway", bpm: "", key: "", d: "03:15", img: "" },
    { n: "18", t: "Distant Horizons", a: "Deadcrow", al: "", tag: "Chill Wave Glide", bpm: "", key: "", d: "02:42", img: "" },
    { n: "19", t: "Stellar Winds", a: "Kareful", al: "", tag: "Cosmic Sub-Bass", bpm: "", key: "", d: "02:58", img: "" },
    { n: "20", t: "Morning Dew in Neo Tokyo", a: "Øneheart, leadwave", al: "", tag: "Gentle Awakening", bpm: "", key: "", d: "02:12", img: "" },
  ] },
  "drift-phonk": { cover: "assets/img/a746d3b6765d.jpg", tracks: [
    { n: "01", t: "Close Eyes", a: "DVRST", al: "", tag: "Pinnacle Drift", bpm: "", key: "", d: "02:12", img: "" },
    { n: "02", t: "Murder In My Mind", a: "Kordhell", al: "", tag: "Pure Drift Terror", bpm: "", key: "", d: "02:25", img: "" },
    { n: "03", t: "Metamorphosis", a: "INTERWORLD", al: "", tag: "High-Speed Touge", bpm: "", key: "", d: "02:22", img: "" },
    { n: "04", t: "Sahara", a: "Hensonn", al: "", tag: "Raw Memphis Cowbell", bpm: "", key: "", d: "02:51", img: "" },
    { n: "05", t: "RAVE", a: "Dxrk", al: "", tag: "Fast Hardstyle Drift", bpm: "", key: "", d: "02:49", img: "" },
    { n: "06", t: "Tokyo Drift (Phonk Remix)", a: "Teriyaki Boyz x KSLV", al: "", tag: "JDM Classic", bpm: "", key: "", d: "02:40", img: "" },
    { n: "07", t: "Disaster", a: "KSLV Noh", al: "", tag: "Heavy Distortion Drift", bpm: "", key: "", d: "02:18", img: "" },
    { n: "08", t: "Live Another Day", a: "Kordhell", al: "", tag: "Aggressive Touge", bpm: "", key: "", d: "02:14", img: "" },
    { n: "09", t: "Warning", a: "MC Orsen", al: "", tag: "Gritty Memphis Beat", bpm: "", key: "", d: "02:35", img: "" },
    { n: "10", t: "Scopin", a: "Kordhell", al: "", tag: "Heavy 808 Attack", bpm: "", key: "", d: "02:20", img: "" },
    { n: "11", t: "Midnight", a: "Playamane, Nateki", al: "", tag: "Nighttouge Rush", bpm: "", key: "", d: "02:08", img: "" },
    { n: "12", t: "Demise", a: "KSLV Noh", al: "", tag: "Dark Touge Drive", bpm: "", key: "", d: "02:30", img: "" },
    { n: "13", t: "Neon Blade", a: "MoonDeity", al: "", tag: "Cyber Drift", bpm: "", key: "", d: "04:14", img: "" },
    { n: "14", t: "Wake Up!", a: "MoonDeity", al: "", tag: "Electric Night Speed", bpm: "", key: "", d: "02:46", img: "" },
    { n: "15", t: "Crash", a: "PlayaPhonk", al: "", tag: "Aggressive Overdrive", bpm: "", key: "", d: "02:15", img: "" },
    { n: "16", t: "North Memphis", a: "Pharmacist", al: "", tag: "Underground Classic", bpm: "", key: "", d: "02:42", img: "" },
    { n: "17", t: "Overdrive", a: "KSLV Noh", al: "", tag: "High Octane", bpm: "", key: "", d: "02:10", img: "" },
    { n: "18", t: "Psycho Cruise", a: "Onimxru, STRAWANGLE", al: "", tag: "Street Drift", bpm: "", key: "", d: "02:05", img: "" },
    { n: "19", t: "GigaChad Phonk", a: "g3ox_em", al: "", tag: "Iron Touge", bpm: "", key: "", d: "02:26", img: "" },
    { n: "20", t: "Speed Demon", a: "Cowbell Cult", al: "", tag: "Max Velocity", bpm: "", key: "", d: "02:32", img: "" },
  ] },
  "english-songs": { cover: "assets/img/ec1b59cad7de.jpg", tracks: [
    { n: "01", t: "Someone Like You", a: "Adele", al: "21", tag: "Soul Piano", bpm: "", key: "", d: "4:45", img: "assets/img/ec1b59cad7de.jpg" },
    { n: "02", t: "Glimpse of Us", a: "Joji", al: "SMITHEREENS", tag: "Acoustic Grief", bpm: "", key: "", d: "3:53", img: "assets/img/d2eec34d3ed3.jpg" },
    { n: "03", t: "Lovely", a: "Billie Eilish & Khalid", al: "13 Reasons Why", tag: "Haunting Strings", bpm: "", key: "", d: "3:20", img: "assets/img/306ee3130fc8.jpg" },
    { n: "04", t: "Heather", a: "Conan Gray", al: "Kid Krow", tag: "Indie Nostalgia", bpm: "", key: "", d: "3:18", img: "assets/img/39a74a8ebfaa.jpg" },
    { n: "05", t: "Drivers License", a: "Olivia Rodrigo", al: "SOUR", tag: "Bedroom Anthem", bpm: "", key: "", d: "4:02", img: "assets/img/40c9e4f2d3cf.jpg" },
    { n: "06", t: "The Night We Met", a: "Lord Huron", al: "Strange Trails", tag: "Folk Echoes", bpm: "", key: "", d: "3:28", img: "assets/img/f6c97406c626.jpg" },
    { n: "07", t: "Before You Go", a: "Lewis Capaldi", al: "Divinely Uninspired", tag: "Power Ballad", bpm: "", key: "", d: "3:35", img: "assets/img/0878cfad346a.jpg" },
    { n: "08", t: "Stay", a: "Post Malone", al: "Beerbongs & Bentleys", tag: "Raw Unplugged", bpm: "", key: "", d: "3:24", img: "assets/img/65d8515d725c.jpg" },
    { n: "09", t: "Happier", a: "Olivia Rodrigo", al: "SOUR", tag: "Bittersweet Waltz", bpm: "", key: "", d: "2:55", img: "assets/img/e464b3528773.jpg" },
  ] },
  "exciting-beat-hindi-songs": { cover: "assets/img/90b0853c85c1.jpg", tracks: [
    { n: "01", t: "Apna Time Aayega", a: "Ranveer Singh, DIVINE", al: "Gully Boy", tag: "808 Trap Hype", bpm: "140", key: "", d: "02:20", img: "" },
    { n: "02", t: "Kaam 25", a: "DIVINE", al: "Sacred Games OST", tag: "Hardstyle Desi Rap", bpm: "148", key: "", d: "02:44", img: "" },
    { n: "03", t: "Machayenge", a: "Emiway Bantai", al: "Single", tag: "Club Party Banger", bpm: "132", key: "", d: "03:12", img: "" },
    { n: "04", t: "Mirchi", a: "DIVINE ft. MC Altaf, Phenom, Stylo G", al: "", tag: "Dancehall Drill", bpm: "142", key: "", d: "03:38", img: "" },
    { n: "05", t: "Mere Gully Mein", a: "DIVINE ft. Naezy", al: "Gully Boy", tag: "Fast Flow Boom-Bap", bpm: "138", key: "", d: "03:04", img: "" },
    { n: "06", t: "Shaitan Ka Saala (Bala)", a: "Vishal Dadlani", al: "Housefull 4", tag: "High Velocity Party", bpm: "150", key: "", d: "02:27", img: "" },
    { n: "07", t: "Jai Jai Shivshankar", a: "Vishal Dadlani, Benny Dayal", al: "War", tag: "Festival Bass Drop", bpm: "146", key: "", d: "03:50", img: "" },
    { n: "08", t: "Ghamand Kar", a: "Sachet Tandon, Parampara Thakur", al: "Tanhaji", tag: "War Drum Overdrive", bpm: "152", key: "", d: "04:42", img: "" },
    { n: "09", t: "Sultan (Title Track)", a: "Sukhwinder Singh, Shadab Faridi", al: "Sultan", tag: "Gym PR Motivation", bpm: "144", key: "", d: "04:40", img: "" },
    { n: "10", t: "Dangal (Title Track)", a: "Daler Mehndi, Pritam", al: "Dangal", tag: "Raw Heavy Power", bpm: "136", key: "", d: "04:59", img: "" },
    { n: "11", t: "Zinda", a: "Siddharth Mahadevan", al: "Bhaag Milkha Bhaag", tag: "Rock-Orchestral Charge", bpm: "154", key: "", d: "03:31", img: "" },
    { n: "12", t: "Chak Lein De", a: "Kailash Kher", al: "Chandni Chowk to China", tag: "Sufi-Rock Velocity", bpm: "140", key: "", d: "04:26", img: "" },
    { n: "13", t: "Brothers Anthem", a: "Vishal Dadlani, Ajay-Atul", al: "Brothers", tag: "Heavyweight Trap Drop", bpm: "148", key: "", d: "05:54", img: "" },
    { n: "14", t: "Kar Har Maidaan Fateh", a: "Sukhwinder Singh, Shreya Ghoshal", al: "Sanju", tag: "Anthemic Crescendo", bpm: "138", key: "", d: "05:11", img: "" },
    { n: "15", t: "Swag Se Swagat", a: "Vishal Dadlani, Neha Bhasin", al: "Tiger Zinda Hai", tag: "Electro-Bhangra Hype", bpm: "132", key: "", d: "03:56", img: "" },
    { n: "16", t: "Bang Bang (Title Track)", a: "Benny Dayal, Neeti Mohan", al: "Bang Bang", tag: "Nu-Disco Funk Beat", bpm: "134", key: "", d: "05:20", img: "" },
    { n: "17", t: "Dhaakad", a: "Raftaar", al: "Dangal OST", tag: "Haryanvi Heavy Trap", bpm: "146", key: "", d: "02:56", img: "" },
    { n: "18", t: "Sher Aaya Sher", a: "DIVINE", al: "Gully Boy", tag: "Sub-Bass Predator Flow", bpm: "140", key: "", d: "02:14", img: "" },
    { n: "19", t: "Gali Gali", a: "Neha Kakkar", al: "K.G.F: Chapter 1", tag: "Fast Tempo Item Banger", bpm: "150", key: "", d: "03:43", img: "" },
    { n: "20", t: "Aala Re Aala", a: "Daler Mehndi", al: "Simmba", tag: "Stadium Battle Anthem", bpm: "155", key: "", d: "03:19", img: "" },
  ] },
  "exciting-english-songs": { cover: "assets/img/1051b84ebb6b.jpg", tracks: [
    { n: "01", t: "Starboy", a: "The Weeknd ft. Daft Punk", al: "", tag: "Electrifying Peak", bpm: "140", key: "", d: "3:50", img: "" },
    { n: "02", t: "Believer", a: "Imagine Dragons", al: "", tag: "Arena Stampede", bpm: "125", key: "", d: "3:24", img: "" },
    { n: "03", t: "Industry Baby", a: "Lil Nas X & Jack Harlow", al: "", tag: "Brass Fanfare Trap", bpm: "150", key: "", d: "3:32", img: "" },
    { n: "04", t: "HUMBLE.", a: "Kendrick Lamar", al: "", tag: "808 Heavyweight", bpm: "150", key: "", d: "2:57", img: "" },
    { n: "05", t: "Sicko Mode", a: "Travis Scott", al: "", tag: "Triple Beat Switch", bpm: "155", key: "", d: "5:12", img: "" },
    { n: "06", t: "Radioactive", a: "Imagine Dragons", al: "", tag: "Dub-Rock Explosion", bpm: "136", key: "", d: "3:06", img: "" },
    { n: "07", t: "Can't Hold Us", a: "Macklemore & Ryan Lewis", al: "", tag: "Breakneck Momentum", bpm: "146", key: "", d: "4:18", img: "" },
    { n: "08", t: "Stronger", a: "Kanye West", al: "", tag: "Daft Punk Synth Blitz", bpm: "123", key: "", d: "5:11", img: "" },
    { n: "09", t: "'Till I Collapse", a: "Eminem", al: "", tag: "Queen Stomp Drive", bpm: "171", key: "", d: "4:57", img: "" },
    { n: "10", t: "Animals", a: "Martin Garrix", al: "", tag: "Bigroom Pluck Drop", bpm: "128", key: "", d: "2:56", img: "" },
    { n: "11", t: "Turn Down for What", a: "DJ Snake & Lil Jon", al: "", tag: "Pure Trap Chaos", bpm: "100", key: "", d: "3:33", img: "" },
    { n: "12", t: "Lose Yourself", a: "Eminem", al: "", tag: "Hypnotic Adrenaline", bpm: "171", key: "", d: "5:26", img: "" },
    { n: "13", t: "Goosebumps", a: "Travis Scott", al: "", tag: "Dark Hydro Energy", bpm: "130", key: "", d: "4:03", img: "" },
    { n: "14", t: "Titanium", a: "David Guetta ft. Sia", al: "", tag: "Laser Anthem Peak", bpm: "126", key: "", d: "4:05", img: "" },
    { n: "15", t: "Remember the Name", a: "Fort Minor", al: "", tag: "High-Stakes Riff", bpm: "170", key: "", d: "3:50", img: "" },
    { n: "16", t: "High Hopes", a: "Panic! At The Disco", al: "", tag: "Brass Pop Euphoria", bpm: "164", key: "", d: "3:10", img: "" },
    { n: "17", t: "Look At Me!", a: "XXXTENTACION", al: "", tag: "Distorted Mosh Trap", bpm: "139", key: "", d: "2:06", img: "" },
    { n: "18", t: "Power", a: "Kanye West", al: "", tag: "Chant & Clap Rage", bpm: "154", key: "", d: "4:52", img: "" },
    { n: "19", t: "Centuries", a: "Fall Out Boy", al: "", tag: "Stadium Gladiator", bpm: "176", key: "", d: "3:48", img: "" },
    { n: "20", t: "Clarity", a: "Zedd ft. Foxes", al: "", tag: "High-Altitude Euphoria", bpm: "128", key: "", d: "4:31", img: "" },
  ] },
  "exciting-gym-phonk": { cover: "assets/img/7e0c013ea4bc.jpg", tracks: [
    { n: "01", t: "RAVE", a: "Dxrk ダーク", al: "", tag: "Hardstyle Phonk Overdrive", bpm: "148", key: "", d: "02:49", img: "" },
    { n: "02", t: "Neon Blade", a: "MoonDeity", al: "", tag: "Cyber Hardstyle", bpm: "150", key: "", d: "04:14", img: "" },
    { n: "03", t: "GigaChad Theme (Phonk House Version)", a: "g3ox_em", al: "", tag: "Ultimate PR Anthem", bpm: "142", key: "", d: "02:26", img: "" },
    { n: "04", t: "BRAZILIAN DANÇA PHONK", a: "DJ Samir, Slowboy", al: "", tag: "Baile Funk Phonk", bpm: "155", key: "", d: "02:10", img: "" },
    { n: "05", t: "Wake Up!", a: "MoonDeity", al: "", tag: "Ultra Velocity", bpm: "145", key: "", d: "02:46", img: "" },
    { n: "06", t: "Murder In My Mind (Sped Up / PR Edit)", a: "Kordhell", al: "", tag: "Gym Overdrive", bpm: "152", key: "", d: "02:08", img: "" },
    { n: "07", t: "Land of Fire", a: "Kordhell", al: "", tag: "Heavy Metal Phonk", bpm: "144", key: "", d: "02:28", img: "" },
    { n: "08", t: "Metamorphosis (Sped Up Gym Mix)", a: "INTERWORLD", al: "", tag: "Pure Adrenaline", bpm: "150", key: "", d: "02:05", img: "" },
    { n: "09", t: "Montagem - PR Funk", a: "S3BZS", al: "", tag: "Brazilian Bass PR", bpm: "158", key: "", d: "02:15", img: "" },
    { n: "10", t: "Automotivo Bibi Fogosa", a: "Bibi Babydoll, DJ Brunin XM", al: "", tag: "Hardstyle Funk", bpm: "160", key: "", d: "02:02", img: "" },
    { n: "11", t: "Vendetta!", a: "MUPP, Sadfriendd", al: "", tag: "Aggressive Rage", bpm: "140", key: "", d: "01:58", img: "" },
    { n: "12", t: "Wrath", a: "Freddie Dredd", al: "", tag: "Underground Dark", bpm: "138", key: "", d: "02:18", img: "" },
    { n: "13", t: "Sahara (Hardstyle Edit)", a: "Hensonn", al: "", tag: "Iron Pump", bpm: "146", key: "", d: "02:30", img: "" },
    { n: "14", t: "Death Wish", a: "Pharmacist", al: "", tag: "Heavyweight Bass", bpm: "142", key: "", d: "02:25", img: "" },
    { n: "15", t: "Killers From The Northside", a: "Kordhell", al: "", tag: "Dark Gym Hype", bpm: "140", key: "", d: "02:12", img: "" },
    { n: "16", t: "S.X.N.D. N.X.D.E.S.", a: "BADTRIP MUSIC, GREEN ORXNGE", al: "", tag: "High Octane", bpm: "145", key: "", d: "01:52", img: "" },
    { n: "17", t: "Immortal", a: "SLOWBOY, Crazy Mano", al: "", tag: "Hardstyle Cowbell", bpm: "150", key: "", d: "02:16", img: "" },
    { n: "18", t: "Shadow", a: "ONIMXRU, SMITHMANE", al: "", tag: "Gym Motivation", bpm: "144", key: "", d: "02:04", img: "" },
    { n: "19", t: "Unlimited Power", a: "KSLV Noh", al: "", tag: "Heavy PR Rush", bpm: "148", key: "", d: "02:20", img: "" },
    { n: "20", t: "Berserk", a: "Cowbell Cult", al: "", tag: "Maximum Aggression", bpm: "155", key: "", d: "02:34", img: "" },
  ] },
  "exciting-urdu-songs": { cover: "assets/img/0ad4f57f2c45.jpg", tracks: [
    { n: "01", t: "Gumaan", a: "Young Stunners, Talha Anjum, Talhah Yunus", al: "", tag: "Melodic Rap Banger", bpm: "", key: "", d: "04:05", img: "assets/img/3db77dd00e4c.jpg" },
    { n: "02", t: "Agency", a: "Talha Anjum, Rap Demon, Umair", al: "", tag: "Hard Trap Bars", bpm: "", key: "", d: "03:32", img: "" },
    { n: "03", t: "Introduction", a: "Faris Shafi", al: "", tag: "Relentless Rapid Flow", bpm: "", key: "", d: "03:10", img: "" },
    { n: "04", t: "Quarantine", a: "Young Stunners, Kr$na", al: "", tag: "Cross-Border Drill", bpm: "", key: "", d: "03:50", img: "" },
    { n: "05", t: "Talk To Me", a: "Talhah Yunus, Umair", al: "", tag: "High Energy Bounce", bpm: "", key: "", d: "03:25", img: "" },
    { n: "06", t: "Waar", a: "Faris Shafi", al: "", tag: "Grime & Aggressive Drill", bpm: "", key: "", d: "03:18", img: "" },
    { n: "07", t: "Rooh", a: "Talhah Yunus", al: "", tag: "Trap Melodic Overdrive", bpm: "", key: "", d: "03:40", img: "" },
    { n: "08", t: "False Prophets", a: "Talha Anjum", al: "", tag: "Heavy 808 Boom-Bap", bpm: "", key: "", d: "03:45", img: "" },
    { n: "09", t: "Jawaab-e-Shikwa (Rock Remix)", a: "Various / Junoon", al: "", tag: "Sufi Metal Explosion", bpm: "", key: "", d: "05:12", img: "" },
    { n: "10", t: "Jazba-e-Junoon", a: "Junoon", al: "", tag: "Legendary Stadium Anthem", bpm: "", key: "", d: "04:15", img: "" },
    { n: "11", t: "Awaam", a: "Faris Shafi ft. Mooroo", al: "", tag: "Political Satire Rap", bpm: "", key: "", d: "03:42", img: "" },
    { n: "12", t: "Two Tone", a: "Young Stunners", al: "", tag: "Fast Tempo Drill", bpm: "", key: "", d: "03:18", img: "" },
    { n: "13", t: "Manzar Kashi", a: "Talha Anjum", al: "", tag: "Hardcore Lyricism", bpm: "", key: "", d: "04:02", img: "" },
    { n: "14", t: "Muaziz Saarif", a: "Faris Shafi, Meesha Shafi", al: "", tag: "Coke Studio Rap Groove", bpm: "", key: "", d: "04:20", img: "" },
    { n: "15", t: "Dhol Sipahi", a: "Ali Hamza, Nirmal Roy", al: "", tag: "Tribal Bass Hype", bpm: "", key: "", d: "03:55", img: "" },
    { n: "16", t: "Lafz", a: "Talhah Yunus, Jokhay", al: "", tag: "Street Cypher Anthem", bpm: "", key: "", d: "03:28", img: "" },
    { n: "17", t: "Maula", a: "Ali Zafar", al: "", tag: "Hard Rock Fusion", bpm: "", key: "", d: "04:30", img: "" },
    { n: "18", t: "Hum Dekhenge (Metal Cover)", a: "Noori / Junoon", al: "", tag: "Rebel Rock Charge", bpm: "", key: "", d: "04:40", img: "" },
    { n: "19", t: "Karachi Lingo", a: "Various", al: "", tag: "Street Slang Trap", bpm: "", key: "", d: "03:15", img: "" },
    { n: "20", t: "Secret Service", a: "Talha Anjum, Umair", al: "", tag: "Sinister 808 Trap", bpm: "", key: "", d: "03:30", img: "" },
  ] },
  "fun-english-songs": { cover: "assets/img/0c2b54f9a412.jpg", tracks: [
    { n: "01", t: "Levitating", a: "Dua Lipa", al: "", tag: "Disco Pop", bpm: "124", key: "", d: "03:23", img: "" },
    { n: "02", t: "Uptown Funk", a: "Mark Ronson ft. Bruno Mars", al: "", tag: "Funk Groove", bpm: "115", key: "", d: "04:30", img: "" },
    { n: "03", t: "Can't Stop the Feeling!", a: "Justin Timberlake", al: "", tag: "Pure Joy", bpm: "113", key: "", d: "03:56", img: "" },
    { n: "04", t: "Blinding Lights", a: "The Weeknd", al: "", tag: "Synthwave", bpm: "171", key: "", d: "03:20", img: "" },
    { n: "05", t: "As It Was", a: "Harry Styles", al: "", tag: "Indie Pop", bpm: "174", key: "", d: "02:47", img: "" },
    { n: "06", t: "24K Magic", a: "Bruno Mars", al: "", tag: "Funk Glam", bpm: "107", key: "", d: "03:46", img: "" },
    { n: "07", t: "Happy", a: "Pharrell Williams", al: "", tag: "Neo Soul", bpm: "160", key: "", d: "03:53", img: "" },
    { n: "08", t: "Dance Monkey", a: "Tones and I", al: "", tag: "Electropop", bpm: "98", key: "", d: "03:29", img: "" },
    { n: "09", t: "Don't Start Now", a: "Dua Lipa", al: "", tag: "Nu Disco", bpm: "124", key: "", d: "03:03", img: "" },
    { n: "10", t: "Good as Hell", a: "Lizzo", al: "", tag: "Empowerment", bpm: "96", key: "", d: "02:39", img: "" },
    { n: "11", t: "Sugar", a: "Maroon 5", al: "", tag: "Pop Funk", bpm: "120", key: "", d: "03:55", img: "" },
    { n: "12", t: "Watermelon Sugar", a: "Harry Styles", al: "", tag: "Summer Chill", bpm: "95", key: "", d: "02:54", img: "" },
    { n: "13", t: "Shut Up and Dance", a: "WALK THE MOON", al: "", tag: "Dance Rock", bpm: "128", key: "", d: "03:19", img: "" },
    { n: "14", t: "Cake by the Ocean", a: "DNCE", al: "", tag: "Party Anthem", bpm: "119", key: "", d: "03:38", img: "" },
    { n: "15", t: "Shake It Off", a: "Taylor Swift", al: "", tag: "Power Pop", bpm: "160", key: "", d: "03:39", img: "" },
    { n: "16", t: "Treasure", a: "Bruno Mars", al: "", tag: "Vintage Disco", bpm: "116", key: "", d: "02:56", img: "" },
    { n: "17", t: "About Damn Time", a: "Lizzo", al: "", tag: "Funk Bounce", bpm: "109", key: "", d: "03:11", img: "" },
    { n: "18", t: "Sunroof", a: "Nicky Youre & dazy", al: "", tag: "Roadtrip", bpm: "131", key: "", d: "02:43", img: "" },
    { n: "19", t: "Butter", a: "BTS", al: "", tag: "Dance Pop", bpm: "110", key: "", d: "02:44", img: "" },
    { n: "20", t: "Stay", a: "The Kid LAROI & Justin Bieber", al: "", tag: "Pop Punk", bpm: "170", key: "", d: "02:21", img: "" },
  ] },
  "fun-party-hindi-songs": { cover: "assets/img/fd7fef4eea88.jpg", tracks: [
    { n: "01", t: "Kala Chashma", a: "Amar Arshi, Badshah, Neha Kakkar", al: "Baar Baar Dekho", tag: "Club Banger", bpm: "130", key: "", d: "03:07", img: "" },
    { n: "02", t: "London Thumakda", a: "Labh Janjua, Sonu Kakkar, Neha Kakkar", al: "Queen", tag: "Sangeet Favorite", bpm: "132", key: "", d: "03:50", img: "" },
    { n: "03", t: "Gallan Goodiyaan", a: "Yashita Sharma, Manish Kumar Tipu, Shankar Mahadevan", al: "", tag: "All-Fam Dance", bpm: "128", key: "", d: "04:56", img: "" },
    { n: "04", t: "Kar Gayi Chull", a: "Badshah, Fazilpuria, Sukriti Kakar", al: "Kapoor & Sons", tag: "Club Banger", bpm: "126", key: "", d: "03:07", img: "" },
    { n: "05", t: "Ghungroo", a: "Arijit Singh, Shilpa Rao, Vishal-Shekhar", al: "War", tag: "Beach Club Groove", bpm: "118", key: "", d: "05:02", img: "" },
    { n: "06", t: "Aankh Marey", a: "Neha Kakkar, Mika Singh, Kumar Sanu", al: "Simmba", tag: "Sangeet Favorite", bpm: "130", key: "", d: "03:32", img: "" },
    { n: "07", t: "Nashe Si Chadh Gayi", a: "Arijit Singh, Caralisa Monteiro", al: "Befikre", tag: "Electro Latin Pop", bpm: "122", key: "", d: "03:57", img: "" },
    { n: "08", t: "The Humma Song", a: "Jubin Nautiyal, Shashaa Tirupati, Badshah", al: "OK Jaanu", tag: "Club Banger", bpm: "105", key: "", d: "03:00", img: "" },
    { n: "09", t: "Dilliwaali Girlfriend", a: "Arijit Singh, Sunidhi Chauhan", al: "YJHD", tag: "High Dhol Bass", bpm: "134", key: "", d: "04:20", img: "" },
    { n: "10", t: "Abhi Toh Party Shuru Hui Hai", a: "Badshah, Aastha Gill", al: "Khoobsurat", tag: "Club Banger", bpm: "130", key: "", d: "03:00", img: "" },
    { n: "11", t: "Sauda Khara Khara", a: "Diljit Dosanjh, Sukhbir, Dhvani Bhanushali", al: "Good Newwz", tag: "High Dhol Bass", bpm: "134", key: "", d: "03:56", img: "" },
    { n: "12", t: "Subha Hone Na De", a: "Mika Singh, Shefali Alvares", al: "Desi Boyz", tag: "Club Banger", bpm: "132", key: "", d: "04:48", img: "" },
    { n: "13", t: "Malhari", a: "Vishal Dadlani", al: "Bajirao Mastani", tag: "Maximum Energy", bpm: "138", key: "", d: "04:05", img: "" },
    { n: "14", t: "Zingaat (Hindi)", a: "Ajay-Atul", al: "Dhadak", tag: "Unfiltered Madness", bpm: "140", key: "", d: "03:47", img: "" },
    { n: "15", t: "Hookah Bar", a: "Himesh Reshammiya, Vineet Singh", al: "Khiladi 786", tag: "Desi Club Trap", bpm: "130", key: "", d: "04:14", img: "" },
    { n: "16", t: "Tamanche Pe Disco", a: "RDB, Nindy Kaur, Raftaar", al: "Bullett Raja", tag: "Desi Hip-Hop", bpm: "128", key: "", d: "03:45", img: "" },
    { n: "17", t: "Chittiyaan Kalaiyaan", a: "Kanika Kapoor, Meet Bros Anjjan", al: "Roy", tag: "Sangeet Favorite", bpm: "124", key: "", d: "03:05", img: "" },
    { n: "18", t: "Sweety Tera Drama", a: "Dev Negi, Pawni Pandey", al: "Bareilly Ki Barfi", tag: "Desi Funk Pop", bpm: "130", key: "", d: "02:47", img: "" },
    { n: "19", t: "Dil Chori", a: "Yo Yo Honey Singh, Simar Kaur", al: "Sonu Ke Titu Ki Sweety", tag: "Bhangra Club Fusion", bpm: "132", key: "", d: "03:45", img: "" },
  ] },
  "fun-urdu-songs": { cover: "assets/img/e9c561f13104.jpg", tracks: [
    { n: "01", t: "Pasoori", a: "Ali Sethi, Shae Gill", al: "", tag: "Global Desi Pop", bpm: "", key: "", d: "03:44", img: "" },
    { n: "02", t: "Kana Yaari", a: "Kaifi Khalil, Eva B, Wahab Bugti", al: "", tag: "Balochi Folk Fusion", bpm: "", key: "", d: "03:36", img: "" },
    { n: "03", t: "Larsha Pekhawar", a: "Ali Zafar, Gul Panra", al: "", tag: "Folk Dance Banger", bpm: "", key: "", d: "03:52", img: "" },
    { n: "04", t: "Billo De Ghar", a: "Abrar-ul-Haq", al: "", tag: "Timeless Desi Bhangra", bpm: "", key: "", d: "04:10", img: "" },
    { n: "05", t: "Sanwal", a: "Sanam Marvi, Umair Jaswal", al: "", tag: "Funk Folk Groove", bpm: "", key: "", d: "04:22", img: "" },
    { n: "06", t: "Mast Nazron Se", a: "Lakhwinder Wadali", al: "", tag: "Qawwali Pop Bounce", bpm: "", key: "", d: "04:05", img: "" },
    { n: "07", t: "Ko Ko Korina", a: "Ahmed Rushdi / Modern Remix", al: "", tag: "Retro Twist", bpm: "", key: "", d: "03:20", img: "" },
    { n: "08", t: "Disco Deewane", a: "Nazia Hassan", al: "", tag: "Vintage Synth Disco", bpm: "", key: "", d: "04:12", img: "" },
    { n: "09", t: "Boom Boom", a: "Nazia Hassan", al: "", tag: "80s Karachi Boogie", bpm: "", key: "", d: "04:30", img: "" },
    { n: "10", t: "Laila O Laila", a: "Ali Zafar", al: "", tag: "Balochi Folk Jam", bpm: "", key: "", d: "03:40", img: "" },
    { n: "11", t: "Baari", a: "Bilal Saeed, Momina Mustehsan", al: "", tag: "Acoustic Rom-Com Bounce", bpm: "", key: "", d: "03:56", img: "" },
    { n: "12", t: "Uff Yeh Noor", a: "Bilal Saeed", al: "", tag: "Wedding Dance Special", bpm: "", key: "", d: "03:30", img: "" },
    { n: "13", t: "Dil Bole Hadippa (Urdu Fusion)", a: "Various", al: "", tag: "Bhangra Energy", bpm: "", key: "", d: "03:45", img: "" },
    { n: "14", t: "Nach Punjaban", a: "Abrar-ul-Haq", al: "", tag: "Wedding Anthem", bpm: "", key: "", d: "04:02", img: "" },
    { n: "15", t: "Sayonee (Groove Mix)", a: "Junoon", al: "", tag: "Funk Sufi Rock", bpm: "", key: "", d: "04:15", img: "" },
    { n: "16", t: "Purani Jeans", a: "Ali Haider", al: "", tag: "College Nostalgia Pop", bpm: "", key: "", d: "04:20", img: "" },
    { n: "17", t: "Dekha Na Tha", a: "Alamgir", al: "", tag: "Classic City Pop", bpm: "", key: "", d: "03:35", img: "" },
    { n: "18", t: "Ballay Ballay", a: "Shiraz Uppal, Harshdeep Kaur", al: "", tag: "Shaadi Floor-Filler", bpm: "", key: "", d: "03:48", img: "" },
    { n: "19", t: "Shakar Wandaan", a: "Asrar", al: "", tag: "Sufi Dance Fiesta", bpm: "", key: "", d: "04:15", img: "" },
    { n: "20", t: "Jhoom (R&B Dance Mix)", a: "Ali Zafar", al: "", tag: "Velvet Groove", bpm: "", key: "", d: "03:38", img: "" },
  ] },
  "hindi-songs": { cover: "assets/img/9e2f5287bdce.jpg", tracks: [
    { n: "01", t: "Channa Mereya", a: "Arijit Singh, Pritam", al: "Ae Dil Hai Mushkil", tag: "", bpm: "", key: "", d: "04:49", img: "assets/img/c0154e97a76d.jpg" },
    { n: "02", t: "Agar Tum Saath Ho", a: "Alka Yagnik & Arijit Singh", al: "Tamasha • A.R. Rahman", tag: "", bpm: "", key: "", d: "05:41", img: "assets/img/24b7aa0d09ba.jpg" },
    { n: "03", t: "Choo Lo", a: "The Local Train", al: "The Local Train", tag: "Indie Cult", bpm: "", key: "", d: "03:54", img: "assets/img/08d1dc23cf76.jpg" },
    { n: "04", t: "Tujhe Kitna Chahne Lage", a: "Arijit Singh, Mithoon", al: "Kabir Singh", tag: "", bpm: "", key: "", d: "04:44", img: "assets/img/52a5e4e65a9a.jpg" },
    { n: "05", t: "Kabira", a: "Tochi Raina & Rekha Bhardwaj", al: "Yeh Jawaani Hai Deewani", tag: "", bpm: "", key: "", d: "03:43", img: "assets/img/6b438f206e5e.jpg" },
    { n: "06", t: "Bekhayali", a: "Sachet Tandon, Sachet-Parampara", al: "Kabir Singh", tag: "", bpm: "", key: "", d: "06:11", img: "assets/img/5a16e1915dc0.jpg" },
    { n: "07", t: "Hamari Adhuri Kahani", a: "Arijit Singh, Jeet Gannguli", al: "Hamari Adhuri Kahani", tag: "", bpm: "", key: "", d: "06:38", img: "assets/img/e473b740e4a3.jpg" },
    { n: "08", t: "Phir Le Aya Dil (Redux)", a: "Rekha Bhardwaj, Pritam", al: "Barfi!", tag: "", bpm: "", key: "", d: "05:05", img: "assets/img/32711d9640ef.jpg" },
  ] },
  "phonk": { cover: "assets/img/803843ae539d.jpg", tracks: [
    { n: "01", t: "snowfall", a: "Øneheart & reidenshi", al: "", tag: "", bpm: "122", key: "E Minor", d: "02:04", img: "assets/img/941813a46d66.jpg" },
    { n: "02", t: "Silhouette", a: "Pastel Ghost", al: "", tag: "", bpm: "126", key: "F# Minor", d: "03:12", img: "assets/img/ee8b93502a82.jpg" },
    { n: "03", t: "Memory Reboot", a: "VØJ & Narvent", al: "", tag: "", bpm: "128", key: "G Minor", d: "01:42", img: "assets/img/812d1029994b.jpg" },
    { n: "04", t: "Close Eyes (Slowed)", a: "DVRST", al: "", tag: "", bpm: "120", key: "C Minor", d: "02:30", img: "assets/img/6387f75de5a2.jpg" },
    { n: "05", t: "Metamorphosis", a: "INTERWORLD", al: "", tag: "", bpm: "130", key: "D# Minor", d: "02:22", img: "assets/img/5d48986a2ed6.jpg" },
    { n: "06", t: "Murder In My Mind", a: "Kordhell", al: "", tag: "", bpm: "130", key: "F Minor", d: "02:25", img: "assets/img/f8a414ec2fea.jpg" },
    { n: "07", t: "RAVE", a: "Dxrk", al: "", tag: "", bpm: "128", key: "G# Minor", d: "02:49", img: "assets/img/602ea0e0a407.jpg" },
    { n: "08", t: "Sahara", a: "Hensonn", al: "", tag: "", bpm: "124", key: "B Minor", d: "02:51", img: "assets/img/1f9df614089e.jpg" },
  ] },
  "romantic-chill-hindi-songs": { cover: "assets/img/255ed3f58045.jpg", tracks: [
    { n: "01", t: "Tum Se Hi", a: "Mohit Chauhan, Pritam", al: "", tag: "Jab We Met", bpm: "78", key: "", d: "05:22", img: "" },
    { n: "02", t: "Raabta (Kehte Hain Khuda)", a: "Arijit Singh, Hamsika Iyer", al: "", tag: "Agent Vinod", bpm: "80", key: "", d: "04:04", img: "" },
    { n: "03", t: "Kesariya", a: "Arijit Singh, Pritam", al: "", tag: "Brahmastra", bpm: "84", key: "", d: "04:28", img: "" },
    { n: "04", t: "Iktara", a: "Kavita Seth, Amitabh Bhattacharya", al: "", tag: "Wake Up Sid", bpm: "74", key: "", d: "04:13", img: "" },
    { n: "05", t: "Baarishein", a: "Anuv Jain", al: "", tag: "Acoustic Original", bpm: "72", key: "", d: "03:27", img: "" },
    { n: "06", t: "Kasoor (Acoustic)", a: "Prateek Kuhad", al: "", tag: "Indie Intimate", bpm: "76", key: "", d: "03:17", img: "" },
    { n: "07", t: "Ilahi", a: "Arijit Singh, Pritam", al: "", tag: "Yeh Jawaani Hai Deewani", bpm: "88", key: "", d: "03:49", img: "" },
    { n: "08", t: "Mast Magan", a: "Arijit Singh, Chinmayi Sripada", al: "", tag: "2 States", bpm: "80", key: "", d: "04:40", img: "" },
    { n: "09", t: "Hawa Banke", a: "Darshan Raval", al: "", tag: "Monsoon Single", bpm: "78", key: "", d: "02:54", img: "" },
    { n: "10", t: "Dil Diyan Gallan", a: "Atif Aslam, Vishal-Shekhar", al: "", tag: "Tiger Zinda Hai", bpm: "75", key: "", d: "04:20", img: "" },
    { n: "11", t: "Pehli Nazar Mein", a: "Atif Aslam, Pritam", al: "", tag: "Race", bpm: "82", key: "", d: "05:14", img: "" },
    { n: "12", t: "Tera Hone Laga Hoon", a: "Atif Aslam, Alisha Chinai", al: "", tag: "Ajab Prem Ki Ghazab Kahani", bpm: "86", key: "", d: "04:59", img: "" },
    { n: "13", t: "Subhanallah", a: "Sreerama Chandra, Shilpa Rao", al: "", tag: "Yeh Jawaani Hai Deewani", bpm: "80", key: "", d: "04:09", img: "" },
    { n: "14", t: "Kaise Mujhe", a: "Benny Dayal, Shreya Ghoshal", al: "", tag: "Ghajini", bpm: "72", key: "", d: "05:46", img: "" },
    { n: "15", t: "Zaalima", a: "Arijit Singh, Harshdeep Kaur", al: "", tag: "Raees", bpm: "84", key: "", d: "04:59", img: "" },
    { n: "16", t: "Nazm Nazm", a: "Arko", al: "", tag: "Bareilly Ki Barfi", bpm: "76", key: "", d: "03:47", img: "" },
    { n: "17", t: "Kho Gaye Hum Kahan", a: "Jasleen Royal, Prateek Kuhad", al: "", tag: "Baar Baar Dekho", bpm: "78", key: "", d: "03:33", img: "" },
    { n: "18", t: "Shayad", a: "Arijit Singh, Pritam", al: "", tag: "Love Aaj Kal", bpm: "80", key: "", d: "04:07", img: "" },
    { n: "19", t: "Pehla Nasha", a: "Udit Narayan, Sadhana Sargam", al: "", tag: "Jo Jeeta Wohi Sikandar", bpm: "78", key: "", d: "04:51", img: "" },
    { n: "20", t: "Tu Aake Dekhle", a: "King", al: "", tag: "The Carnival", bpm: "86", key: "", d: "04:30", img: "" },
  ] },
  "sad-english-songs": { cover: "assets/img/093f0dfe6f8a.jpg", tracks: [
    { n: "01", t: "Someone Like You", a: "Adele", al: "", tag: "Piano / Devastation", bpm: "67", key: "A Major", d: "04:45", img: "assets/img/1d9030a5ed55.jpg" },
    { n: "02", t: "Glimpse of Us", a: "Joji", al: "", tag: "Haunting Piano", bpm: "85", key: "Ab Major", d: "03:53", img: "assets/img/0eec183113c2.jpg" },
    { n: "03", t: "Lovely", a: "Billie Eilish & Khalid", al: "", tag: "Cello Duet", bpm: "115", key: "E Minor", d: "03:20", img: "assets/img/4b0e6efe7ce4.jpg" },
    { n: "04", t: "Heather", a: "Conan Gray", al: "", tag: "Unrequited Sadness", bpm: "102", key: "F Major", d: "03:18", img: "assets/img/5aa49934c1d6.jpg" },
    { n: "05", t: "Drivers License", a: "Olivia Rodrigo", al: "", tag: "Suburban Breakdown", bpm: "72", key: "Bb Major", d: "04:02", img: "assets/img/cb3d537d1688.jpg" },
    { n: "06", t: "The Night We Met", a: "Lord Huron", al: "", tag: "Ghostly Waltz", bpm: "87", key: "G Major", d: "03:28", img: "assets/img/a424796d7c95.jpg" },
    { n: "07", t: "Before You Go", a: "Lewis Capaldi", al: "", tag: "Power Grief", bpm: "112", key: "D Minor", d: "03:35", img: "assets/img/4884d97fe761.jpg" },
    { n: "08", t: "Stay", a: "Post Malone", al: "", tag: "Raw Acoustic", bpm: "73", key: "F Major", d: "03:24", img: "assets/img/c05468bb6612.jpg" },
    { n: "09", t: "Happier", a: "Olivia Rodrigo", al: "", tag: "Selfish Sadness", bpm: "84", key: "F# Minor", d: "02:55", img: "assets/img/d84b354a6017.jpg" },
    { n: "10", t: "All I Want", a: "Kodaline", al: "", tag: "Indie Crescendo", bpm: "91", key: "C Major", d: "05:05", img: "assets/img/fc127ce0c089.jpg" },
    { n: "11", t: "Let Her Go", a: "Passenger", al: "", tag: "Folk Regret", bpm: "75", key: "G Major", d: "04:12", img: "assets/img/5faf35871f80.jpg" },
    { n: "12", t: "Falling", a: "Harry Styles", al: "", tag: "Submerged Piano", bpm: "54", key: "E Minor", d: "04:00", img: "assets/img/09a5cfc5602d.jpg" },
    { n: "13", t: "Say Something", a: "A Great Big World, Christina Aguilera", al: "", tag: "Giving Up", bpm: "48", key: "D Major", d: "03:49", img: "assets/img/7129c4111389.jpg" },
    { n: "14", t: "When the Party's Over", a: "Billie Eilish", al: "", tag: "Vocal Harmonies", bpm: "83", key: "C# Minor", d: "03:16", img: "assets/img/b9f5778eed4d.jpg" },
    { n: "15", t: "Apocalypse", a: "Cigarettes After Sex", al: "", tag: "Dreampop Ache", bpm: "96", key: "F# Major", d: "04:50", img: "assets/img/3e9a9f7bdb17.jpg" },
    { n: "16", t: "I Love You", a: "Billie Eilish", al: "", tag: "Midnight Bedroom", bpm: "69", key: "C Major", d: "04:51", img: "assets/img/e26c44ea9ace.jpg" },
    { n: "17", t: "Remedy", a: "Adele", al: "", tag: "Healing Tears", bpm: "78", key: "A Major", d: "04:05", img: "assets/img/a678e28624ac.jpg" },
    { n: "18", t: "Arcade", a: "Duncan Laurence", al: "", tag: "Euro-Ballad", bpm: "72", key: "A Minor", d: "03:05", img: "assets/img/c4d1c7cabe17.jpg" },
    { n: "19", t: "Bruises", a: "Lewis Capaldi", al: "", tag: "Vocal Tremor", bpm: "111", key: "E Major", d: "03:38", img: "assets/img/760900d41aec.jpg" },
    { n: "20", t: "Another Love", a: "Tom Odell", al: "", tag: "Ultimate Screaming Out", bpm: "122", key: "E Minor", d: "04:04", img: "assets/img/207e4f54d407.jpg" },
  ] },
  "sad-hindi-songs": { cover: "assets/img/8866291c3491.jpg", tracks: [
    { n: "01", t: "Channa Mereya", a: "Arijit Singh, Pritam", al: "Ae Dil Hai Mushkil", tag: "Sufi Heartbreak & Shehnai", bpm: "", key: "", d: "04:49", img: "" },
    { n: "02", t: "Agar Tum Saath Ho", a: "Arijit Singh, Alka Yagnik, A.R. Rahman", al: "Tamasha", tag: "Violin & Acoustic Despair", bpm: "", key: "", d: "05:41", img: "" },
    { n: "03", t: "Tujhe Kitna Chahne Lage", a: "Arijit Singh, Mithoon", al: "Kabir Singh", tag: "Acoustic Longing & Rain", bpm: "", key: "", d: "04:44", img: "" },
    { n: "04", t: "Bekhayali", a: "Sachet Tandon", al: "Kabir Singh", tag: "High-Octane Grief Rock", bpm: "", key: "", d: "06:11", img: "" },
    { n: "05", t: "Hamari Adhuri Kahani", a: "Arijit Singh, Jeet Gannguli", al: "HAK", tag: "Piano & Haunting Strings", bpm: "", key: "", d: "06:38", img: "" },
    { n: "06", t: "Phir Le Aya Dil (Redux)", a: "Rekha Bhardwaj, Pritam", al: "Barfi!", tag: "Semi-Classical Ghazal", bpm: "", key: "", d: "05:05", img: "" },
    { n: "07", t: "Kal Ho Naa Ho (Sad Version)", a: "Sonu Nigam, Shankar-Ehsaan-Loy", al: "", tag: "Eternal Epilogue Tears", bpm: "", key: "", d: "05:35", img: "" },
    { n: "08", t: "Judaai", a: "Rekha Bhardwaj, Arijit Singh", al: "Badlapur", tag: "Folk Lamentation", bpm: "", key: "", d: "04:32", img: "" },
    { n: "09", t: "Kabira (Encore)", a: "Harshdeep Kaur, Arijit Singh", al: "YJHD", tag: "Sufi Acoustic Bittersweet", bpm: "", key: "", d: "04:29", img: "" },
    { n: "10", t: "Lukka Chuppi", a: "Lata Mangeshkar, A.R. Rahman", al: "RDB", tag: "Pure Maternal Pathos", bpm: "", key: "", d: "06:36", img: "" },
    { n: "11", t: "Jag Ghoomeya (Unplugged)", a: "Rahat Fateh Ali Khan", al: "Sultan", tag: "Qawwali Acoustic Soul", bpm: "", key: "", d: "04:39", img: "" },
    { n: "12", t: "Abhi Mujh Mein Kahin", a: "Sonu Nigam, Ajay-Atul", al: "Agneepath", tag: "Orchestral Resignation", bpm: "", key: "", d: "06:04", img: "" },
    { n: "13", t: "Ae Dil Hai Mushkil", a: "Arijit Singh, Pritam", al: "ADHM", tag: "Unrequited Passion", bpm: "", key: "", d: "04:29", img: "" },
    { n: "14", t: "Main Rahoon Ya Na Rahoon", a: "Armaan Malik, Amaal Mallik", al: "", tag: "Soft Piano Whispers", bpm: "", key: "", d: "05:10", img: "" },
    { n: "15", t: "Hasi (Female Version)", a: "Shreya Ghoshal", al: "Hamari Adhuri Kahani", tag: "Ethereal Vocal Weep", bpm: "", key: "", d: "03:13", img: "" },
    { n: "16", t: "Teri Mitti (Tribute)", a: "B Praak, Arko", al: "Kesari", tag: "Raw Punjabi Pathos", bpm: "", key: "", d: "05:14", img: "" },
    { n: "17", t: "Sunn Raha Hai (Female)", a: "Shreya Ghoshal", al: "Aashiqui 2", tag: "Acoustic Sitar Weep", bpm: "", key: "", d: "05:14", img: "" },
    { n: "18", t: "Tum Hi Ho", a: "Arijit Singh, Mithoon", al: "Aashiqui 2", tag: "Definitive Heartbreak Hymn", bpm: "", key: "", d: "04:22", img: "" },
    { n: "19", t: "Milne Hai Mujhse Aayi", a: "Arijit Singh, Jeet Gannguli", al: "Aashiqui 2", tag: "Distorted Guitar Melancholy", bpm: "", key: "", d: "04:55", img: "" },
    { n: "20", t: "Tadap Tadap", a: "KK, Ismail Darbar", al: "HDDCS", tag: "Legendary Agony Crescendo", bpm: "", key: "", d: "06:38", img: "" },
  ] },
  "sad-phonk": { cover: "assets/img/7f332c0bcf32.jpg", tracks: [
    { n: "01", t: "snowfall", a: "Øneheart & reidenshi", al: "", tag: "Melancholic Ambient Phonk", bpm: "122", key: "", d: "02:04", img: "" },
    { n: "02", t: "Memory Reboot", a: "VØJ, Narvent", al: "", tag: "Cyberpunk Sad Phonk", bpm: "128", key: "", d: "01:42", img: "" },
    { n: "03", t: "Close Eyes (Slowed + Reverb)", a: "DVRST", al: "", tag: "Nocturnal Drift", bpm: "118", key: "", d: "02:45", img: "" },
    { n: "04", t: "Sahara (Slowed)", a: "Hensonn", al: "", tag: "Melancholy Cowbell", bpm: "115", key: "", d: "03:02", img: "" },
    { n: "05", t: "Silhouette", a: "Pastel Ghost", al: "", tag: "Darkwave Phonk", bpm: "126", key: "", d: "03:12", img: "" },
    { n: "06", t: "Metamorphosis (Orchestral Slowed)", a: "INTERWORLD", al: "", tag: "Sad Cinematic", bpm: "110", key: "", d: "02:40", img: "" },
    { n: "07", t: "crystal dolphin phonk", a: "Engelwood x KUTE", al: "", tag: "Nostalgic Lo-Fi", bpm: "120", key: "", d: "02:18", img: "" },
    { n: "08", t: "lovely phonk", a: "scxre, reidenshi", al: "", tag: "Atmospheric Sad", bpm: "114", key: "", d: "01:55", img: "" },
    { n: "09", t: "After Dark x Sweater Weather Phonk", a: "Mr. Kitty x The Neighbourhood", al: "", tag: "Slowed Drift", bpm: "124", key: "", d: "03:30", img: "" },
    { n: "10", t: "Midnight", a: "Playamane, Nateki", al: "", tag: "Solitary Drift", bpm: "125", key: "", d: "02:08", img: "" },
    { n: "11", t: "Resonance (Phonk Redux)", a: "HOME / Kordhell", al: "", tag: "Lo-Fi Vapor Phonk", bpm: "116", key: "", d: "02:50", img: "" },
    { n: "12", t: "Fallen Angel", a: "SXNDRX, Pharmacist", al: "", tag: "Ethereal Tearjerker", bpm: "120", key: "", d: "02:15", img: "" },
    { n: "13", t: "Static Memories", a: "LXST CXNTURY", al: "", tag: "Tape Decay Wave", bpm: "118", key: "", d: "02:38", img: "" },
    { n: "14", t: "Echoes in Rain", a: "Grim Salvo", al: "", tag: "Dark Melancholy", bpm: "122", key: "", d: "02:22", img: "" },
    { n: "15", t: "Tell Me Why", a: "green orxnge", al: "", tag: "Slowed Nostalgia", bpm: "115", key: "", d: "02:10", img: "" },
    { n: "16", t: "Bleeding Heart", a: "KSLV Noh", al: "", tag: "Heavy Sad Phonk", bpm: "120", key: "", d: "02:25", img: "" },
    { n: "17", t: "Last Drive", a: "Cowbell Cult", al: "", tag: "Highway Solitude", bpm: "124", key: "", d: "02:34", img: "" },
    { n: "18", t: "Distant Tears", a: "Tokyomane", al: "", tag: "Sub-Bass Grief", bpm: "116", key: "", d: "02:14", img: "" },
    { n: "19", t: "Void Walker", a: "CHXRN", al: "", tag: "Nocturnal Phonk", bpm: "122", key: "", d: "02:42", img: "" },
    { n: "20", t: "Goodbye Shibuya", a: "SHADXWBXRN", al: "", tag: "Final Drift", bpm: "120", key: "", d: "02:50", img: "" },
  ] },
  "sad-urdu-songs": { cover: "assets/img/33e0471db93d.jpg", tracks: [
    { n: "01", t: "Kahani Suno 2.0", a: "Kaifi Khalil", al: "", tag: "Balochi Soul", bpm: "", key: "", d: "03:42", img: "" },
    { n: "02", t: "Tu Hai Kahan", a: "AUR, Raffey, Usama, Ahad", al: "", tag: "Melodic Trap", bpm: "", key: "", d: "04:15", img: "" },
    { n: "03", t: "Faasle", a: "Aditya Rikhari", al: "", tag: "Raw Acoustic", bpm: "", key: "", d: "03:09", img: "" },
    { n: "04", t: "Ghalat Fehmi", a: "Asim Azhar, Zenab Fatimah Sultan", al: "", tag: "Orchestral Ache", bpm: "", key: "", d: "04:22", img: "" },
    { n: "05", t: "Afsanay", a: "Young Stunners, Talha Anjum, Talhah Yunus", al: "", tag: "Urdu Rap Lo-Fi", bpm: "", key: "", d: "05:14", img: "" },
    { n: "06", t: "Dil Na Jaaneya", a: "Rochak Kohli, Lauv, Akasa", al: "", tag: "Warm Indie", bpm: "", key: "", d: "03:49", img: "" },
    { n: "07", t: "Baarishein", a: "Anuv Jain", al: "", tag: "Acoustic Original", bpm: "", key: "", d: "03:27", img: "" },
    { n: "08", t: "Aadat (Deep Acoustic)", a: "Atif Aslam, Jal", al: "", tag: "Nostalgic Rock", bpm: "", key: "", d: "04:30", img: "" },
    { n: "09", t: "Tera Woh Pyar (Nawazishein Karam)", a: "Momina Mustehsan, Asim Azhar", al: "", tag: "Soulful Duet", bpm: "", key: "", d: "07:05", img: "" },
    { n: "10", t: "Tajdar-e-Haram (Acoustic Reflection)", a: "Atif Aslam", al: "", tag: "Devotional Melancholy", bpm: "", key: "", d: "06:12", img: "" },
    { n: "11", t: "Woh Lamhe Woh Baatein", a: "Atif Aslam", al: "", tag: "Heartbreak Echo", bpm: "", key: "", d: "05:18", img: "" },
    { n: "12", t: "Bikhra", a: "Abdul Hannan, Rovalio", al: "", tag: "Dreamy Bedroom Pop", bpm: "", key: "", d: "03:45", img: "" },
    { n: "13", t: "Iraaday", a: "Abdul Hannan, Rovalio", al: "", tag: "Velvet Yearning", bpm: "", key: "", d: "03:15", img: "" },
    { n: "14", t: "Downers At Dusk", a: "Talha Anjum, Umair", al: "", tag: "Nocturnal Isolation", bpm: "", key: "", d: "03:58", img: "" },
    { n: "15", t: "Gul", a: "Anuv Jain", al: "", tag: "Delicate Pluck", bpm: "", key: "", d: "03:40", img: "" },
    { n: "16", t: "Alag Aasmaan", a: "Anuv Jain", al: "", tag: "Long Distance Rain", bpm: "", key: "", d: "03:52", img: "" },
    { n: "17", t: "Phir Milenge", a: "Faisal Kapadia, Young Stunners", al: "", tag: "Bittersweet Farewell", bpm: "", key: "", d: "05:40", img: "" },
    { n: "18", t: "Maahi Ve", a: "Faakhir Mehmood", al: "", tag: "Classic 2000s Ache", bpm: "", key: "", d: "04:15", img: "" },
    { n: "19", t: "Humsafar", a: "Qurat-ul-Ain Balouch", al: "", tag: "Sufi Tragedy", bpm: "", key: "", d: "04:50", img: "" },
    { n: "20", t: "Sajni", a: "Strings", al: "", tag: "Timeless Pop Melancholy", bpm: "", key: "", d: "04:45", img: "" },
  ] },
  "sufi-soul-urdu-songs": { cover: "assets/img/60828c8402db.jpg", tracks: [
    { n: "01", t: "Chaap Tilak", a: "Abida Parveen, Rahat Fateh Ali Khan", al: "", tag: "Amir Khusro Kalam • Sufi Qawwali", bpm: "", key: "", d: "08:15", img: "" },
    { n: "02", t: "Afreen Afreen", a: "Rahat Fateh Ali Khan, Momina Mustehsan", al: "", tag: "Coke Studio Classic", bpm: "", key: "", d: "06:45", img: "" },
    { n: "03", t: "Tajdar-e-Haram", a: "Atif Aslam (Sabri Brothers Tribute)", al: "", tag: "Qawwali Devotional Hymn", bpm: "", key: "", d: "10:14", img: "" },
    { n: "04", t: "Tu Jhoom", a: "Abida Parveen, Naseebo Lal", al: "", tag: "Transcendent Ecstasy", bpm: "", key: "", d: "07:20", img: "" },
    { n: "05", t: "Yeh Jo Halka Halka Suroor Hai", a: "Nusrat Fateh Ali Khan", al: "", tag: "Ecstatic Trance Qawwali", bpm: "", key: "", d: "12:30", img: "" },
    { n: "06", t: "Mast Qalandar (Dama Dam)", a: "Abida Parveen", al: "", tag: "Jhulelal Ecstasy Dhamaal", bpm: "", key: "", d: "06:50", img: "" },
    { n: "07", t: "Man Kunto Maula", a: "Fareed Ayaz, Abu Muhammad", al: "", tag: "Chisti Qawwali Raga", bpm: "", key: "", d: "11:20", img: "" },
    { n: "08", t: "Sayonee", a: "Junoon", al: "", tag: "Sufi Rock Pioneer", bpm: "", key: "", d: "05:15", img: "" },
    { n: "09", t: "Alif Allah (Jugni)", a: "Arif Lohar, Meesha Shafi", al: "", tag: "Chimta Folk Sufi", bpm: "", key: "", d: "07:10", img: "" },
    { n: "10", t: "Wohi Khuda Hai", a: "Atif Aslam", al: "", tag: "Hamd Reverence", bpm: "", key: "", d: "05:40", img: "" },
    { n: "11", t: "Kali Kali Zulfon Ke Phande", a: "Nusrat Fateh Ali Khan", al: "", tag: "Qawwali Love Ballad", bpm: "", key: "", d: "14:00", img: "" },
    { n: "12", t: "Yaar Dhadhi", a: "Sanam Marvi", al: "", tag: "Siraiki Sufi Mystic", bpm: "", key: "", d: "06:10", img: "" },
    { n: "13", t: "Garaj Baras", a: "Ali Azmat, Rahat Fateh Ali Khan", al: "", tag: "Sufi Rock Fusion", bpm: "", key: "", d: "05:25", img: "" },
    { n: "14", t: "Shikwa / Jawaab-e-Shikwa", a: "Natasha Baig, Fareed Ayaz, Abu Muhammad", al: "", tag: "Allama Iqbal Epic", bpm: "", key: "", d: "09:30", img: "" },
    { n: "15", t: "Mera Piya Ghar Aaya", a: "Nusrat Fateh Ali Khan", al: "", tag: "Bulleh Shah Ecstasy", bpm: "", key: "", d: "11:45", img: "" },
    { n: "16", t: "Ishq Aap Bhe Awalla", a: "Chakwal Group, Meesha Shafi", al: "", tag: "Punjabi Sufi Kalam", bpm: "", key: "", d: "06:35", img: "" },
    { n: "17", t: "Sanson Ki Mala Pe", a: "Nusrat Fateh Ali Khan", al: "", tag: "Devotional Romance", bpm: "", key: "", d: "09:10", img: "" },
    { n: "18", t: "Paar Chanaa De", a: "Shilpa Rao, Noori", al: "", tag: "Folk Lore Transcendence", bpm: "", key: "", d: "07:45", img: "" },
    { n: "19", t: "Faasle", a: "Kaavish", al: "", tag: "Delicate Soul Ghazal", bpm: "", key: "", d: "04:30", img: "" },
    { n: "20", t: "Piya Ghar Aavenge", a: "Kailash Kher / Sufi Ensemble", al: "", tag: "Soul Yearning Devotion", bpm: "", key: "", d: "06:05", img: "" },
  ] },
  "urdu-songs": { cover: "assets/img/81cb93c5bff6.jpg", tracks: [
    { n: "01", t: "Kahani Suno 2.0", a: "Kaifi Khalil", al: "", tag: "", bpm: "", key: "", d: "02:54", img: "assets/img/0eb41fc03c31.jpg" },
    { n: "02", t: "Tu Hai Kahan", a: "AUR", al: "", tag: "Harmonies", bpm: "", key: "", d: "04:12", img: "assets/img/d338c58de630.jpg" },
    { n: "03", t: "Faasle", a: "Aditya Rikhari", al: "", tag: "Acoustic Ballad", bpm: "", key: "", d: "03:38", img: "assets/img/d7823d8172a6.jpg" },
    { n: "04", t: "Ghalat Fehmi", a: "Asim Azhar", al: "", tag: "Orchestral Strings", bpm: "", key: "", d: "03:52", img: "assets/img/127ecbd63b11.jpg" },
    { n: "05", t: "Afsanay", a: "Young Stunners", al: "", tag: "Lyrical", bpm: "", key: "", d: "05:18", img: "assets/img/ca7f7b4724a8.jpg" },
    { n: "06", t: "Dil Na Jaaneya", a: "Rochak Kohli, Lauv, Akasa Singh", al: "", tag: "", bpm: "", key: "", d: "03:49", img: "assets/img/3477b954a30d.jpg" },
    { n: "07", t: "Baarishein", a: "Anuv Jain", al: "", tag: "Ukulele & Velvet", bpm: "", key: "", d: "03:27", img: "assets/img/3c308cea878b.jpg" },
    { n: "08", t: "Pasoori (Acoustic)", a: "Ali Sethi", al: "", tag: "Classical Slowed", bpm: "", key: "", d: "04:05", img: "assets/img/7b0894294044.jpg" },
  ] },
};
