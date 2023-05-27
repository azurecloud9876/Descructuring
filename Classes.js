function Person() {
 this.name = "sam";
 }
 let person1 = new Person();
 let person2 = new Person();

//adding new property to person1

 person1.age = 20;

 console.log(person1.age);//20
console.log(person2.age);//undefined

//using object literal

let person ={ 
    name : 'sam'
}
console.log(person.name);//sam
 
let student= person;

student.name='john';//changing property of an object
console.log(person.name);// john



