const mongoose = require('mongoose')

const Peak = require('../models/peak.js')
const User = require('../models/user.js')

// mongoose.connect(connectionString, { useNewUrlParser: true })
mongoose.connect('mongodb://127.0.0.1:27017/mean-demo');
const db = mongoose.connection
db.on('error', err => {
    console.error('MongoDB error: ' + err.message)
    process.exit(1)
})
db.once('open', () => console.log('MongoDB connection established'))

module.exports = {
    createUser: async user => new User(user).save(),

    readAllPeaks: async => Peak.find(),
    readAllUsers: async => User.find(),
    readPeakByRank: async rank => Peak.findOne({ rank: rank }),

    updateUserByEmail: async user => User.updateOne({ email: user.email }, user),
    
    deleteUserByEmail: async email => User.deleteOne({ email: email }),
    
    loadCollection: (jsonArrayObj, model) => {
        console.log('Create database from db.js');
        for (let i = 0; i < jsonArrayObj.length; i++) {
            new model(jsonArrayObj[i]).save()
        }
        console.log('Collection loaded in db.js');
    },
    dropCollection: (model, callback) => {
        console.log("Dropping Collection")
        model.collection.drop()
        .then(function(){
            callback();
          });
    },

    close: () => mongoose.connection.close(),
}