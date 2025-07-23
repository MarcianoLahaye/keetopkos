

// Vimeo Player API integration
const iframe = document.getElementById('vimeoPlayer');
const player = new Vimeo.Player(iframe);

const playPauseButton = document.getElementById("playPauseButton");
const fastForwardButton = document.getElementById("fastForwardButton");
const rewindButton = document.getElementById("rewindButton");
const buttons = document.querySelectorAll(".video-button");
const fullscreenButton = document.getElementById("fullscreenButton");

playPauseButton.addEventListener("click", async () => {
  const status = await player.getPaused();
  if (status) {
    player.play();
    playPauseButton.textContent = " Pauzeer";
  } else {
    player.pause();
    playPauseButton.textContent = "Video afspelen";
  }
});

fastForwardButton.addEventListener("click", async () => {
  const current = await player.getCurrentTime();
  player.setCurrentTime(current + 5);
});

rewindButton.addEventListener("click", async () => {
  const current = await player.getCurrentTime();
  player.setCurrentTime(Math.max(0, current - 5));
});

fullscreenButton.addEventListener("click", () => {
  const iframe = document.getElementById('vimeoPlayer');
  const isFullscreen = document.fullscreenElement === iframe ||
    document.webkitFullscreenElement === iframe ||
    document.mozFullScreenElement === iframe ||
    document.msFullscreenElement === iframe;

  if (isFullscreen) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  }
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const vimeoId = btn.getAttribute("data-vimeo");
    player.loadVideo(vimeoId).then(() => {
      player.play();
      playPauseButton.textContent = " Pauzeer";
    });
  });
});


// Add your JavaScript functionality here
console.log("Kos Vlog loaded successfully");
