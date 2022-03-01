var var allTheNumbers = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7] ];



var myArray = []
  allTheNumbers.forEach(function(arr)){
    myArray.push(arr.join(', '))
  })

  var myString = myArray.join(', ')
  document.write(myString)
