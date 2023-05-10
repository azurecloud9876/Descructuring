console.log('Hello Javascript')
console.log("Hello Javascript")
//console.log(Hello, Javascript) //ReferenceError: Hello is not defined at Object.<anonymous>
var a = 10
let b = 9
const c = 8
console.log(a,b,c) // 10 9 8

{
    console.log(a,b,c) // 10 9 8 
}

{
    a = 11
    b = 12
    console.log(a,b,c) // 11 12 8
}

console.log(a,b,c) // 11 12 8

{
    var a = 13
    let b = 14
    console.log(a,b,c) // 13 14 8
}

console.log(a,b,c) // 13 12 8
