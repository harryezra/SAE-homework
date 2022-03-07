function getMatchPercentage(firstName, secondName) {
  var numberOfMatchingChars = 0;

  firstName = firstName.toLowerCase();
  secondName = secondName.toLowerCase();

  var stringLength = firstName.length;

  var percentage = 0;

  for (var i = 0; i < stringLength; i++) {
    if (secondName.includes(firstName[i])) {
      numberOfMatchingChars += 1;
    }
  }

  percentage = (100 * numberOfMatchingChars) / stringLength;
  return percentage;
}
function displayMatchingPercentage() {
  var firstNameValue = document.getElementById("first-name-field").value;
  var secondNameValue = document.getElementById("second-name-field").value;
  var percentageBar = document.getElementById("match-percentage");

  if (
    !firstNameValue ||
    firstNameValue == "" ||
    firstNameValue == undefined ||
    !secondNameValue ||
    secondNameValue == "" ||
    secondNameValue == undefined
  ) {
    alert("Please enter a value for both names before calculating.");
    return;
  }

  var matchPercentage = getMatchPercentage(firstNameValue, secondNameValue);

  percentageBar.value = matchPercentage;
  document.getElementById("percentageText").textContent = matchPercentage + "%";
}
