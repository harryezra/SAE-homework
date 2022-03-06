let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);

var arr = [];
var hone = document.getElementById("hone");

btn.addEventListener("click", function () {
  var prt = prompt("Please input a value");

  if (prt != "") {
    arr.push(prt);
    hone.innerText = arr;
  } else {
    return false;
  }
  console.log(arr);
});
