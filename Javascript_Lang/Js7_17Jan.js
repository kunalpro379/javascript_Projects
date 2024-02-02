function sayMyName(){
    console.log('Hello, my name is kunal');
}
function addNos(num1,num2){
    console.log(num1+num2);
}
sayMyName();
const result=addNos(2,3); //undefined returned by result
addNos(4,true);
addNos(4,"kunal");  
console.log(result);

function addNos(num1,num2){
let result=num1+num2;
return result;
}
function loginUser(username){
    return `${username}just logged in`;
}
console.log(loginUser('kunal'));
console.log(loginUser(''));
console.log(loginUser());

function loginUser(username){
   if(username===undefined){ //!username
        console.log('please provide username')
        return;
}
    else{
        return `${username}just logged in`;
}
}
console.log(loginUser('kunal'));
console.log(loginUser(''));
console.log(loginUser());

function calculateCartPrice(num1){
    return num1;

}
console.log(calculateCartPrice(1000));

function calculateCartPrice(...num1){
    //...rest operator
    return num1;

}
console.log(calculateCartPrice(1000,228,2722,2727272,1881));
console.log(calculateCartPrice("kdkkskskks",true,undefined,null,NaN));

function calculateCartPrice(var1,var2,...num1){
    //...rest operator
    return 'num1=> '+num1+" var1 and var1 =>"+`${var1} ${var2}`;
    return "var1 and var1 "+`${var1} + ${var2}`;


}
console.log(calculateCartPrice(1000,228,2722,2727272,1881));





//global and scopes variables

if (true){
    let m =100
const n=200
var p =3440
console.log(m,n,p);
}
let a =100
const b=200
var c =3440
console.log(a,b,c);
//console.log(m,n,p); error
for(let i=0;i<Array.length;i++){
    console.log(i);
}



//console.log(i); //error
function one(){const username="kunal"
function two(){
    const website ="utube"
    console.log(username);
}
//console.log(website);  //error
two()
}
one()

if(true){
    const username="kunal"
    if(username==="kunal"){
        const website="utube "
        console.log(username+website)
    }
    //console.log(website) //error
}
//console.log(username)



//*************interesting *************** */
add_one(100)       //no error here
console.log(add_one(6))  //no error here
function add_one(num){
    return num+1
}
//add_one(5)
console.log(add_one(6))


//console.log(addTwo(100))  //error
//console.log(addTwo(100))  //error
const addTwo=function(num){return num+3}
console.log(addTwo(100))



//********************arrow function ************ */
//this keyword current context ko batata hai
const user={
username: "kunal",
price: 9999,
welcomeMessge:function(){
    console.log(`${this.username},welcome to website`);
    console.log(this) 
}

}

console.log(user.welcomeMessge)
user.welcomeMessge()
user.username="kunal patil"  
user.welcomeMessge()   //current context ki username ki value print huiiiii
//this keyword current context ko batata hai
console.log(this)  //brouser me jo global object hai wo window object hai aur yahape node me global object hai wo global object hai
//window object
function chai1(){
    console.log(this)
}
chai1()
//this me kuch toh rakhahai, ham access kar sakte hai


// function chai(){
//     let username="kunal"
//     console.log(this.username)
    
// }
// chai2()  //error

const chai3 = function(){
    let username="kunal"
    console.log(this.username)
    
}
chai3()   //undefined

const chai4 = ()=>{
    let username="kunal"
    console.log(this.username)
}
chai4()  //undefined

const chai5 = ()=>{
    let username="kunal"
    console.log(this)
}
chai5()  //undefined

const addThree=(num1,num2)=>{
    return num1+num2
}
console.log(addThree(2,3))