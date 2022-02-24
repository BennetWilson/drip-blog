const express = require('express')
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());
// note for commit

mongoose.connect("mongodb://localhost/blog", {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch(err=> console.log(err))

app.use("/api/auth", authRoute);

app.listen('3000', () => {
    console.log('Connected at 3000')
});

