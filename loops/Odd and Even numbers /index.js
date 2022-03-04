//Your task is to create a loop that prints out all the odd numbers between 1 and 100...twice! Your solution must be exactly one for loop and one while loop.

// loop for odd numbers
console.log("Odd and even numbers");

console.log("All number looped from 1 to 100 through a for loop");
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// while loop odd numbers
console.log("All number looped from 1 to 100 through a while loop");
var number = 1;
while (number !== 101) {
  if (number % 2 === 1) {
    console.log(number);
  }
  number++;
}

// loop for even numbers
console.log("Odd and even numbers");

console.log("All number looped from 1 to 100 through a for loop");
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// while loop even numbers
console.log("All number looped from 1 to 100 through a while loop");
var number = 1;
while (number !== 101) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}
