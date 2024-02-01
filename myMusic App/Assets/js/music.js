let audio = new Audio();
let isPlaying = false;
let pausedTime = 0;
let currentSongIndex = 0;

const playButton = document.getElementById('play');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');

playButton.addEventListener('click', togglePlay);
rewindButton.addEventListener('click', () => changeSong(-1));
forwardButton.addEventListener('click', () => changeSong(1));

audio.addEventListener('timeupdate', updateCurrentTime);
audio.addEventListener('ended', playNextSong);

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    pausedTime = audio.currentTime;
  } else {
    playCurrentSong();
  }
  isPlaying = !isPlaying;
}

function changeSong(direction) {
  currentSongIndex = (currentSongIndex + direction + Object.keys(MusicData.SamuelBarber[0]).length) % Object.keys(MusicData.SamuelBarber[0]).length;
  playCurrentSong();
}

function playNextSong() {
  isPlaying = false;
  resetTimeDisplay();
  currentSongIndex = (currentSongIndex + 1) % Object.keys(MusicData.SamuelBarber[0]).length;

  if (currentSongIndex === 0) {
    audio.currentTime = 0;
  }

  playCurrentSong();
}

function playCurrentSong() {
  const totalSongs = Object.keys(MusicData.SamuelBarber[0]).filter(key => key.startsWith('song')).length;
  currentSongIndex = Math.min(currentSongIndex, totalSongs - 1);

  const songKey = `song${(currentSongIndex + 1).toString().padStart(2, '0')}`;
  audio.src = MusicData.SamuelBarber[0][songKey];
  audio.currentTime = pausedTime;
  audio.play();
}

function updateCurrentTime() {
  const currentTimeElement = document.getElementById('currentTime');
  const lastTimeElement = document.getElementById('lastTime');
  const musicBar = document.querySelector('.musicBar');

  currentTimeElement.textContent = formatTime(audio.currentTime);
  lastTimeElement.textContent = formatTime(audio.duration);
  musicBar.value = (audio.currentTime / audio.duration) * 100;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function resetTimeDisplay() {
  const currentTimeElement = document.getElementById('currentTime');
  const lastTimeElement = document.getElementById('lastTime');
  const musicBar = document.querySelector('.musicBar');

  currentTimeElement.textContent = '0:00';
  lastTimeElement.textContent = '0:00';
  musicBar.value = 0;
}
