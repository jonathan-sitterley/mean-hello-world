const mongoService = require('./mongoService')
const csvService = require('./csvService')
const restService = require('./restService')
const logger = require('./loggingService.js').logger

const Peak = require('../models/peak.js')
const User = require('../models/user.js')

exports.createUser = async (req, res) => {
    let user = req.body
    user.active = true;
    user.fourteenerArray = [];
    try{
        await mongoService.createUser(user)
        restService.successHandler(res, 'Create user success')
    } catch(error){
        restService.errorHandler(res, 'Create user failed', error)
    }
}

exports.getPeaks = async (req, res) => {
    const peaks = await mongoService.readAllPeaks()
    res.json(peaks)
}

exports.getUsers = async (req, res) => {
    const users = await mongoService.readAllUsers()
    res.json(users)
}

exports.getPeakByRank = async (req, res) => {
    try{
        const peak = await mongoService.readPeakByRank(req.params.rank)
        if(peak == null){
            restService.warningHandler(res, 'Peak not found')
        } else {
            logger.info('Peak found is ' + JSON.stringify(peak))
            res.json([peak])
        }
    } catch(error) {
        restService.errorHandler(res, 'Get peak by rank failed', error)
    }
}

exports.updateUserByEmail= async (req, res) => {
    try{
        const result = await mongoService.updateUserByEmail(req.body)
        if(result.matchedCount == 0){
            restService.warningHandler(res, 'Unable to find record to update', result)
        } else {
            restService.successHandler(res, 'Update user by email success')
        }
    } catch(error){
        restService.errorHandler(res, 'Update user by email failed', error)
    }
}

exports.deleteUserByEmail= async (req, res) => {
    try{
        const result = await mongoService.deleteUserByEmail(req.params.email)
        if(result.deletedCount == 0){
            restService.warningHandler(res, 'Unable to find record to delete', result)
        } else {
            restService.successHandler(res, 'Delete user by email success')
        }
    } catch(error){
        restService.errorHandler(res, 'Delete user by email failed', error)
    }
}

exports.resetUserCollection = async (req, res) => {
    await mongoService.dropCollection(User, loadUsers);
    res.json({ message: "Reset User collection success" });
}

exports.resetPeakCollection = async (req, res) => {
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