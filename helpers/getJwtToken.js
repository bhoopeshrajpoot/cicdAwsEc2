let jwt = require("jsonwebtoken");


let getjwtToken = (userId)=>{
    return jwt.sign({userId:userId}, process.env.JWT_SECRET, {expiresIn: "1 day"});
}

module.exports = getjwtToken;