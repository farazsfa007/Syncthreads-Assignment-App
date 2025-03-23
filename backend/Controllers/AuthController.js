import UserModel from "../Models/User.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const signup = async (req,res) => {
    try{
        const {name, email, password} = req.body
        const user = await UserModel.findOne({email})
        if (user) {
            return res.status(400)
            .json({message:'user is already exists',success:false})
        }
        const userModel = new UserModel({name,email,password});
        userModel.password = await bcrypt.hash(password,10)
        await userModel.save();
        res.status(200)
            .json({
                message:'Signup SuccessFully',
                success:true
            })
    }catch(err){
        res.status(500)
            .json({
                message:'Internal server error',
                success:false
            })
    }
}

const login = async (req,res) => {
    try{
        const { email, password} = req.body
        const user = await UserModel.findOne({email})
        if (!user) {
            return res.status(400)
            .json({message:'Auth Failed Email or Password Is Wrong !!!',success:false})
        }
        const isPassEqual = await bcrypt.compare(password,user.password)
        if(isPassEqual){
            return res.status(400)
            .json({message:'Auth Failed Email or Password Is Wrong !!!',success:false})
        }

        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            { expiresIn:'24h' }
        )

        res.status(200)
            .json({
                message:'Login Success',
                success:true,
                jwtToken,
                email,
                name: user.name
            })

    }catch(err){
        res.status(500)
            .json({
                message:'Internal server error',
                success:false
            })
    }
}

export {
    signup, login
}