function testArray)(arg){
  if(Array.isArray(arg) === true){
    return true;
  } else {
    return false;
  }
}

var result = testArray([])
console.log(result);