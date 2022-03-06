var img = document.createElement("img");
img.src = "https://img.icons8.com/fluency/50/000000/doge.png";
img.style.width = "100px";
img.style.position = "absolute";
img.style.transition = ".1s";
document.body.appendChild(img);

function dogeFollows(event) {
  img.style.top = event.clientY - 40 + "px";
  img.style.left = event.clientX - 40 + "px";
}

document.addEventListener("mousemove", dogeFollows);
