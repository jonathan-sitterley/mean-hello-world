const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    email: {
        type: String,
        unique: true,
    },
    active: Boolean,
    fourteenerArray: [Number],
})

const User = mongoose.model('User', userSchema)
module.exports = User