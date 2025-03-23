import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchma = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const UserModel = mongoose.model('users',UserSchma)

export default UserModel