import User from '../../models/userModel.js'
import { getToken } from '../../utils/auth.js'
const getAllUser=async (req,res,next)=>{

    const users=await User.find()
   res.json({
       status:"success",
       message:"user fetched successfully",
       data:users
   })
}
const getLoggedInUser=async (req,res,next)=>{
    const userId=req.body.userId
    const user=await User.find({
        _id:userId 
    })
   res.json({
       status:"success",
       message:"user fetched successfully",
       data:user
   })
}
const signup=async(req,res,next)=>{
    try{
        const {firstName,lastName,email,password}=req.body
        console.log("signup body",req.body)
        const isUserExist =await User.findOne({
            email:email
        })
        if(isUserExist){
            throw Error("user already exist")
        }
        const user =await User.create({
            firstName,
            lastName,
            email,
            password 
        })
       
        res.json({
            status:"success",
            message:"user created successfully",
            data:user,
        })
    }catch(err){
        console.log(err.message)
        return res.json({
            status:"failed",
            message:err.message,
            error:err
         })
    }
}
const signIn=async(req,res,next)=>{
    try{
        const {email,password}=req.body
        const user =await User.findOne({
            email:email,
            password:password
        })
        if(!user){
            throw Error("user not found")
        }
        const token=getToken({userId:user._id})
        res.json({
            status:"success",
           message:"user login successfully",
            data:user,
            token:`Bearer ${token}`
        })
    }catch(err){
        return res.json({
            status:"failed",
            message:err.message,
            error:err
         })
    }
}
const updateProfile=async(req,res,next)=>{
    try{
      const {userId}=req.params
      const {firstName,lastName,email,password}=req.body
      const newUserBody={}
      if(firstName){
          newUserBody.firstName=firstName
      }
      if(lastName){
          newUserBody.lastName=lastName
      }
      if(email){
          newUserBody.email=email
      }
     if(password){
         newUserBody.password=password
     }
     const newUser=await User.findByIdAndUpdate(userId,newUserBody,{new:true})
        console.log('req.body',userId)
        res.json({
            status:"success",
           message:"user updated successfully",
            data:newUser
        })
    }catch(err){
        console.log(err)
    }
}
export{
    getAllUser,
    signup,
    signIn,
    updateProfile,
    getLoggedInUser
}