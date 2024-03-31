//OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT

/*
javascripts and classes 
OOP-programming paradigm based on the concept of "objects", which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods)
In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.
OBjects are instances of classes
collectuons of properties and methods

why oop?
1. code reusability
2. code organization
3. code maintainability
4. code readability
5. code scalability
6. code security
7. code performance

constructor function
prototypes
classes instances and inheritance  --new, this  keyword
abstraction-- detailes hide ex: fetch api
encapsulation-- wrap up data and methods into single unit
polymorphism-- 
inheritance-- 



*/
//global context me this me kuch nahi hai
console.log(this);//window object/ global object

const user={//object literals
    username: "chai",
    email: "kunaldp379@gmail.com",
    logincount: 8,
    signedIn: true,
    getUserDetails: function(){
    return `Username is ${this.username} and email is ${this.email}`;
    console.log(`Got username: ${username}  `);//error
},
getThisVal: function(){
    console.log(this);
}
}
console.log(user.email);
console.log(user.getUserDetails());
console.log(user.getThisVal());
//kaise pata lagao ki current context ki baat use ho rahi hai
 console.log(this);//window object

//constructoe function
// const promise1=new Promise();
// const date=new Date();
// console.log(date);  
function User(username,email,logincount,signedIn){
    this.username//variable  
                    =username;//passing argument
    this.email=email;
    this.logincount=logincount;
    this.signedIn=signedIn;
    // this.getUserDetails=function(){
    //     return `Username is ${this.username} and email is ${this.email} and login count is ${this.logincount} and signed in status is ${this.signedIn}`;
    // }
    this.hello=function(){
        console.log(`Hello ${this.username}`);
    }//this is not a good practice

    return this; //implicitly defined
}
const user1=new User("kunal", '1234@gmail.com',5,true);

const user2=new User("hitesh", 'chai@gmail.com',5,false);
console.log(user2);
console.log(user1);
console.log(user2.constructor);//[function user]
//reference hai khud hi ke bareme



//constructor function hame harbar ek naya  instance deta hai
/*
new key workd --> empty object created 
constructor functn call hota hai new key wprd ke karan
jitne bhi arguments vagira  hai vo pack karke deta hai
this keryword arg vagira likhe hai wo inject hota hai
return this hota hai

*/


const user3= User("kunal", '1234@gmail.com',5,true);

const user4= User("hitesh", 'chai@gmail.com',5,false);
console.log(user3);
//overiding the constructor function
function Car(name,color,price){
    this.name="BMW";
    this.color="black";
    this.price=5000000;
}
const auto=new Car("Audi","white",6000000);
console.log(auto instanceof Car);//true
console.log(auto); //Car {name: "BMW", color: "black", price: 5000000}
console.log(auto.constructor); //function Car(name,color,price){
console.log(auto.__proto__); //Car {}
console.log(auto.__proto__.__proto__);  //Object {}
console.log(auto instanceof Object); //true

