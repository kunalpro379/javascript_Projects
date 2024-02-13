//*****************Promise in javascript**********/
//3 states
/*

*/
//fetch('https://jsonplaceholder.typicode.com/todos/1').then().catch().finally();
const promise1=new Promise(function(resolve,reject){
    //do an async task
    //DB calls cryptography network
    setTimeout(function(){
        console.log('Async task completed...');
        resolve();//resolve .then se coonnect huva
    },5000);
});
promise1.then(function(){
    console.log('Promise Consumed...');
});
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();//resolve .then se coonnect huva
    },3000);
}).then(function(){
    console.log('Promise Consumed 2...');
});
const Promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 3');
        resolve({username: "chai",email: "chai@xample.com"});
    },1000);
}).then(function(user){
    console.log(user);

});
const Promise4=new Promise(function(resolve,reject){
setTimeout(function(){
    let error=false;
    if(!error){
        resolve({username: "chai",email: "kunaldp379@gmail",password: "1234"});
    }
    else{
        reject('ERROR: Something went wrong...');
    }
},2000);    
})
// const username=Promise4.then((user)=>{
//     console.log(user);
//     return user.username;
//     console.log('Promise Consumed 4...');
// }).catch(function(error){
//     console.log(error);
// });
// console.log(username);
Promise4
.then((user)=>{
    console.log(user);
    return user.username;
    console.log('Promise Consumed 4...');
})
.then((username)=>{console.log(username);})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log('The Promise either resolved or rejected...');
});
const promise5=new Promise(function(resolve,reject){


    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: "chai",email: "kunaldp379@gmail",password: "1234"});
        }
        else{
            reject('ERROR: Something went wrong...');
        }
    },2000); 
})
async function consumePromise5(){
    const reponse=await promise5;
    console.log(reponse);
}
consumePromise5();

async function consumePromise5(){
    try{
    const reponse=await promise5;
    console.log(reponse);
}
    catch(error){
        console.log(error);
    }
}
consumePromise5();//error nhi ayegi
async function getAllUsers(){
try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    const data=await response.json();//time lagega convert karneme isliye * await jaruri hai
    console.log(data);
}
catch(error){
    console.log(error);
}
}
getAllUsers();
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);  
})
.catch((error)=> console.log('Error'))