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


const name ="Kunal patil  ."
const spermcount=9000
console.log(name+spermcount+"million");
console.log(`Hello my name is ${name} and my sperm count is ${spermcount}million `);
console.log()
const low=new String('KUnal  patil .    ');
console.log(low)
console.log(low.toUpperCase())
console.log(low.toLowerCase())
console.log(low.indexOf('n'))
console.log(low.lastIndexOf('n'))
console.log(low.charAt(3))
console.log(low.endsWith('l'))
console.log(low.includes('n'))
console.log(low.substring(0,3))
console.log(low.slice(0,3))
console.log(low.split(''))
console.log(low.split(','))
console.log(low.replace('KUnal','Kunal'))
console.log(low.trim())
console.log(low.trimLeft())
console.log(low.trimRight())
console.log(low.length)
console.log(low.repeat(2))
console.log(low.concat('hello'))
console.log(low.concat('hello','world'))
console.log(low.concat('hello','world','kunal'))
console.log(low.concat('hello','world','kunal','patil'))
console.log(low.concat('hello','world','kunal','patil','.'))    
console.log(low.concat('hello','world','kunal','patil','.',spermcount))
console.log(low.substring(-2,5))
//console.log(low.substring(-7,5))
//error
console.log(low.slice(2,-5))
const newString ="   Kunal          "
console.log(newString)
console.log(newString.trimRight())
console.log(newString.trimLeft())
console.log(newString.trim())
const url="https://www.google.com"
console.log(url.startsWith('https'))
console.log(url.replace('https','http'))
console.log(url.includes("google"))
console.log(url.split('.'))

