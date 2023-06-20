const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    active: Boolean,
    fourteenerArray: [Number],
})

const User = mongoose.model('User', userSchema)
module.exports = User