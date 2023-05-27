//Another way of passing function - copy entire function code in the argument
setTimeout(function sendGreeeting() {
  console.log("Passing entire function in the argument - Happy Birthday");
}, 5000);

console.log("***************************************");

// using arrow function
setTimeout(() => {
  console.log("Arrowfunction - Happy Birthday");
}, 5000);

// removed flower brackets as this is single line of code
setTimeout(() => console.log("Arrowfunction - Happy Birthday"), 5000);


console.log("***************************************");
// call back hell

console.log("start!");
setTimeout(function () {
  console.log("ping");
  setTimeout(function () {
    console.log("pong");
    setTimeout(function () {
      console.log("end!");
    }, 1000);
  }, 1000);
}, 1000);
// start!
// after 1 sec: ping
// .. 1 sec later: pong
// .. and: end!
