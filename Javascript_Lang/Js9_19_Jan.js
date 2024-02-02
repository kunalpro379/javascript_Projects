//********************EXECUTION_EXECUTION_CONTEXTS ****** */


let val1=100;
let val2=108;
function addNum(num1,num2){
    let total =num1+num2 
    return total
}
let result1=addNum(val1+val2)
let result2=addNum(100,233)
/*
code file ==> global execution context
// global execution context
// function execution context
// eval execution context 

[ {} ] => <1> memory creation phase // memeory allocated
<2> execution phase

<a>global environment or excution
//sabse pehle this me allocate kiya jata hai

<b>memory phase
val1-> undefined
val2-> undefined
val3->undefined
sabese pehle sabko undefined

addnum-> fn defination
result1-> undefined
result2->undefined
first cycle done 

cycle 2 => execution phase
val1 <-- 10
val2 <--5    ___________________________________________
addNum  --> [new variable environment + execution thread]  ===============>
             --------------------------------------------            
        {1} memory phase             {2}execution context                 {3}

*/


function one(){console.log("one")}
function two(){console.log("two")}
function three(){console.log("three")}
one()
two()
three()


