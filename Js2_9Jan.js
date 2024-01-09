//    ************** memory in js ***************
// stack=> used in premitive data types, copy change , heap=> used in  non premitive/refernce data types
let myName="kunal"

let updateName=myName
updateName="patil"
console.log(myName)
console.log(updateName)

let userOne={       
email: "user1@gmail.com", upi: "user@dns", password: "user1@123"

}
let userTwo=userOne
userTwo.email="kunaldp69@gmail.com"
userTwo.upi="kunal@bob"
console.log(userOne)
console.log([userOne,userTwo])//same 
//reference data types are stored in heap
//we get reference not copy 