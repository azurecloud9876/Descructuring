class Person{
    constructor(name)
    {
        this.fname=name;
        this.occupation="Engineer";
    }
wish(){
    console.log( `Hello ${this.fname}`);

}
}

class Student extends Person
{
     constructor(name){    //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    console.log("Creating student class");
     super(name);
       this.occupation="student"; //overriding property
    }
    //overriding person method
    wish(){
    console.log( `Hello ${this.fname}`);
        console.log( `Hello ` +this.occupation);
    
    }


}
let student1=new Student('Jack');//Hello Jack
student1.wish();//Hello student