const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({  
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    caption:{
        type:String,
        default:"",
        trim:true
    },
    image:[{
        type:String,
        default:"",
        required:true
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]

},{timestamps:true})

module.exports=mongoose.model('Post',postSchema)