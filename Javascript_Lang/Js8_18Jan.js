//immediately invoked function expression(IIFE)

//global score se pollutition ke problem hatt jayenge
(function chai(){
    console.log("DB CONNECTED")
})()
//chai()  //error
//(()=>{console.log(`DB CONNECTED TWO`)})  ()  //error

//(chai_aur_code()=>{console.log(`DB CONNECTED TWO`);})  () //error

// (function chai_aur_code(){console.log(`DB CONNECTED TWO`)})  ()  //semicolon error

(function chai_aur_code(){console.log(`DB CONNECTED TWO`)})  ();

(()=>{console.log(`DB CONNECTED TWO`)})  () ;  //named iife
//problem semicolon ki thie 

((name)=>{console.log(`DB CONNECTED TWO`)})  ("kunal") 

