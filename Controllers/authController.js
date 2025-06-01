

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {v4:uuidv4} = require('uuid');
const User = require('../model/User');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if(user) { return res.status(400).json({error:false, message:"User already exists"})}
        else{
            const securepassword= await bcrypt.hash(password,10);
            user = new User({id:uuidv4(), name:name,email:email,password:securepassword});
            await user.save();
            const token = jwt.sign({id:user.id},process.env.JWT_SECRET,{expireIn: process.env.JWT_EXPIRES_IN})
        }

        await res.status(201).json
    } catch (error) {
        res.status(500).json({error:true, message:"server error", data:error.tostring()})
    }

    res.send({name: name, email: email, password: password})
}