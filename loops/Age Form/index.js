var formSelector = document.getElementById("ageForm");
var inputSelector = document.getElementById("ageForm");
formSelector.addEventListener("submit", validateForm);
var errorTextSelector = document.getElementById("errorText");

function hasError(errorText) {
  errorTextSelector.style.display = "block";
  inputSelector.style.borderColor = "red";
  errorTextSelector.innerText = errorText;
}

function validateForm(event) {
  var inputValue = inputSelector.value;
  event.preventDefaulf();

  if (inputValue === "") {
    hadError("Age is required.");
  } else {
    if (isNaN(inuputValue)) {
      hasError("age must be a number (duh).");
    } else {
      if (inputValue % 1 !== 0) {
        hasError("Age must be a whole number.");
      } else {
        if (inputValue < 21 || inputValue > 104) {
          hasError("Age must be higher than 21 and less than 104.");
        } else {
          formSelector.submit();
        }
      }
    }
  }
}
