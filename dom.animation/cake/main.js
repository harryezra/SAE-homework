var img = document.querySelector("img");
function shakeNo() {
  img.classList.add("shakeNo");
}

function enlargeCake() {
  var currentSize = img.width;
  var screenSize = window.innerWidth;
  img.classList.remove = "shakeNo";
  if (currentSize < screenSize / 2) {
    img.style.width = currentSize + 100 + "px";
  } else {
    setTimeout(shakeNo, 1000);
  }
}

img.addEventListener("click", enlargeCake);
