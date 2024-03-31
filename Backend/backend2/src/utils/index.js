//required('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose, { connection } from 'mongoose';
import { DB_NAME } from '../constants';
import connectDB from './db/index.js';

dotenv.config({path: './env'})

connectDB()
.then()
.catch()
/*
//Approach 1:
function connectDB(){};

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        application.on("error", ()=> {})
    }
    catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})()

connection();

*/