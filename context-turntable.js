const audioPlayer = document.getElementById("audioPlayer");
const songTitle = document.getElementById("songTitle");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playlistList = document.getElementById("playlistList");
const appShell = document.querySelector(".app-shell");
const minBtn = document.getElementById("minBtn");
const maxBtn = document.getElementById("maxBtn");
const closeBtn = document.getElementById("closeBtn");
const reopenBtn = document.getElementById("reopenBtn");

const playlist = [
  {
    title: "Rammstein - Du Hast",
    file: "audio/Rammstein - Du Hast (Official 4K Video).mp3",
  },
  {
    title: "S.E.S - I'm Your Girl",
    file: "audio/S.E.S - Im Your Girl MV.mp3",
  },
  {
    title: "...Baby One More Time",
    file: "audio/_Baby One More Time.mp3",
  },
  {
    title: "Hikaru Utada - First Love",
    file: "audio/Hikaru Utada - First Love.mp3",
  },
  {
    title: "Faye Wong - 情誡",
    file: "audio/王菲 Faye Wong -情誡 (粵)(Official Music Video) [HD].mp3",
  },
  {
    title: "Nirvana - Serve The Servants (2023 Remaster)",
    file: "audio/Serve The Servants (2023 Remaster) [Tfu2TULaZe8].mp3",
  },
  {
    title: "Jiyuu no Tsubasa",
    file: "audio/Jiyuu no Tsubasa.mp3",
  },
];

let currentTrackIndex = 0;

function renderPlaylist() {
  playlistList.innerHTML = "";

  playlist.forEach((track, index) => {
    const li = document.createElement("li");
    li.className = "playlist-item";
    li.textContent = `${String(index + 1).padStart(2, "0")} ${track.title}`;

    if (index === currentTrackIndex) {
      li.classList.add("active");
    }

    li.addEventListener("click", () => {
      loadTrack(index);
      playTrack();
    });

    playlistList.appendChild(li);
  });
}

function loadTrack(index) {
  currentTrackIndex = index;
  const track = playlist[currentTrackIndex];
  audioPlayer.src = track.file;
  songTitle.textContent = track.title;
  renderPlaylist();
}

function playTrack() {
  audioPlayer
    .play()
    .then(() => {
      playPauseBtn.textContent = "Pause";
    })
    .catch((error) => {
      console.error("Playback failed:", error);
    });
}

function pauseTrack() {
  audioPlayer.pause();
  playPauseBtn.textContent = "Play";
}

function playPrevious() {
  const previousIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(previousIndex);
  playTrack();
}

function playNext() {
  const nextIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(nextIndex);
  playTrack();
}

playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    playTrack();
  } else {
    pauseTrack();
  }
});

prevBtn.addEventListener("click", playPrevious);
nextBtn.addEventListener("click", playNext);

audioPlayer.addEventListener("ended", () => {
  playNext();
});

audioPlayer.addEventListener("pause", () => {
  playPauseBtn.textContent = "Play";
});

audioPlayer.addEventListener("play", () => {
  playPauseBtn.textContent = "Pause";
});

minBtn.addEventListener("click", () => {
  appShell.classList.toggle("app-minimized");
});

maxBtn.addEventListener("click", () => {
  appShell.classList.remove("app-minimized");
  appShell.classList.toggle("app-maximized");
});

closeBtn.addEventListener("click", () => {
  appShell.classList.add("app-closed");
  reopenBtn.hidden = false;
});

reopenBtn.addEventListener("click", () => {
  appShell.classList.remove("app-closed");
  reopenBtn.hidden = true;
});

loadTrack(currentTrackIndex);
