//Global

var a = 1 // Global Execution environment - var will store here
let b = 2 // script memory
const c = 3 // can we reassign to const // script memory
console.log(`I'm printing global variable 'a' : ${a}`); //1
console.log(`I'm printing global variable 'b' : ${b}`); //2
console.log(`I'm printing global variable 'c' : ${c}`); //3
console.log('***************************************************');
//c = 5 //TypeError: Assignment to constant variable.

function test() {
    //localscope
    console.log(`I'm function  variable 'a' : ${a}`); //1
    console.log(`I'm function  variable 'b' : ${b}`); //2
    console.log(`I'm function  variable 'c' : ${c}`); //3
}
console.log('***************************************************');

//Block of code
{
    //c = 5 //TypeError: Assignment to constant variable.
    var a = 7; // Global Execution environment - var will store here
    let b = 6; // Block memory
    const c = 5; //Block memory
    console.log(`I'm printing block variable 'a' : ${a}`); //1
    console.log(`I'm printing block variable 'b' : ${b}`); //2
    console.log(`I'm printing block variable 'c' : ${c}`); //3
}
console.log('***************************************************');
function test1() {
    //localscope
    console.log(`I'm function  variable 'a' : ${a}`); //1
    console.log(`I'm function  variable 'b' : ${b}`); //2
    console.log(`I'm function  variable 'c' : ${c}`); //3
}
console.log('***************************************************');
test();