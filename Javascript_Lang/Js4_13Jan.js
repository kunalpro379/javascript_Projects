// ************************Data Structures *************************//
const MyArr=[0,9,true,3,454.37383,"838388hhhsji",11," ",1,1,,3,334,4,4,4];
console.log(MyArr);
console.log(MyArr.length);
console.log(MyArr[0]);
//bydefault shallow copies are made
const MyHeroes=["Ironman","Captain America","Thor","Hulk","Black Widow","Hawkeye"];
const MyArray=new Array(1,2,3,4,5,6,7,8,9,0);

const numbers =[22,32,1,1,111111]
console.log(MyArray)
console.log(numbers)
MyArray.push(533)
MyArray.push(533)
console.log(MyArray)
MyArray.pop()
console.log(MyArray)

MyArray.pop(533)
console.log(MyArray)
MyArray.unshift(2)

console.log(MyArray)
MyArray.shift()
console.log(MyArray)
MyArray.shift()
console.log(MyArray)

console.log(MyArray.includes(3))
console.log(MyArray.indexOf(-1))
const newArrr=MyArray.join()
console.log(MyArray)
console.log(newArrr)

//slice ,splice
console.log("A",MyArray)
const MyA=MyArray.slice(1,3)
console.log("B",MyArray)
console.log(MyA)

const MyB2=MyArray.splice(1,3)

console.log(MyB2)

const Marvel=["thor,ironman,captain america,hulk,black widow,hawkeye"]
const DC =["superman","flash","batman"]
Marvel.push(DC)
console.log(Marvel)
// console.log(Marvel)
// console.log(Marvel[8][1])
const allHerroes=Marvel.concat(DC)
console.log(allHerroes)
console.log(allHerroes[6])
console.log(...Marvel,...DC)
const MyArray1=[1,2,3,[4,5,6],7,[8,9,[0,3,4],59,9],10]
const usableArray=[...MyArray1]
const usableArraya=MyArray1.flat(Infinity)
console.log(MyArray1)
console.log(usableArraya)
//console.log(MyArray.isArray(usableArraya))
console.log(Array.isArray("kunal"))
console.log(Array.from("kunal"))
console.log(Array.from("kunal").reverse())
console.log(Array.from("kunal").sort())
console.log(Array.from("kunal").sort().reverse())
console.log(Array.from("kunal").sort().reverse().join())
console.log(Array.from("kunal").sort().reverse().join(""))
//interesting 
console.log(Array.from({name: "kunal",age: 21}))
let score1=122
let score2=221
let score3=443
let score4=443
let score5=299
console.log(Array.of(score1,score2,score3,score4,score5));