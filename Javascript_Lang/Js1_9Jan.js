// js1.js
console.log("Hey kunal i m ready to work with you")
const accountId="kunalpro379"
let accountEmail="kunaldp379@gmail.com"  //why let??
//{}--> scope ka problm hota tha pehle var me
//prefernot to use var because of issue in block scope and function scope
accountNo=123  //possible
var accountPassword="kunal379"
accountCity="Jaipur"
//accountId=233232  //not allowed
console.log(accountId)
accountEmail="kunal.d.patil379@gmail.patil"
accountCity="Mumbai"
console.log(accountEmail)
console.log(accountCity)

let accountState;
console.table([accountEmail,accountState,accountNo,accountCity,accountId,accountPassword])
//tabular form
"use strict"; //treat all js code as newer version
//alert("Hello Kunal") //alert box on browser
//but here we are using nodjs not browser

//console.log("Hello Kunal") console.log(3773+383) //not ok
console.log("Hello Kunal"); console.log(3773+383); //ok  code readablity should be there
let name="Kunal"
let age=21        
//number=> 2 to power 53
//bigint=> 2 to power 53 to 2 to power 64
//string=>""
//boolean=>true/false
//undefined=>no value
//null=>no value : standolone value : null is an object 
//symbol=>unique value
//object 
console.log(typeof("skldnmfsn30j[93"))
console.log(typeof(3222222222222222222222222222222222222222222222222222222222221111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111133))
let m=2222222222*2222222*222222222*11111111111111111*111111111111111*111111*11111*111111111111111*111111111111111*1111111133
console.log(typeof(m))

let isLoggedIn=false
let salary=undefined
let height=null
console.log(name)
let score="100"
//const {score}=req.body
console.log(typeof score)
console.log(typeof(score))
let value=Number(score)
 value=Number("232333mskjjsj")
console.log(["score ", score," valueInNumber ",value])
//"33"=>33
//"2332abc"=>NaN
//true=>1; false=> 0
isLoggedIn="kukupapakupa"
let booleanIsLoggedIn=Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)
//1=>true; 0=>false;
//""=> false
//"kunal"=>true
let somNo=23
let stringNo=String(somNo)
console.log(stringNo)
console.log(typeof(stringNo))
console.log("hello world");// JavaScript source code
// console.log("hello world")

//dynamically typed language 
//we can change container type at runtime
let a = 3892;
//a->identifire
console.log(a);
a = 'harry'
console.log(a);
 a = "daskpoi089u98"
console.log(a);

// //let Vs  var

 a = 'dsjfn3289'
var b = 323
let c = null
var d = undefined
 m = 22332
{
  let c = 827888
  console.log(c)
}
//let c="dsjm38" error
console.log(c)

//let ko use karna chahiye gud practice
//var can be redeclared and updated withing its scope
//lets cant be redeclared and updated 
//const can neither be updated  nor be redeclared 

//const kue;  //nahi chalega
let j= null;
let k = true;
let t = 3122;
let p = "djfm4j33j";
let y = BigInt(213312) + BigInt(1);
let v = undefined;
//let m = Symbol("I am a nice symbol");
console.log(j,k,t,p,y,v,m);
console.log(typeof v)

//object --> non premetive 
const Marks ={
"EM3": 40,
"CNOS":40,
"DLCOA":50,
"DSGT":30,
"DSA":50,
"OOPM":70,
"MCS":50


}
console.log("EM3: ",Marks["EM3"],"     CNOS: ",Marks["CNOS"],"    DLCOA: ",Marks["DLCOA"],"    OOPM: ",Marks["OOPM"],"   MCS: ",Marks["MCS"],"   DSGT: ",Marks["DSGT"],"    OOPM: ",Marks["OOPM"]);
let x="Harry";
let g=56;
console.log(x+g);
console.log(typeof (x+g) );

