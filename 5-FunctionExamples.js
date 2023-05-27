// Function Declaration or Function statement
function showmessage(a) {
  return `Hellooo ${a}`;
}
console.log(showmessage("Pavan"));

// Function Declaration or Function statement - Having same method name considering the last declaration during execution time.
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 5)); //50

function sum(a, b) {
  return a - b;
}
console.log(sum(10, 5)); //50

function sum(c, d) {
  return c * d;
}

console.log(sum(10, 5)); //50





// function expression - such a function can be anonymous - almost near to arrow function declaration

const square = function (x) {
  return x * x;
};
console.log(square(6)); //36

const squa = function sq(x) {
  return x * x;
};
//console.log(sq(6)) // sq is not defined - at Object.<anonymous>
console.log(squa(6));

const myFunc =  function displayName(name1) {
    return name1;
  }
  console.log(myFunc("Pavan"));


//function hoisting\
/* This code runs without any error, despite the cube() function being called before it's declared. 
This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope */

console.log(cube(5)); // 125

function cube(n) {
  return n * n * n;
}


// Arrow function
// Advantage of arrow function - it's not allowing duplicate functions like above, it's throwing error

//let sum = (a,b) => a/b;
//console.log(sum(10,5)) //SyntaxError: Identifier 'sum' has already been declared

let multiple = (a, b) => a * b;
console.log(multiple(10, 5)); // 50

let divisible = (a, b) => a / b;
console.log(divisible(10, 5)); // 2

/* let module = (a,b) => a%b;
console.log(module(10,5)) */

// passing object to function

const car = {
  name: "Tesla",
  model: "Y",
  year: 2020,
};

function displayCarData(car1) {
  return `Car brand is ${car1.name} and the model is '${car1.model}' and the year puchased ${car1.year} `;
}
console.log(displayCarData(car));

const carData = (car1) => {
  return `Car brand is ${car1.name} and the model is '${car1.model}' and the year puchased ${car1.year} `;
}
console.log(carData(car));

const {name,model,year} = car; //destructuring

const carDestructuring = (car1) => {
  return `Car brand is ${name} and the model is '${model}' and the year puchased ${year} `;
}
console.log(carDestructuring(car));






// array

function elements(a, b) {
  return [a + b, (a + b) / 2, a - b];
}
let [sum1, avg, diff] = elements(20, 10);
console.log(sum1, avg, diff); //30 15 10

// object
function getPersonWithBraces(name,age,gender) {
  return {
    name,age,gender
  }
}

console.log(getPersonWithBraces("pavan",35,"male")) //{ name: 'pavan', age: 35, gender: 'male' }

function getPersonWithBracket(name,age,gender) {
  return [name,age,gender]
    
}

console.log(getPersonWithBracket("pavan",35,"male")) //[ 'pavan', 35, 'male' ]

