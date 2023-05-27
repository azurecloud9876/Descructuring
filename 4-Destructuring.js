const person = {
  name: "ganaaaaaaaaaa",
};
const { name, age = 1 } = person;
console.log(name);
console.log(age);


// default value
let arrValue = [10];
let [x = 10, y = 20] = arrValue;

console.log(x);
console.log(y);
