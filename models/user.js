const mongoose = require('mongoose');

// dfine the food schema
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
});
// define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pantry: [foodSchema], 
}, { timestamps: true });

const User = mongoose.model('User', userSchema)

module.exports = User