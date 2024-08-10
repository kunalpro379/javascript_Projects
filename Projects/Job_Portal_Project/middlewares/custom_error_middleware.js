//error middleware
const errroMiddleware=(err, req,res,next)=>{
    console.log(err.stack);
    const defaultErrors={
        statusCode: 500,
        //message:"something Went Wrong",
        message: err.message,
    };
if(err.name==="ValidationError"){
    defaultErrors.statusCode=400;
    defaultErrors.message=Object.values(err.errors).map((item)=>item.message).join(",");
}

// res.status(500).send({
//     success:false, 
//     message:"something went wrong", 
//     err,
// });
//duplicate error

if (err.code && err.code===11000){
    defaultErrors.statusCode=400;
    defaultErrors.message=`${Object.keys(err.keyValue)}field has to be unique`;
}
res.status(defaultErrors.statusCode).json({message:defaultErrors.message});
};
export default errroMiddleware;