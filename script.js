let musicStarted = false;

document.addEventListener("click", function () {
  if (!musicStarted) {
    const music = document.getElementById("bgMusic");
    if (music) {
      music.play();
      musicStarted = true;
    }
  }
});

function openSurprise() {
  document.querySelector(".main").style.display = "none";
  document.getElementById("surprisePage").style.display = "flex";
}
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// start hearts animation
setInterval(createHeart, 500);
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 3000);
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === "MadhuBava") {
    document.getElementById("lockScreen").style.display = "none";
  } else {
    document.getElementById("errorMsg").innerText = "Wrong Password 😢";
  }
}