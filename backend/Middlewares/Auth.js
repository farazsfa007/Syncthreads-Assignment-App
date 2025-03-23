import jwt from 'jsonwebtoken'

const ensureAuthenticated = (req,res,next) => {
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(400)
            .json({message:"Unouthorized, JWT Token is require"})
    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decoded
        next();
    }catch(err){
        return res.status(400)
            .json({message:"Unauthorized, JWT Token Wrong or Expired"})
    }
}

export default ensureAuthenticated