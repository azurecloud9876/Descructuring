/* 
Async - Async is a way of writing asynchronous JavaScript code

Async functions are declared using the async keyword and can be used with the await keyword to pause the execution of a function
 until the awaited promise is resolved.

EXample Url : https://jsonplaceholder.typicode.com
*/



/* Async functions can also be used to handle tasks such as making network requests. In the example below, 
   we use an async function to make a network request and then await the response. */
   async function getData() {
    const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  }
  
  getData();



  console.log('***************************************************');



 
  function prom(){
    return new Promise(resolve => {
     setTimeout(function getData(){resolve("wait time is over")},2000)
    })
  }
// Pending
//fullfill or resolve
// rejected
  


async function testAsync() {
  let p1 =   prom();
  console.log("First Promise",p1)
  let p2 = await prom();
  console.log("Second Promise",p2)
}

testAsync();
console.log('***************************************************');



