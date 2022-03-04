var cars = ["Renault", "Peugeot", "Mazda", "Mercedes", "Yugo", "Honda"];

// console.log(cars)

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
  document.getElementById("cars").innerHTML += "<br>" + cars[i];
}
