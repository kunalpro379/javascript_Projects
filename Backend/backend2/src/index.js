//required('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose, { connection } from 'mongoose';
import { DB_NAME } from './constants';
import connectDB from './db/index.js';

dotenv.config({path: './env'})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000, ()=> {
        console.log(`Server is running on port ${process.env.PORT||8000}`)
    })
})
.catch((err)=> {console.error("ERROR: ", err)})

//Approach 1:
//function connectDB(){};

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


//routes import 
import userRouter from "./routes/user.routes.js"
//routes
app.use("api/v1/users", userRouter);

connection();

