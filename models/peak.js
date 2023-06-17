const mongoose = require('mongoose')

const peakSchema = mongoose.Schema({
    rank: Number,
    name: String,
    range: String,
    elevation: Number,
    latitude: String,
    longitude: String,
    standard_route: String,
    distance: String,
    gain: Number,
    difficulty: String,
    photo: String,
})

const Peak = mongoose.model('Peak', peakSchema)
module.exports = Peak