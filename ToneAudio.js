
await loadScript("https://unpkg.com/tone")
const player = new Tone.Player("https://drive.google.com/drive/u/0/folders/1xYbmM5SOTCvJNXprEzPsn9_w_39w9UR0").toDestination();
player.autostart = true;
player.loop = true;
player.loopStart = 0;
