const express = require("express");
//import express router
const router = express.Router();
//import Schema/Model
const User = require("../models/user.js")
//import Link express validator
const { body, validationResult } = require("express-validator");
//import Link bcrypt password/hash generator
const bcrypt = require('bcrypt');
//Adding Login Authentication JWT (JSON web token)
const jwt = require('jsonwebtoken');
const fatchuserdata = require("../middleware/fatchuserdata")
const app = express();

let JWT_SECRET = "AnikSecretPassw&rdStudyb@@k"

// Routes:1 Create a user, using a router.post endpoint of SignUp this path "/api/auth/createUser".
router.post('/createUser', [
    //creating the user with validte input and report any errors before creating the user.
    body("name", "Please Enter a Valid Name").isLength({min: 3}),
    body("email", "Please Enter a Valid Email_ID").isEmail(),
    body("password", "Your password must be atleast 4 charecter").isLength({min: 4})
],
async (req, res)=>{
    let success = true;
    //check user validation and then retruns 400 bad request for errors.
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success, errors: array() })
    }

    //Create a function check whether the users with the email exists already.
    try{
        let user = await User.findOne({email: req.body.email });
        if(user){
            return res.status(400).json({ success, errors: "sorry a user with this email already exists" });
        }
        //generate the salt.
        const salt = await bcrypt.genSalt(10)
        
        //passed two parameters, Password and Salt, to the bcrypt.hash.
        const secpass = await bcrypt.hash(req.body.password, salt);
        
        //create a new user function.
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass
        });

        const data ={
            user: {
                id: user.id
            }
        };

        const authtoken = jwt.sign(data, JWT_SECRET);
        let success = true;
        res.json({success, authtoken})

        // whan user input a not valid data then catch given the 500 status error.
    } catch(error){
        console.log(error.message); //retrun user a error message to console.
        res.status(500).send("Something Error Occured")
    };
});

// Routes:2 Authenticate a User using: POST "/api/auth/login". No login required

router.post('/login',[
    body("email", "please enter your valid email here!").isEmail(),
    body("password", "password must be atlest 4 charecters").exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req)

    //check user validation and then retruns 400 bad request for errors.
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    //Create a function. check whether the users with the email exists already, then send the bad request.
    const {email, password} = req.body;
    //try and catch function
    try {
        const user = await User.findOne({ email });

        //when client email dosen't match database email then stop! the function here. and given the bad request.
        if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"})
        };
        //client email comparing with we would compare the entered password with the user actual password.
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {
            return res.status(400).json({error: "Please try to login with correct credentials"})
        };

        //user id data
        const data = {
            user: {
                id: user.id
            }
        };

        //given client jsonwebtoken with JWT secret
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken});

    //when user have dosen't data with client Side server given error.
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")};

 }
);

// Routes: 3 User fachdata Meddleware using: POST "/api/auth/userdata".Login required
router.post('/getuser',fatchuserdata, [
        async(req, res)=>{
        //check user validation and then retruns 400 bad request for errors.
        try {
           userId = req.user.id
           const user = await User.findById(userId).select("-password");
           res.send(user);
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error");
        }
    }
]);






module.exports = router;