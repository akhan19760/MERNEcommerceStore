const router = require("express").Router();
const User = require("../Model/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


router.post("/signup", async(req, res)=>{

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });

    try{
        const savedUser = await newUser.save();
        res.status(200).send(savedUser);
    }catch(err){
        res.status(500).send(err);
    }

})

router.post("/signin", async(req, res)=>{

    try{
        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(401).json("Username or password is incorrect");

        const cryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const userPassword = cryptedPassword.toString(CryptoJS.enc.Utf8);

        if(userPassword !== req.body.password) return res.status(401).json("username or password is incorrect");

        const accessToken = jwt.sign(
            {
                id: user._id, 
                isAdmin: user.isAdmin,
            },
             process.env.JWT_SEC,
             {expiresIn: "2d"}
        );

        const { password, ...other } = user._doc;
        
        res.status(200).json({...other, accessToken});
    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;