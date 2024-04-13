import {verifyToken} from '../../utils/auth.js'
const authMiddleWare=(req,res,next)=>{
    // console.log(req.headers.authorization);
    if(req.headers.authorization){
        const token=req.headers.authorization;
        const decoded=verifyToken(token);
        console.log("decoded",decoded);
        req.body.userId=decoded.userId;
        next();
    }else{
        res.send({
            "status":false,
            "message":"unauthorized user"
        })
    }
}
export {
    authMiddleWare
}