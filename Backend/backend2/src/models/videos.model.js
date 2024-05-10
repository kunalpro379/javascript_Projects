import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema({
    videoFile:{
        type:String,//Cloundinary url
        required:true,
    },
    thumbnail:{
        type:String,//Cloundinary
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,//cloundinary
        required:true,
    },
    views:{
        type:Number,
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:false,
    },
    isPublic:{
        type:Boolean,
        default:false,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    

},{
    timestamps:true,
})

//videosSchma.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video", videoSchema)