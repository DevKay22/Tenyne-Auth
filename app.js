const dotenv = require("dotenv");
const express = require("express");
const connectdb = require('./utils/db');
const app = express();

dotenv.config();
connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/base'));
app.use('/api/auth', require('./routes/auth')); 

module.exports = app;
