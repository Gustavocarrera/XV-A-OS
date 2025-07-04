
function toggleMusic() {
  var music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function updateCountdown() {
  const countdown = document.getElementById("countdown");
  const eventDate = new Date("2025-07-18T19:00:00");
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.innerText = "🎉 ¡Ya comenzó la celebración!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / 1000 / 60) % 60);
  const sec = Math.floor((diff / 1000) % 60);

  countdown.innerText = `⏳ Faltan ${days} días, ${hrs} hrs, ${min} min, ${sec} seg`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
