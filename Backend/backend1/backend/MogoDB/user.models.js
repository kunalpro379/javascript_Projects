import mongoose from 'mongoose';
const username = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3, 
        lowercase: true,


    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        minlength: 3
    },
    nickname: {
        type: String,
        required: false,
        unique: false,
        trim: true,
        minlength: 3
    
    },
}, {
    timestamps: true,
});

export const User=mongoose.model('User',username)