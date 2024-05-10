import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index:true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase:true 
    },
    name: {
        type: String,
        required: true,
        trim: true,

    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
watchHistory: { 
    type: Schema.types.ObjectId,
    ref:"Video"

},
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    // role: {
    //     type: String,
    //     default: 'subscriber'
    // },
    
    // contactNumber: {
    //     type: String
    // },
    // profile: {
    //     type: String,
    //     required: true
    // }
}, {
    timestamps: true
});

export const User = mongoose.model("User", userSchema);