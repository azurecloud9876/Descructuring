
function zoo() {
    var z = 100;
}
//console.log("Z",z); //ReferenceError: z is not defined
console.log('***********************************');

{
 var w = 200; 
 let v = 100;
 const u = 300;
}
console.log("w",w);
// console.log("v",v); ReferenceError: v is not defined
// console.log("u",u); ReferenceError: v is not defined


console.log('**************hoisting*********************');
console.log("Y",y);
var y=55;
console.log('***********************************');
var t=20;
var t=30;
console.log('var-t',t)
// let t=40;//SyntaxError: Identifier 't' has already been declared
// console.log('Let-t',t)
let s=50;

console.log('***********************************');
var a = 10;

// Function
function foo() {
    var a = 100;
    console.log("a",a);//100
}
foo();
console.log("a",a); //10

// Block
{
    var a = 1000;
    console.log("a",a); //1000
}
console.log("a",a);//1000

console.log('***********************************');

let b = 10;

// Function
function foo1() {
    let b = 100;
    console.log("b",b);//100
}
foo1();
console.log("b",b); //10

// Block
{
    let b = 1000;
    console.log("b",b); //1000
}
console.log("b",b);//10
console.log('***********************************');

const c = 10;

// Function
function foo2() {
    const c = 100;
    console.log("c",c);//100
}
foo2();
console.log("c",c); //10

// Block
{
    const c = 1000;
    console.log("c",c); //1000
}
console.log("c",c);//10
console.log('***********************************');
