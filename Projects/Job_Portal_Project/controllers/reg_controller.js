import userModel from "../models/user.model.js";

export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  //validate
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required and greater than 6 character");
  }
  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser) {
    next("Email Already Register Please Login");
  }
  const user = await userModel.create({ name, email, password });
  //token
  const token = user.createJWT();
  res.status(201).send({
    sucess: true,
    message: "User Created Successfully",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};


export const loginController = async (req, res, next) => {
   const {email, password}=req.body;
   if(!email||!password){
    next("Please Provide Email and Password");
  
   }
   const user =await userModel.findOne({email});
   if(!user){
    next("Invalid Email or Password");
   }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
      next("Invalid Email or Password");
    }
    const token=user.createJWT();
    res.send(200).json({
      success:true,
      message: "login successfully",
      user,
      token,
    });
};