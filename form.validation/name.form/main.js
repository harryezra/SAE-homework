var form = document.getElementById("ourForm");
form.addEventListener("submit", validateForm);

var inputSelector = document.getElementById("name");
var errorTextSelector = document.getElementById("error");

function validateForm(event) {
  event.preventDefault(); // Stops default action (in this case submitting)
  console.log("Validating form...");

  var isValidated = true;

  if (inputSelector.value === "") {
    console.log("Name cannot be empty");
    errorTextSelector.style.display = "block";
    errorTextSelector.innerText = "Name cannot be empty";
    inputSelector.style.borderColor = "red";
    var isValidated = false;
  }

  if (inputSelector.value.indexOf(" ") > -1) {
    // -1 means a space exists
    // anything else means there is an indexed space character.
    console.log("Name cannot contain a space");
    errorTextSelector.style.display = "block";
    errorTextSelector.innerText = "Name cannot contain a space";
    inputSelector.style.borderColor = "red";
    var isValidated = false;
  }
  if (isValidated === true) {
    form.submit();
  }
}
