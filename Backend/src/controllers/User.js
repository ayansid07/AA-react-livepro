const bcrypt = require('bcrypt')
const userModel = require('../models/user');
const providerModel = require('../models/provider');
const generateToken = require('../utils/generateToken');
const uploads = require('../utils/cloudinaryUpload')
const subscriptionModel=require('../models/subscription');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, phoneNumber, address, planType, startDate } = req.body;

        // Check if email, name, password, phoneNumber, address, and planType are provided
        if (!email || !name || !password || !phoneNumber || !address || !planType || !startDate) {
            return res.status(400).json({ message: "All fields including planType and startDate are required" });
        }

        // Check if a file is uploaded for the profile picture
        if (!req.file) {
            return res.status(400).json({ message: "Profile picture is required" });
        }

        const userExists = await userModel.findOne({ email });

        if (userExists)
            return res.status(400).json({ message: "User Already Exists" });

        const isProvider = await providerModel.findOne({ phoneNumber });
        if (isProvider)
            return res.status(400).json({ message: "User Already Exists " });


        // Create a new user instance
        let profilePic = "";
        if (req.file) {
            const location = req.file.buffer;
            const result = await uploads(location);
            profilePic = result.url;
        }

        const user = new userModel({
            name,
            email,
            password,
            phoneNumber,
            address,
            profilePic
        });
        // console.log("user",user)

        // Save the user instance
        await user.save();

        // Save plan-related details to subscription model
        const subscription = new subscriptionModel({
            userId: user._id,
            planType,
            startDate
            // Add other plan-related details if needed
        });
        await subscription.save();
        generateToken(res, 201, user, true);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};


exports.loginUser = async(req,res) =>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user)
            return res.status(404).json({message:"Invalid Email or Password"});
        const passwordMatch = await bcrypt.compare(password,user.password)
        if(!passwordMatch)
            return res.status(400).json({message:"Invalid Email or Password"})
        generateToken(res,200,user,true);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.getUserDetails = async(req,res) =>{
    try {
      if(!req.user)
        return res.status(400).json({message:"Invalid request"})
      const user = await userModel.findOne(req.user._id);
  
      if(!user)
        return res.status(404).json({message:"No user found"});
      return res.status(200).json({user});
    } catch (error) {
      return res.status(500).json({success:false})
    }
}