const mongoService = require('./mongoService')
const csvService = require('./csvService')
const logger = require('./loggingService.js').logger

const Peak = require('../models/peak.js')
const User = require('../models/user.js')

exports.createUser = async (req, res) => {
    logger.info('Create user request')
    let user = req.body
    user.active = true;
    user.fourteenerArray = [];
    await mongoService.createUser(user)
    const message = 'Create user success'
    logger.info(message)
    res.json({ message: message })
}

exports.getPeaks = async (req, res) => {
    logger.info('Get peaks request')
    const peaks = await mongoService.readAllPeaks()
    res.json(peaks)
}

exports.getUsers = async (req, res) => {
    logger.info('Get users request')
    const users = await mongoService.readAllUsers()
    res.json(users)
}

exports.getPeakByRank = async (req, res) => {
    logger.info('Get peak by rank request')
    const peak = await mongoService.readPeakByRank(req.params.rank)
    logger.info('Peak found is ' + JSON.stringify(peak))
    res.json([peak])
}

exports.updateUserByEmail= async (req, res) => {
    logger.info('Update user by email request')
    await mongoService.updateUserByEmail(req.body)
    res.json({ message: 'Update user success'})
}

exports.deleteUserByEmail= async (req, res) => {
    logger.info('Delete user by email request')
    await mongoService.deleteUserByEmail(req.params.email)
    res.json({ message: 'Delete user success'})
}

exports.resetUserCollection = async (req, res) => {
    logger.info('Reset user collection request')
    await mongoService.dropCollection(User, loadUsers);
    res.json({ message: "Reset User collection success" });
}

exports.resetPeakCollection = async (req, res) => {
    logger.info('Reset peak collection request')
    await mongoService.dropCollection(Peak, loadPeaks);
    res.json({ message: "Reset Peak collection success" });
}

async function loadPeaks () {
    logger.info('Loading Peaks from handler');
    var filePath = ('data/14er.csv');
    var model = Peak;
    await csvService.csvReadFile(filePath, model, mongoService.loadCollection);
}

async function loadUsers () {
    logger.info('Loading Users from handler');
    var filePath = ('data/user.csv');
    var model = User;
    await csvService.csvReadFile(filePath, model, mongoService.loadCollection);
}