//for off loop
const Arr=[1,"k",3,false,5]
for(const it of Arr){
    console.log(it)
}

const obj="hlo";
for(const it of obj){
console.log(it) 
}
const map=new Map();
map.set("a",1);
map.set("b",2);
map.set("c",3);
map.set("d",4);
for(const it of map){
    console.log(it)
}
// for(const [value] of map){
//     console.log(it)
// }//onject ke upar nahi laga sakte
for(const [it,value] of map){
    console.log(it)
    console.log(value)
}
const Obj={js: "javascript", py: "python", rb: "ruby"};
// for(const it of Obj){
//     console.log([it]) //error
// }
const programming=["js","python","ruby","java"]
for (const it of programming){
    console.log(it)
}

for (const it of programming){
    console.log(programming[it])//undefined undefined undefined undefined
}
item=["","",""]
index=[0,1,2,3]
programming.forEach((it)=>{
    console.log(it)  //correct output  why>`? 
})
programming.forEach(function (it){
    console.log(programming[it])  //undefined output ? why? because it is index
})
programming.forEach(function (item,index,array){
    console.log(item,index,array) 
   
})
const mycodeing=[{langName: "Js"}, {langFile:".js"}, {Langtype:"Scripting"},]
mycodeing.forEach(function (it){
    console.log(it.langFile,it.langName,it.Langtype);

})
