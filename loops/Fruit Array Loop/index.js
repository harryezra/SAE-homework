// You have to create an array that will hold 5 different kinds of fruit. After each step, output to the console

var fruits = ["apple", "banana", "orange", "berries", "strawberry"];
console.log(fruits);

// Add two more types of fruit to the beginning of the array.
fruits.push("kiwi", "grapes");

var fruits = [
  "kiwi",
  "grapes",
  "apple",
  "banana",
  "orange",
  "berries",
  "strawberry",
];
// Delete last element from the array.

fruits.pop();
var fruits = ["kiwi", "grapes", "apple", "banana", "orange", "berries"];

// Add two more to the end of the array

fruits.push("clementine", "strawberry");

var fruits = [
  "kiwi",
  "grapes",
  "apple",
  "banana",
  "orange",
  "berries",
  "clementine",
  "strawberry",
];

// Now you have array with 8 elements - delete element 3 and 4, and replace them with other 2 elements

fruits.splice(3, 4, "lemon", "cherry");

var fruits = [
  "kiwi",
  "grapes",
  "lemon",
  "cherry",
  "orange",
  "berries",
  "clementine",
  "strawberry",
];

// Create a FOR loop that will output all elements of this array, one by one in the console

var fruits =
  ("kiwi",
  "grapes",
  "lemon",
  "cherry",
  "orange",
  "berries",
  "clementine",
  "strawberry");

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
