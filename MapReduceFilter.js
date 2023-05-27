// map is something called as mapping

var numbers = [1, 2, 3, 4, 5];

console.log("Actual array", numbers);

for (num of numbers) {
  //for of - actual data
  console.log(num);
}
for (num in numbers) {
  //for in - index
  console.log(num);
}
console.log("******************************");

numbers.forEach((a) => console.log(a)); //for each

numbers.forEach((a) => a * 2);

let newNumbers = numbers.map((x) => x * 2); //map

console.log("used map function", newNumbers); //used map function [ 2, 4, 6, 8, 10 ]

console.log("******************************");
var names = ["pavan", "keeth", "jeswi", "ganan"];
let data = "";
for (nam of names) {
  data = nam;
  console.log(nam);
}

names.forEach((nam) => {
  console.log(nam);
});

var res = names.forEach((nam) => {
  return nam + "Theegala";
});

console.log(res); // undefined - foreach is void

let results = names.map((a) => {
  return a + "Theegala";
});

console.log(results); // [ 'pavanTheegala', 'keethTheegala', 'jeswiTheegala', 'gananTheegala' ]
