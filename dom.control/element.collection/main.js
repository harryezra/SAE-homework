var buttons = document.querySelectorAll("button");
var options = ["enable", "disable", "alert"];

function randomize(max) {
  return Math.round(Math.random() * (max - 1));
}

function doStuff() {
  var randomBtn = randomize(buttons.length);
  console.log("button " + randomBtn);
  var randomOption = randomize(options.length);
  console.log("option " + randomOption);
  if (options[randomOption] == "disable") {
    buttons[randomBtn].setAttribute("disabled", "true");
  } else if (options[randomOption] == "enable") {
    buttons[randomBtn].removeAttribute("disabled");
  } else {
    alert("CONGRATS! YOU JUST WON 1.000.000$$$");
  }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", doStuff);
}
