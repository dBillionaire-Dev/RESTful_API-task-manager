import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    })
}

//Register New User
const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(400).json({message: `Email already in use by another user`});
            throw new Error("User already exists");
        }

        //Create user logic
        const newUser = await User.create({ email, name, password });
        res.status(201).json({
            message: `User created with name ${newUser.name}`,
            user: newUser,
            token: generateToken(newUser._id)
        });
    } catch (e) {
        next(e);
        return;
    }
}

//Login existing user
const loginUser = async (req, res, next) => {
    try {
        const { email, name, password } = req.body;
        const user = await User.findOne({ email: email });
        //Validate Email
        if (!user) {
            return res.status(401).json({message: "Invalid Email Provided"});
        }

        const userPassword = await bcrypt.compare(password, user.password);
        //Validate Password
        if (!userPassword) {
            return res.status(401).json({message: "Invalid Password"});
        }

        res.status(200).json({
            token: generateToken(user._id),
            message: `User logged in successfully! Welcome ${user.name}`,
            user: user
        })
    } catch (e) {
        next(e)
    }
}

export { createUser, loginUser };