import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type: Number,
    required:true,},
    

}, {timestamps:true});