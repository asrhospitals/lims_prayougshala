const User=require("../../model/authenticationModel/userModel");
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");
const { generateOtp,sendOtp } = require("../authenticationController/otpController");
const OTP=require("../../model/authenticationModel/otpModel");
const { where } = require("sequelize");



/// Register user

const registration=async(req,res)=>{

    try{
        /// Get User data 
        const {username,password,role}=req.body;
        /// Hashed the appsword
        const hashedPassword =await bcrypt.hash(password,10);
        /// Create New User
        const newUser=User.create({username,password:hashedPassword,role});
        /// Success message
        res.status(201).json({message:'User Registered Successfully'});
    }catch(e){
        res.status(400).json({message:'User Registration Failed'});
    }
}





/// Login User

const login=async(req,res)=>{

    try{

        /// Taking username and password from user request
        const{username,password}=req.body;

        /// Looking for username in database and id
        const user=await User.findOne({where:{username}});
      

        /// If there is no username found request by the User , send an error
        if(!user) return  res.status(404).json({message:'No User found'});

        /// If username match, now comapre the hash password, 
        const isMatch= await bcrypt.compare(password,user.password);

        /// If password not match, return an error message
        if(!isMatch) return res.status(400).json({message:'Invalid credential'});

        /// If User is admin then sent otp to the predefine email
        if(user.role ==='admin'){
            /// Else password is matched , then generateOTP function will create OTP
          const otp = generateOtp();
        

          /// and Save otp in DataBase
          await OTP.create({ userid: user.id, otp }); 
          
          // Send OTP to predefined email
         await sendOtp(process.env.PREDEFINED_EMAIL, otp);
 
         // OTP Confirmation Message
        return res.status(200).send({ message: "OTP sent to email" ,id: user.id ,otp});
      
        }

          
         // For non-admin users, directly generate a JWT token
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

         // Login Success Message
       return  res.status(200).send({ message: "Login successfully" ,token });
      
    }catch(e){
        res.status(400).send({message:'Login Failed'});
    }
}


/// Verify OTP

const verifyOtp = async (req, res) => {
    try {
        const { userid, otp } = req.body;

         // Fetch the user based on userId
         const user = await User.findByPk(userid);
         if (!user) return res.status(404).json({ message: 'User not found' });

        // Check if the OTP exists and matches
        const storedOtp = await OTP.findOne({where:{ otp }});
        if (!storedOtp) return res.status(400).json({ message: 'Invalid or expired OTP' });

        // OTP is valid; delete it after successful verification
        await OTP.destroy({ where: { id: storedOtp.id } });

        // Generate the JWT token with the user's ID and role
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "OTP verified, login successful", token });
    } catch (e) {
        res.status(500).json({ message: 'OTP Verification Failed' });
    }
};

/// Resend OTP
const resendOtp = async (req, res) => {
    try {
        // Get userid from URL parameters
        const { userid } = req.params;

        // Find the user
        const user = await User.findByPk(userid);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate a new OTP
        const otp = generateOtp();

        // Update OTP in the database (delete old, create new)
        await OTP.destroy({ where: { userid: userid } }); // Delete existing OTP
        await OTP.create({ userid: userid, otp });

        // Send OTP to predefined email
        await sendOtp(process.env.PREDEFINED_EMAIL, otp);

        // Success response
        res.status(200).json({ message: 'OTP resent successfully' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Failed to resend OTP' });
    }
};




module.exports={registration,login,verifyOtp,resendOtp}