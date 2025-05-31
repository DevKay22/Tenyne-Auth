const dotenv = require("dotenv");
const express = require("express");
const connectdb = require('./utils/db')
const app = express();
dotenv.config();
connectdb();
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.get("/api/users", (req, res) => {
    console.log("Doing well");
    return res.status(200).send("Doing well")
})





module.exports = app;