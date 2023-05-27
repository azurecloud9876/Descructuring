// Function declaration/statement, Function expression, anonymous function, closures/Nested function
// A closure is the combination of a function and the lexical environment within which that function was declared.
//scope of variables in function
// The following variables are defined in the global scope
const num1 = 10;
const num2 = 20;
const name = "Chamakh";

// A nested function example / closure - 1
function getScore() {
    //Variables defined inside a function cannot be accessed from anywhere outside the function, 
    //because the variable is defined only in the scope of the function.
    const num1 = 2;
    const num2 = 3;
    const num3 = 50;
    
    //A function defined inside another function can also access all variables defined in its parent function
    function add() {
      const num2 = 30;
      return `${name} scored ${num1 + num2 + num3}`;
    }
  
    return add();
  }

  console.log(getScore()); //Chamakh scored 82

 const output = getScore(); // 
 console.log(output); //Chamakh scored 82

 const output1 = getScore;
 console.log(output1); //[Function: getScore]

 const output2 = getScore; // this is copy of parent function
 console.log(output2()); //Chamakh scored 82

console.log('***************************************************');

//Closure - 2
/* 
 What's different (and interesting) is that the displayName() 
inner function is returned from the outer function before being executed.

At first glance, it might seem unintuitive that this code still works. In some programming languages, 
the local variables within a function exist for 
just the duration of that function's execution. Once makeFunc() finishes executing, you might expect
 that the name variable would no longer be accessible.
 However, because the code still works as expected, this is obviously not the case in JavaScript.

The reason is that functions in JavaScript form closures. A closure is the combination of a function and the 
lexical environment within which that 
function was declared. This environment consists of any local variables that were in-scope at the time the 
closure was created. In this case, 
myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. 
The instance of displayName maintains 
a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is 
invoked, the variable name 
remains available for use, and "Mozilla" is passed to console.log. */
 function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName; // returning inner function
}


const myFunc = makeFunc(); // this is copy of inner function
console.log(myFunc); //[Function: displayName]
myFunc();
//displayName();//ReferenceError: displayName is not defined
makeFunc()(); //Mozilla
console.log('***************************************************');

//closure - 3
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

console.log(makeAdder(5)(20)); //25
  
const add10 = makeAdder(10);
console.log(add10(2)); // 12
console.log('***************************************************');

/* Emulating private methods with closures
Languages such as Java allow you to declare methods as private, meaning that they can be called only by other methods 
in the same class.

JavaScript, prior to classes, didn't have a native way of declaring private methods, but it was possible to emulate 
private methods using closures. Private methods aren't just useful for restricting access to code. They also provide 
a powerful way of managing your global namespace.

The following code illustrates how to use closures to define public functions that can access private functions and 
variables. Note that these closures follow the Module Design Pattern. */



 