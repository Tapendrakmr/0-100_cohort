import mongoose from 'mongoose';
import {dbConfig} from '../config/db.config.js'

export default function connectDB(){
  const url=dbConfig.db.url
    try {
        mongoose.connect(url, {});
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
      const dbConnection = mongoose.connection;
      dbConnection.once("open", (_) => {
        console.log(`Database connected:`);
      });
     
      dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
      });
      return;
}