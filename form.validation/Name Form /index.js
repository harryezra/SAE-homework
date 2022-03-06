var formSelector = document.querySelector('form');
formSelector.addEventListener('submit', formValidation);
var inputSelector = document.getElementById('nameInput');
var errorTextSelector = document.getElementById('error');

function formValidation(even) {
  console.log('validating form...');
  
  event.preventDefault();
  var isValidated = true; 
  
  if (inputSelector.value === "") {
     
     errorTextSelector.innerText = "You need to fill in your name";
    isValidated = false; 
  }
  if (inputSelector.value.indexOf(' ') > -1) {
    errorTextSelector.innerText = "You shoudlnt t contain any spaces here";
    isValidated = false;
  }
  if (isValidated === true) {
    formSelector.submit();
  }
}
   


</body>
</html>