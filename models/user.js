const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: Number,
    lastName: String,
    firstName: String,
    email: String,
    active: Boolean,
})

const User = mongoose.model('User', userSchema)
module.exports = User