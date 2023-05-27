function sendGreeeting() {
  console.log("Happy Birthday");
}

sendGreeeting(); // synchronous response

//setTimeout(sendGreeeting,5000);// Asynchronous response - Call back function - as we passed 'sendGreeeting' function as an argument to 'setTimeout'

// send wishes after 4 secs to your friend and ask him to call back when he's free.
console.log("***************************************");

function greet(name,callme)
{
    console.log("Happy Birthday" +name);
    callme();
}
function callMeBack()
{
    console.log("call me back when you are free");
}

setTimeout(greet,4000,'rose',callMeBack);

console.log("***************************************");


setTimeout(
  (name, callme,stillWaiting,time) => {
    console.log("Happy Birthday " + name);
    callme();
    stillWaiting(time);
  },// Parent Function
  4000, // timer
  "Rose", // name of friend
  () => {
    console.log("call me back when you are free");
  },// F2
  (time) => {
    console.log("call me back am waiting...."+time);
  },//F3
  10.00
);

console.log("***************************************");
setTimeout(
    (name, callme,stillWaiting,time,testarg) => {
      console.log("Happy Birthday " + name);
      callme(testarg);
      stillWaiting(time);
    },// Parent Function
    4000, // timer
    "Rose", // name of friend
    (arg) => {
      console.log("call me back when you are free"+arg);
    },// F2
    (time) => {
      console.log("call me back am waiting...."+time);
    },//F3
    10.00, "Test Final arg"
  );
