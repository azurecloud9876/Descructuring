function elements(a, b) {
  return [a + b, (a + b) / 2, a - b];
}
let [sum, avg, diff] = elements(20, 10);
console.log(sum, avg, diff); //30 15 10


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

