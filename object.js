const person = {
  name: "Jeswi",
  age: 4,
  gender: "Female",
};
let { name, age, gender } = person;

console.log(name);
console.log(age);
console.log(gender);


/* Functions are First-Class Objects
# As mentioned, functions are objects. 
You can work with functions as if they were objects. 
For example, you can assign functions to variables, to array elements,
 and to other objects. They can also be passed around as arguments to
  other functions or be returned from those functions. The only difference with objects 
  is that functions can be called.
  https://www.dofactory.com/javascript/function-objects
  */

function message() {
  console.log("Greetings Linda!");
}

console.log(typeof message);               // => function
console.log(message instanceof Object);    // => true


function Book(type, author) {
  this.type = type;
  this.author = author;
  this.getDetails = function () {
      return this.type + " written by " + this.author;
  }
}

var book = new Book("Fiction", "Peter King");

console.log(book.getDetails());        // => Fiction written by Peter King