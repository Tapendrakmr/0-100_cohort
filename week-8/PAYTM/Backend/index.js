import express from 'express';
import cors from 'cors';
import connectDB from './mongoConnection/db.js';
import {router} from './routes/index.js';

const app=express();
connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/v1",router);
app.listen(3000,()=>{

    console.log("Server is running at port 3000");
})