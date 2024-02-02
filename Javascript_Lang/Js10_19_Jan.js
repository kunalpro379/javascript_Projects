// ***************** control flow *****************
/*

if(true){
while(true); //infinite loop
}

*/
const isUserLoggedIn=true;
if(isUserLoggedIn){
    console.log('user logged in');
}
// ===  --> checks value and type
// ==   --> checks value
// =    --> assignment operator

if(2=="2"){console.log('executed');}
 if(2!="2"){console.log('executed');}//not executed 
 if(2==="2"){console.log('executed');}//not executed why? because it checks value and type
const score =200

if(score>100){
    var power="flutter"
    console.log(`executed ${power}`);
}
console.log(power);// no scope
  //no error
  /*
if(score>100){
    const power="flutter"
    console.log(`executed ${power}`);
}
//console.log(power);// error atcha hai , ana chahiye 
*/
if(score>100){
    let power="flutter"
    console.log(`executed ${power}`);
}
console.log(power);//no error no scope
const balance =1000
if (balance>200) console.log('balance is greater than 200'),console.log(balance) 
//bad practice dont do this
const userLoggedIn=true
const debitCard=true
const oneRupeeNote=true
const loggedFromGoogle=true
const loggedFromFacebook=false
if (userLoggedIn&&debitCard&&3==1){
    console.log('user logged in');
}

const month =1
switch(month){
    case 1:
        console.log('jan');
        break;  
    case 2:
        console.log('feb');
        break;
    case 3:
        console.log('march');
        break;
    default:
        console.log('not a valid month');
        break;
}

switch(month){
    case 1:
        console.log('jan');
         
    case 2:
        console.log('feb');
        
    case 3:
        console.log('march');
        break;
    default:
        console.log('not a valid month');
        break;
}
const userEmail="kunaldp379@gmail.com"
if(userEmail)
console.log('got user email');
else
console.log('dont have user email');

user={}
if(user)
console.log('got user email');
else
console.log('dont have user email');
user=""
if(user)
console.log('got user email');
else
console.log('dont have user email');
user=[]
if(user)
console.log('got user email');
else
console.log('dont have user email');

//falsy values
//  ( false , 0 , -0 , BigInt 0n , empty string , null , undefined ,NaN )
// others all are truthly vals ex:- "0" , 'false' , " " ,{} , [], function(){} , empty funs , etc
//best way
if(userEmail.length===0){console.log(" not okk")}
else 
console.log("okk")
const emptyObj={}
if(emptyObj.length===0){console.log("array is empty")}//nothin
if(Object.keys(emptyObj).length===0){console.log("NOt OK")}

console.log( false==0  ) 
console.log( true==1  ) 
console.log( "false"==false  ) 
console.log(   ) 
console.log(   ) 
console.log(   ) 
//NUllish coalescing ooperator (??): null defined
let val1;
val1=4??20
val2=null??200
val3=undefined?? 15
val4=null??undefined??10??89??"hello"
val5=null??"true"??undefined??89??"hello"??99
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)
//ternery operator
//condition?true:false;
iceTeaPrice =100
iceTeaPrice<=90?console.log("Ok"):console.log("more")


//********************88loops*****************