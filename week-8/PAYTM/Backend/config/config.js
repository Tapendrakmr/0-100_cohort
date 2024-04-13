import dotenv from 'dotenv';
dotenv.config();
const _config={
    JWT:{
        SECRET_KEY:process.env.JWT_SECRET_KEY
    }
}
const config=Object.freeze(_config)
export {config}