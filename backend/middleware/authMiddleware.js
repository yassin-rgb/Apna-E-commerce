const jwt = require("jsonwebtoken")


module.exports.authmiddleware= async(req,res,next)=>{
    try{
        const token = req.headers.token
        if(!token)
            res.status(401).json.authmiddleware({msg:"your are not authorized!"})
        else{
            const verifyToken= jwt.verify(token, process.env.SECRET_KEY)
            req.userId = verifyToken.id
            next()
        }
    }
    catch(error){
        res.status(500).json({msg:"something went wrong / userMiddleware", error:error.message})
    }
}