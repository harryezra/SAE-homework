var fruit = ["Banana", "Orange", "Mango", "Apple", "Watermelon"];
console.log(fruit);

fruit.unshift("Kiwi", "Pear");
console.log(fruit);

fruit.pop();
console.log(fruit);

fruit.push("Cherry", "Blueberries");
console.log(fruit);

fruit.splice(4, 2, "Strawberries", "Pineapple");
console.log(fruit);

for (var i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
