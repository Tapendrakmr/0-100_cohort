import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        trim:true,
        maxLength:20
    },
    lastName: {
        type:String,
        required:true,
        trim:true,
        maxLength:20
    },
    email: {
       type:String,
       required:true,
       trim:true,
       unique:true,
       match:[
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,],
        maxLength:50 
    },
    password: {
        type:String,
        required:true,
        trim:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const User = mongoose.model("User",userSchema)
export default User;//exporting the User model