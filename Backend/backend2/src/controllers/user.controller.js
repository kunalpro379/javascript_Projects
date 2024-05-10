import {asyncHandler} from "../utils/asyncHandler.js";

const regUser=asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message: "ok",
        data: req.body
    })
// @ algorithm for user registration @
    //get user details from frontend
    //validation-not emoty
    //check user already exists: uername and email
    //check for avatar
    //upload them to cloudenary, avatar 
    //create user object - create entry in db
    //remove password and refresh token field from response 
    //check for user creation
    //resturn res
    // const {fullname,email, username, password}=req.body;
    // console.log(fullname,email, username, password);
});

export {regUser}