
function test() {
    //localscope
    var a = 1
    let b = 2
    const c = 3
    console.log(`I'm printing global variable 'a' : ${a}`); //1
    console.log(`I'm printing global variable 'b' : ${b}`); //2
    console.log(`I'm printing global variable 'c' : ${c}`); //3
}
console.log('***************************************************');
test();
console.log(`I'm printing global variable 'a' : ${a}`); 
console.log(`I'm printing global variable 'b' : ${b}`); 
console.log(`I'm printing global variable 'c' : ${c}`); 
console.log('***************************************************');


if (Math.random() > 0.5) {
    var h = 1;
  } else {
    var h = 2;
  }
  console.log(h); //2

  console.log('***************************************************');
  
  if (Math.random() > 0.5) {
    const x = 1;
  } else {
    const x = 2;
  }
  console.log(x); // ReferenceError: x is not defined
  console.log('***************************************************');
/* Output:
PS C:\Learn\Keerthana\Javascript\Javascript-Basics> node .\1-ScopeExamples.js
I'm printing global variable 'a' : 1
I'm printing global variable 'b' : 2
I'm printing global variable 'c' : 3
C:\Learn\Keerthana\Javascript\Javascript-Basics\1-ScopeExamples.js:15
console.log(`I'm printing global variable 'a' : ${a}`); //1
                                                  ^

ReferenceError: a is not defined
    at Object.<anonymous> (C:\Learn\Keerthana\Javascript\Javascript-Basics\1-ScopeExamples.js:15:51)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47 */