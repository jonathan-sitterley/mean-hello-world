const mongoose = require('mongoose')
const logger = require('./loggingService').logger

const Peak = require('../models/peak.js')
const User = require('../models/user.js')

const host = process.env.DB_HOST
const port = process.env.DB_PORT

// mongoose.connect(connectionString, { useNewUrlParser: true })
mongoose.connect(`mongodb://${host}:${port}/mean-demo`);
const db = mongoose.connection
db.on('error', err => {
    console.error('MongoDB error: ' + err.message)
    process.exit(1)
})
db.once('open', () => logger.info(`MongoDB connection established on ${host} at ${port}`))

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
    
    loadCollection: async (jsonArrayObj, model) => {
        logger.info('Attempting to create database from mongoService.js');
        for (let i = 0; i < jsonArrayObj.length; i++) {
            new model(jsonArrayObj[i]).save()
        }
        await mongoose.connection.syncIndexes()
    },
    dropCollection: async (model, callback) => {
        logger.info("Dropping Collection")
        model.collection.drop()
        await callback();
    },

    close: () => mongoose.connection.close(),
}