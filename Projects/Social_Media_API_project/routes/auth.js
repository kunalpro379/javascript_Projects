const express = require('express');
const router = express.Router();    
const User = require('../models/User.model');
const bcrypt = require('bcryptjs'); 
//REGESTER
router.post("/register", async (req, res) => {
    try {
        // const newUser = new User(
        // req.body
        // );
        const {password,username,email}=req.body;
        const existingUser=await User.findOne({$or: [{username},{email}]});
        if(existingUser){
            res.status(400).json("Username or Email already exists!")
        }
        const salt=await bcrypt.genSalt();
        const hashedPassword=await bcrypt.hashSync(password,salt);
        const newUser=new User({...req.body, password:hashedPassword})
        
        //console.log(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); 
    } catch (err) {
        console.error(err); 
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//LOGIN
router.post(
    "/login",async (req,res)=>{
        try {
            let user;
            if(req.body.email){
                user=await User.findOne({email: req.body.email});
            }
            else{
                user=await User.findOne({username:req.body.username})
            }
            if(!user){
                return res.status(400).json("User_Not_Found!")
            }
            const match=await bcrypt.compare(req.body.password,user.password);
            if(!match){
                return res.status(400).json("Wrong_Credentials!")
            }
            res.status(200).json("Logged_In_Successfully");       
        } 
        catch (error) {
            res.status(500).json("Internal_Server_Error"+error);
        }
    }
);
//LOGOUT
router.get()
//FETCH CURRENT USER


module.exports = router;