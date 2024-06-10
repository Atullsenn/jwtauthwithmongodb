const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next)=>{
    const token = req.body.token || req.query.token || req.headers['authorization'];

    if(!token){
        return res.status(403).json({
            success: false,
            message: 'A token required for authentication'
        })
    }


    try{

        const bearer = token.split(' ');

        const bearerToken = bearer[1];
        const decodedData = jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET)

        req.user = decodedData;



    }

    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Invalid token'
        })
    }


    return next();


}


module.exports = verifyToken;