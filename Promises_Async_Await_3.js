/* 

https://www.youtube.com/watch?v=wKY4-WMmbZw 

*/

// async keyword make the function to run as a promise
async function basicTest(){
    return 1;
}
console.log(basicTest()); //Promise { 1 } 

//let testAwait = await basicTest() // SyntaxError: await is only valid in async functions and the top level bodies of modules