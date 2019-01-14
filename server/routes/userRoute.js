const express= require("express");
const router = express.Router();

//controller

userCtrl = require("../controllers/userController");

// user endpoints
router.post("/",userCtrl.create);

module.exports = router;