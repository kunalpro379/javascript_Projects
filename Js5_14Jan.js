//******************Objects */
//2 methods 
//literals              and           constructor
// singleton object->no       //singleton object->yes
//object literals
//object.create()
const MysYm=Symbol("my symbol")
const Jsuser={name: "Kunal",age: 21,location:"ambernath",[MysYm]: "my symbol",  //syntax
email: "kunaldp379@gmail.com", isloggedIn: false, LastloginDays:["Mon","Fri","Sun"], "FullName":"Kunal Patil"}  //by default name--->"name"

myArr=["hy","bye"]
//two ways to access the object
console.log(Jsuser["email"])
console.log(Jsuser.email)
console.log(Jsuser.FullName)
console.log(Jsuser["FullName"])
console.log(Jsuser.MysYm)
console.log(Jsuser[MysYm])
Jsuser.greeting=function(){
    console.log("Hello")
}
console.log(Jsuser.greeting)//undefined because it is not a property
Jsuser.greeting()
console.log(Jsuser.greeting())
Jsuser.greeting=function(){
    console.log(`Hello ${this.name}`)  //``-> string interpolation
}
console.log(Jsuser.greeting)
Jsuser.greeting()



//********************************************* */
const tinderUser=new Object()
const tinderUser1=new Object()
const tinderUser2={}
tinderUser.name="Kunal"
tinderUser.age=21
tinderUser.location="ambernath"
tinderUser1.id="838HJU7J"
console.log(tinderUser)
const regularUser={email: "kunaldp379@gmai.com", FullName:{firstname:"kunal",lastname:"patil",petname:{1:"babdya",2:"sonya",3:"rudru",}}}
console.log(regularUser.FullName.petname[2])
console.log(regularUser.FullName.firstname)
const Obj1={1:"a",2:"b",3:"c"}
const Obj2={4:"d",5:"e",6:"f"}
const Obj3={Obj1,Obj2}
console.log(Obj3)
//const Obj4={...Obj1,...Obj2}  //nooonono
const Obj6=Object.assign(Obj1,Obj2)
const Obj7=Object.assign({},Obj1,Obj2)
//console.log(Obj4)
console.log(Obj6)
console.log(Obj7)

//we will mostly use this->
const Obj8={...Obj1,...Obj2}
console.log(Obj8)
const users=[{id: 1,email:"k88@gmail.com"}]
//console.log(users[1].email); 
console.log(tinderUser1.id)
console.log(tinderUser1["id"])
console.log(Object.values(tinderUser))
console.log(Object.keys(tinderUser))   //returns array of keys
console.log(Object.entries(tinderUser))   //returns array of arrays
console.log(tinderUser.hasOwnProperty("name"))
