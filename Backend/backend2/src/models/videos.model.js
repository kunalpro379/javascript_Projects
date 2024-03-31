import mongoose,{Schema} from "mongoose";

const videoSchema=new Schema({
    videoFile:{},
    thumbnail:{},
    title:{},
    description:{},
    duration:{},
    views:{},
    isPublished:{},
    isPublic:{},
    owner:{},
    

},{
    timestamps:true,
})



export const Video=mongoose.model("Video", videoSchema)