const { default: mongoose } = require("mongoose");
const {Schema} = require("mongoose");

//todo bbrctp

const userSchema = new Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;