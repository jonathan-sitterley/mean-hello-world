const mongoose = require('mongoose')
const logger = require('./loggingService').logger

const Peak = require('../models/peak.js')
const User = require('../models/user.js')

// mongoose.connect(connectionString, { useNewUrlParser: true })
mongoose.connect('mongodb://127.0.0.1:27017/mean-demo');
const db = mongoose.connection
db.on('error', err => {
    console.error('MongoDB error: ' + err.message)
    process.exit(1)
})
db.once('open', () => logger.info('MongoDB connection established'))

module.exports = {
    createUser: async user => new User(user).save(),

    readAllPeaks: async => Peak.find(),
    readAllUsers: async => User.find(),
    readPeakByRank: async rank => Peak.findOne({ rank: rank }),

    updateUserByEmail: async (user) => {
        return await User.updateOne({ email: user.email }, user)
    },

    deleteUserByEmail: async (email) => {
        return await User.deleteOne({ email: email })
    },
    
    loadCollection: (jsonArrayObj, model) => {
        logger.info('Attempting to create database from mongoService.js');
        for (let i = 0; i < jsonArrayObj.length; i++) {
            new model(jsonArrayObj[i]).save()
        }
        mongoose.connection.syncIndexes()
        logger.info('Collection loaded in db.js');
    },
    dropCollection: (model, callback) => {
        logger.info("Dropping Collection")
        model.collection.drop()
        .then(function(){
            callback();
          });
    },

    close: () => mongoose.connection.close(),
}