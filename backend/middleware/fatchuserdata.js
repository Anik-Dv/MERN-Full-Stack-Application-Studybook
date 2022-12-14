let JWT = require("jsonwebtoken");

//import json_web_token Secret
const JWT_SECRET = "AnikSecretPassw&rdStudyb@@k"
//creating a function sending to user get a jwt token when user login.
const fatchuserdata = (req, res, next) => {
    //Get the user from the jwt token and add id to req object.
    const token = req.header('Auth-token');
    if(!token) {
        res.status(401).send({error: "Please authentication using a valid token"})
    }
    try {
        //verify the user Authhenticaton Token with JWT_Secret
        const data = JWT.verify(token, JWT_SECRET);
        req.user = data.user
        next();
    } catch (error) {
        res.status(401).send({error: "Please authentication using a valid token"});
    }
}

module.exports = fatchuserdata;

//Create a Middleware feth user data when user retrun Json web token and then decode that catch user information. That is !!