const abc={
    //abc ye sab objects ke liyhe reference hai
name: "Kunal",
Div: "D6ADA",
RollNo: "50"

}
abc["Interest"]="Coding",abc["Introvert?"]="yes"
console.log("Introvert?");
console.log(abc.name);
const dictionary={
abc:"dsjhklbhsgkhdjbywegyGUDHAGHSDGAHKJ",
xyz:"dsasadf3233fafda",
dfg:"sadsaD23E2R3FADFGFLNVDJNJK"

}
console.log(dictionary.abc, dictionary.xyz, dictionary.dfg);
console.log("operators i n  javascript");
 a=50;
var b=100;

//                ******operations********
//+,-,*,/,%,++,--,**

//arithmatic operator

console.log(" ",a+b," ");
console.log(a-b,"  ");
console.log(a/b," ");
console.log(a%b ,"  ");
console.log(a**b, "  ");//exponential
console.log(a*b, "  ");//multiplication
//assiggnment operator
console.log(a=b);
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);
console.log(a**=b);


//comparison operator


console.log(a<b);//less than
console.log(a>b);//greater than
console.log(a<=b);//less than oir equal to
console.log(a>=b);//greater than or equal to
console.log(a!=b);//not equal
console.log(a==b);//equal to
console.log(a===b);//equal value and type
console.log(a!==b);//not equal value or not equal type
//console.log(a?b);//ternery operator

//////////////////////////////////////////////////////////
console.log(a=b);
console.log(a|b);
console.log(a.b);
console.log(a&b, "  ");
console.log(a|b);
console.log(a++);
console.log(++b);
console.log(b--);
console.log(a--);
//console.log(a$b);
console.log(a^b);
console.log(!a);
console.log(a>>b);
//////////////////////////////////////////////////////////


console.log(a>>b, "  " );//right shift operator
console.log(a<<b, "  ");//left shift operator

//logical operator
console.log(a||b, "  ");
console.log(a&&b, "  ");
console.log(a!=b);

// foo=prompt("hey, tell me something");
console.log(typeof foo);


let ab=10
let negval=-a
console.log(negval)
let str2='kfvkfkfk'
let str3='kkkkkfkdkek'
let str1=str2+str3
console.log(str1)
console.log(str1.length)
// console.log("1"+2+"3"+21) errror
console.log(2+21+"12112")   //ok
console.log(+true)
console.log(-true)
//console.log(true+)
//console.log(true-)
console.log(+" ")
let num1, num2, num3

num1=num2=num3=3223*6367
console.log(num1,num2,num3)
let GameCounter=100
GameCounter++
console.log(GameCounter)
++GameCounter
console.log(GameCounter)
 //  ************homework************
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment read this
//https://tc39.es/ecma262/multipage/abstract-operations.html  read this
console.log(230>212>2);//false
console.log("230">212>true);// false
////comparison in same data types only
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)  //true__why?? value conversion problem 
//reason is that an equality cheak == and comparisons > < >= <= work diffferently
//comparisons convert null to a number treating it as 0
//thats why (3) null >= 0 is ture and (1) null>0 is false
//=== cheak for strict equality cheak for datatype aslo
console.log(undefined>0)//false
console.log(undefined==0)//false
console.log(undefined>=0)
console.log(null==undefined)//true
console.log("122"===122)//true

console.log("*******************************************************")
//premitive data types or non refernce data types
//7 types  --->>>  1) strings 2)numbers 3)boolean 4)undefined 5)null 6)symbol 7)bigint
//non premitive data types or reference types--->> 1)objects 2) array 3) functions

const so=1222
const sol="1222hmmm"
const soli=Symbol('123')
const log=null
console.log(sol===soli)//false
const bigInt=99999999999999999999999999999999999999n;
console.log(typeof(bigInt))
const heros=["Shaktiman", "flash","spiderman",]
let MyObj={
    name:"Kunal",
    age:21,
    canFly:false,
}
console.log(MyObj)
const myFun=    function(){
    console.log("this is my function")
}
myFun()
console.log(typeof(myFun))
console.log(typeof(null))//object
console.log(typeof([null,log,sol])) ///object