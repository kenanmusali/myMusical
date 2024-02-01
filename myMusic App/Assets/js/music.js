let audio = new Audio();
let isPlaying = false;
let pausedTime = 0;

// Ensure pauseIcon is initially hidden
document.getElementById('pause').style.display = 'none';

document.getElementById('play').addEventListener('click', function() {
  let playIcon = document.getElementById('play');
  let pauseIcon = document.getElementById('pause');

  if (isPlaying) {
    audio.pause();
    pausedTime = audio.currentTime;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  } else {
    audio.src = MusicData.SamuelBarber[0].song01;
    audio.currentTime = pausedTime;
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  }
  isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', function() {
  updateCurrentTime();
});

audio.addEventListener('ended', function() {
  isPlaying = false;
  resetTimeDisplay();
  // Ensure playIcon is visible and pauseIcon is hidden when music stops
  document.getElementById('play').style.display = 'block';
  document.getElementById('pause').style.display = 'none';
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

document.getElementById('pause').addEventListener('click', function() {
    let playIcon = document.getElementById('play');
    let pauseIcon = document.getElementById('pause');
  
    audio.pause();
    pausedTime = audio.currentTime;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    isPlaying = false;
  });
  