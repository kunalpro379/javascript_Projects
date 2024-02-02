//********************filter maps and reduce in javascript */

const books =[{title: 'book One',genere: 'Fiction', publish: 1928, edition:2003},
{title: 'book One',genere: 'Fiction', publish: 1990, edition:1999},
{title: 'book One',genere: 'Fiction', publish: 1998, edition:1998},
{title: 'book One',genere: 'physics', publish: 1928, edition:2003},
{title: 'book One',genere: 'Science', publish: 1996, edition:1992},
{title: 'book One',genere: 'Fiction', publish: 1928, edition:1990},
{title: 'book One',genere: 'Fiction', publish: 2000, edition:1993},
{title: 'book One',genere: 'history', publish: 1928, edition:1889},
{title: 'book One',genere: 'maths', publish: 2001, edition:2003},
{title: 'book One',genere: 'politics', publish: 2000, edition:2003},
];
  userBooks1=books.filter((bk)=>bk.genere==='Fiction')
 console.log(userBooks1);
 const userBooks2=books.filter((bk)=>bk.publish>=2000)
 console.log(userBooks2);

 userBooks1 = books.filter(bk => bk.edition != 2000 && bk.edition > 1990 && bk.edition < 1998);
 console.log(userBooks1);
 userBooks1=books.filter((bk)=>{bk.publish>=2000})//empty array, return hi nahi kiya kuch
 //scope open kiya hai yahape
 console.log(userBooks1);//
    userBooks1=books.filter((bk)=>{return bk.publish>=1990&& bk.genere==='Fiction'})
    console.log(userBooks1);
///////////////////////////////////////////
const MyNum=[1,2,3,4,5,6,7,8,9,0]
const newnums=MyNum.map((NUM)=>{return NUM+10})
console.log(newnums)//added 10 in each value

const newnums2=MyNum.map((num1)=>num1*10229) .map((num2)=>num2-99).map((num3)=>num3*num3/22).filter((num4)=>num4>60)
//multiple methods can be used at a time --> chaining

const newnums3=MyNum
    .map((num1)=>num1*10229)//result passed to second chain
    .map((num2)=>num2-99)
    .map((num3)=>num3*num3/22)
    .filter((num4)=>num4>60)
//multiple methods can be used at a time --> chaining
console.log(newnums3)
const my=[1,2,3,4,5,6,1,7,8,8,8,6,5,4,2]
const myTot=my.reduce(function(acc,curr){
    console.log(`accumulator: ${acc} and currentVal: ${curr}`);
    return acc+curr},InitStart=1990)
//initially 1990 value accumulator me padi hai 
console.log(myTot)
const MyToTo=my.reduce((acc,curr)=> acc+curr,1990)//method2
console.log(MyToTo)
const ShoppingCart=[
    {itemName:"Js Course",price: 1999},
    {itemName:"Flutter",price: 299},
    {itemName:"Data Science",price: 499},
    {itemName:"Django",price: 2999},
    {itemName:"ML",price: 19999}
]
ShoppingCart.reduce((itm,acc)=>(itm.price+acc),0)
console.log(ShoppingCart)

