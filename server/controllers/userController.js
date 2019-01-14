const uuid= require("uuid");

// Models

const User= require("../models/userModel");

module.exports= {
    create:(req, res)=>{
     const newUser={
     id:Math.random(),
     firstname:req.body.firstname,
     lastname:req.body.lastname,
     othername:req.body.othername,
     email:req.body.email,
     phoneNumber:req.body.phoneNumber,
     username:req.body.username,
     registered:req.body.registered,
     isAdmin:req.body.isAdmin
     };
     User.createNewUser(newUser);
     return res.json(newUser);
    }

}