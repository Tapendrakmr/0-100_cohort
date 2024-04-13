import express from 'express';
import userRoutes from '../module/userModule/userRoutes.js'
const router = express.Router();
router.use('/user',userRoutes)

export {router}