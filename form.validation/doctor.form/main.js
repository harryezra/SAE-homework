var patientNameField = document.getElementById("patient-name");
var patientLastNameField = document.getElementById("patient-last-name");
var ageField = document.getElementById("age");
var sexField = document.getElementById("sex");
var phoneField = document.getElementById("phone");
var emailField = document.getElementById("email");
var messageField = document.getElementById("message");

function validateForm() {
  var isValid = true;
  if (
    !patientNameField.value ||
    patientNameField.value == "" ||
    patientNameField.value == undefined
  ) {
    isValid = false;
    document.getElementById("patient-name-field-error").style.display = "block";
  }
  if (
    !patientLastNameField.value ||
    patientLastNameField.value == "" ||
    patientNameField.value == undefined
  ) {
    isValid = false;
    document.getElementById("patient-last-name-field-error").style.display =
      "block";
  }

  if (ageField.value < 18) {
    isValid = false;
    document.getElementById("patient-age-field-error").style.display = "block";
  }
  if (sexField.value == "") {
    isValid = false;
    document.getElementById("sex-field-error").style.display = "block";
  }
  if (emailField.value == "") {
    isValid = false;
    document.getElementById("email-field-error").style.display = "block";
  }
  return isValid;
}

function submitForm() {
  if (validateForm()) {
    alert("Successfully submitted data.");
  }
}
