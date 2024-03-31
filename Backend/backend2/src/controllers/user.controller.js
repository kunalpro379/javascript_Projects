import {asyncHandler} from "../utils/asyncHandler.js";

const regUser=asyncHandler(async(req,res)=>{
    res.status(200).json({
        message: "ok",
        data: req.body
    })
});

export {regUser}