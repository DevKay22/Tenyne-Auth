const express = require('express')
const router = express.Router();
const authController = require('../Controllers/authController')

router.get("/register", (req, res) => {
    
    return res.status(200).send("register")
});
router.get("/login", (req, res) => {
   
    return res.status(200).send("login")
})
router.get("/profile", (req, res) => {
  
    return res.status(200).send("profile")
})



module.exports = router;