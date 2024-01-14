//*********************** */
const score=23332;
console.log(score);
const balance =new Number(28882)
console.log(balance)
console.log(balance.toFixed(9))
console.log(balance.toPrecision(2))
console.log(balance.toString())
const hundreds=1002020200202
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en'))
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//*********** maths  */

console.log(Math.PI)
console.log(Math.E)
console.log(Math.round(2.4))
console.log(Math.abs(-2.288285))
console.log(Math.ceil(2.1))
console.log(Math.floor(2.9))
console.log(Math.pow(2,3))
console.log(Math.sqrt(4))
console.log(Math.min(2,3,4,5,6,7,8,9,0,1))
console.log(Math.max(2,3,4,5,6,7,8,9,0,1))
console.log(Math.random())//between 0 to 1
console.log(Math.random()*10+1)//between 1 to 10
console.log(Math.floor(Math.random()*10))
const min=10
const max=100
console.log(Math.floor(Math.random()*(max-min+1)+min))
//

// ******************* Date and time ********************//
let MyDate=new Date()   //date ka object and uska instance banaya

console.log(MyDate)
console.log(MyDate.toString())
console.log(MyDate.toDateString())  //toDateString() is a method
console.log(MyDate.toTimeString())//toTimeString() is a method
console.log(MyDate.toLocaleString())//toLocaleString() is a method
console.log(MyDate.getFullYear())   //getFullYear() is a method
console.log(MyDate.getMonth())      //getMonth() is a method    
console.log(MyDate.getDate())       //getDate() is a method 
console.log(MyDate.getDay())        //getDay() is a method
console.log(MyDate.getHours())      //getHours() is a method
console.log(MyDate.getMinutes())    //getMinutes() is a method
console.log(MyDate.getSeconds())    //getSeconds() is a method
console.log(MyDate.getMilliseconds())//getMilliseconds() is a method
console.log(MyDate.getTime())        //getTime() is a method
console.log(MyDate.getTimezoneOffset())//getTimezoneOffset() is a method
console.log(MyDate.getUTCDate())      //getUTCDate() is a method
console.log(MyDate.getUTCDay())       //getUTCDay() is a method
console.log(MyDate.getUTCFullYear())  //getUTCFullYear() is a method
console.log(MyDate.getUTCHours())     //getUTCHours() is a method
console.log(MyDate.getUTCMilliseconds())//getUTCMilliseconds() is a methodc
console.log(MyDate.getUTCMinutes())     //getUTCMinutes() is a method
console.log(MyDate.getUTCMonth())       //getUTCMonth() is a method
console.log(MyDate.getUTCSeconds())     //getUTCSeconds() is a method
let CreateDate=new Date(2020,11,12,12,12,12,12)
console.log(CreateDate.toLocaleString)
console.log(CreateDate.toLocaleTimeString())
console.log(CreateDate.toLocaleDateString()) 
let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(CreateDate.getTime())
let newDate=new Date(myTimeStamp)
console.log(newDate)
let newDate1=new Date('2020-12-12')
console.log(newDate1)
let newDate2=new Date()  
console.log(newDate2)  
newDate.toLocaleString('default',{month:'long'})
console.log(newDate.toLocaleString('default',{month:'long'}))