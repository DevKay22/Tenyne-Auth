const express = require('express');
const router = express.Router(); 

router.get("/api/users", (req, res) => {
    console.log("Doing well");
    return res.status(200).send("Doing well");
});

module.exports = router;
