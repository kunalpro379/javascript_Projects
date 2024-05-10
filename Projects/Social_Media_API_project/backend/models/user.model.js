const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({  

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true



    },
    password:{
        type:String,
        required:true,

    },
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        default:"",
        trim:true
    },

    profile_picture:{
        type:String,
        default:""
    },
    cover_picture:{
        type:String,
        default:""
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    
    
    }],
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    blockList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],

},{timestamps:true})

module.exports=mongoose.model('User',userSchema)
