const express = require('express')
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')

dotenv.config();

mongoose.connect("mongodb://localhost/blog", {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch(err=> console.log(err))

app.listen('3000', () => {
    console.log('Connected at 3000')
});

