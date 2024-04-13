import express from 'express';
import {getAllUser,signup,signIn,updateProfile,getLoggedInUser} from './userController.js';
import {authMiddleWare} from './userPolicy.js'
const userRouter = express.Router();

//user routes
userRouter.post('/signup',signup)
userRouter.post('/signIn',signIn)
userRouter.put('/updateProfile/:userId',updateProfile)
userRouter.get('/list',authMiddleWare,getAllUser)
userRouter.get('/profile',authMiddleWare,getLoggedInUser)

export default userRouter