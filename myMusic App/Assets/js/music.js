let audio = new Audio();
let isPlaying = false;
let pausedTime = 0;

document.getElementById('play').addEventListener('click', function() {
  if (isPlaying) {
    audio.pause();
    pausedTime = audio.currentTime;
  } else {
    audio.src = MusicData.SamuelBarber[0].song01;
    audio.currentTime = pausedTime;
    audio.play();
  }
  isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', function() {
  updateCurrentTime();
});

audio.addEventListener('ended', function() {
  isPlaying = false;
  resetTimeDisplay();
});

function updateCurrentTime() {
  let currentTimeElement = document.getElementById('currentTime');
  let lastTimeElement = document.getElementById('lastTime');
  let musicBar = document.querySelector('.musicBar');

  currentTimeElement.textContent = formatTime(audio.currentTime);
  lastTimeElement.textContent = formatTime(audio.duration);

  musicBar.value = (audio.currentTime / audio.duration) * 100;
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function resetTimeDisplay() {
  let currentTimeElement = document.getElementById('currentTime');
  let lastTimeElement = document.getElementById('lastTime');
  let musicBar = document.querySelector('.musicBar');

  currentTimeElement.textContent = '0:00';
  lastTimeElement.textContent = '0:00';
  musicBar.value = 0;
}

document.querySelector('.musicBar').addEventListener('input', function() {
  let musicBar = document.querySelector('.musicBar');
  audio.currentTime = (musicBar.value / 100) * audio.duration;
  updateCurrentTime();
});
