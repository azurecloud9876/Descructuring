let keethPromise = new Promise((resolve,reject) => {
    console.log("keethPromise");
} )

console.log(keethPromise); //Pending

let keethPromise_1 = new Promise((resolve,reject) => {
    console.log("keethPromise is resolved");
    resolve("keeth promise is resolved");
} )

console.log(keethPromise_1); //resolved

/* [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without 
    a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the
     reason "keeth promise is rejected".] {
  code: 'ERR_UNHANDLED_REJECTION'
} */
let keethPromise_2 = new Promise((resolve,reject) => {
    console.log("keethPromise is rejected");
    reject("keeth promise is rejected");
} )
keethPromise_2.catch( () => console.log("Since we rejected promise, we need to implement catch block"))

console.log(keethPromise_2); //reject




const count = true;
let promise = new Promise((resolve, reject) => {
  if (count) {
    resolve("This request is succesful");
  } else {
    reject("This result is unsuccessful");
  }
});

console.log(promise);

promise
  .then(() => {
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
  const count_1 = true;
  let promise_1 = new Promise((resolve) => {
    if (count_1) {
      resolve("This request is succesful with just resolve parameter");
    } else {
      reject("This result is unsuccessful");
    }
  });
  
  console.log(promise_1);