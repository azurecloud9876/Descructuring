function showMessage(callback, callback1, callback2) {
  console.log("Show message method");
  callback();
  callback1();
  callback2();
}

function copyMessage() {
  console.log("copy Message method");
}

function copyMessage1() {
  console.log("copy Message1 method");
}

function copyMessage2() {
  console.log("copy Message2 method");
}

showMessage(copyMessage, copyMessage1, copyMessage2); // passing another function as an argument to parent function

//1. method order execution

// using call back multiply two numbers and display in console

function multiplyNumbers(a, b, displayBack) {
  let result = a * b;
  displayBack(result);
}

multiplyNumbers(10, 20, displayNew);

function display(output) {
  console.log(output);
}

function displayNew(output) {
  console.log("test new one", output);
}

/* In the real world, callbacks are most often used with asynchronous functions.

A typical example is JavaScript setTimeout(). */

/* Callback Alternatives
With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in paralell.

But, asynchronus programmes are difficult to write and difficult to debug.

Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead. */
zf