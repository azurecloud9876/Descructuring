let normalFunction = () => {
  console.log("Normal function.");
};

normalFunction(); // Normal fynction expression with no arguments
console.log('***************************************************');
let nFWithArguments = (a) => {
  console.log("Function with single argument:" + a);
};

//nFWithArguments(50);

let nFWithTwoArguments = (x, y) => {
  console.log("Function with two argument:" + x, " : ", +y);
};
//nFWithTwoArguments(10,20);

let simpleCallback = (callBack1, callBack2) => {
  console.log("simpleCallback function.");
  callBack1(2);
  callBack2(3, 4);
};
simpleCallback(nFWithArguments, nFWithTwoArguments);
console.log('***************************************************');
// Async function

let asyncFunction = async () => {
  console.log("Async function.");
};
console.log('***************************************************');
// Async function  - replicating promises

let value = true;
let asyncFunctionExample = async () => {
  console.log("Async - asyncFunctionExample.");
  if (value) {
    return "we got response";//value = true
  } else {
     throw Error("failed for testing puepose") //value = false

};


asyncFunctionExample() .then(() => {
    // Task 1
    console.log("Task 1")
  })
  .then(() => {
    // Task 2
    console.log("Task 2")
  })
  .catch(() => {
    console.log("Failed Task ")
  })
  .finally(() => {
    console.log("Finallyyyyyyyyyyyyy ")
  });
  console.log('***************************************************');

}