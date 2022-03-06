var ageForm = document.getElementById("ageForm");
ageForm.addEventListener("submit", validateForm);

var inputSelector = document.getElementById("age");
var errorTextSelector = document.getElementById("error");

function hasError(errorText) {
  errorTextSelector.style.display = "block";
  inputSelector.style.borderColor = "red";
  errorTextSelector.innerText = errorText;
}

function validateForm(event) {
  var inputValue = inputSelector.value;
  event.preventDefault();

  if (inputValue === "") {
    hasError("Age cannot be empty");
  } else {
    if (isNaN(inputValue)) {
      hasError("Age must be a number");
    } else {
      if (inputValue % 1 !== 0) {
        hasError("Age can only be a whole number");
      } else {
        if (inputValue.indexOf(" ") > -1) {
          hasError("Spaces are not allowed");
        } else {
          if (inputValue < 21 || inputValue > 104) {
            hasError("Age must be between 21 and 104");
          } else {
            form.submit();
          }
        }
      }
    }
  }
}
