function Person()
{
    this.name='priya';
    this.age=25;
    
}
const person1=new Person();
const person2=new Person();
//const person3=new Person();

Person.prototype.gender='Female'; //adding a property to constructor functions
Person.prototype.name='jack';//it object takes object from constructor function
Person.prototype.greet=function()//adding a method to constructor method
{
    console.log(`hello  ${this.name}` ); 
}
console.log(Person.prototype);//prototype value of person
console.log(Person._proto_);//prototype property of person
console.log(person1.name);
console.log(person1.age);

console.log(person2.name);
console.log(person2.age);

console.log(person1.gender);
console.log(person2.gender);

person1.greet();
person2.greet();


Person.prototype = {gender:'male'}; //changing the property of prototype

const person3=new Person();
console.log(person3.gender);
console.log(person1.gender);

//person3.greet();