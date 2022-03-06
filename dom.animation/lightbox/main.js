var thumbnail = document.createElement("img");
thumbnail.src =
  "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
document.body.appendChild(thumbnail);
thumbnail.style.width = "100px";

function openLightbox() {
  document.querySelector(".overlay").style.display = "flex";
}

thumbnail.addEventListener("click", openLightbox);
document.body.appendChild(thumbnail);

function closeOverlay() {
  document.querySelector(".overlay").style.display = "none;";
}
document
  .querySelector(".overlayBackground")
  .addEvenetListener("click", closeOverlay);
