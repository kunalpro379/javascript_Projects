//const express =require('express')
import express from 'express';  //module js//asynchornous work

const app=express();
app.get('/', (req,res)=> {
    res.send("server is ready");
});
//get a list of 5 jokes with id and content 
const jokes=[ 
    {id:1, title:"joke 1",content: " jjsjsjjskrkiinniweirjhjierii Dfii an kwnKINA  "},
    {id:2, title:"joke 2",content: "WEKFNKSNFDJNJNFJEFJENJFNEJFNJSNFJNJSnjNnFDjf"},
    {id:3, title:"joke 3",content: "knDFkjnflkejNLKJNjNJKWJKF.NDMSN M,S FD.JSFNJESKDFW"},
    {id:4, title:"joke 4",content: "kldnFJndjnfjNFJNJDNJSEIWOREJOEIW;RIWTRWOI"},
    {id:5, title:"joke 5",content: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"},
];
app.get('/jokes',(req,res)=>{
    
    res.send(jokes);

});
const port= process.env.PORT||5000;

app.listen(port,()=>{console.log(`serve at http://localhost:${port}`)});