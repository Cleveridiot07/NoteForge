const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async(req,res,next)=>{
    const token = req.header('Authorization').replace('Bearer ','');
    if(!token){
        return res.status(401).json({message: "No token, authorization denied"});
    }
    try {
        // console.log("verifying JWT")
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = await User.findById(decoded.userId).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid',error })
    }
}
module.exports = authMiddleware;