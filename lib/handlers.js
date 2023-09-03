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
    restService.returnHandler(res, 'Get peaks success', {}, peaks)
}

exports.getUsers = async (req, res) => {
    logger.info('Attempting to get users')
    try{
        const users = await mongoService.readAllUsers()
        restService.returnHandler(res, 'Get users success', users, users)
    } catch (error){
        restService.errorHandler(res, 'Get users failed', error)
    }    
}

exports.getPeakByRank = async (req, res) => {
    try{
        const peak = await mongoService.readPeakByRank(req.params.rank)
        if(peak == null){
            restService.warningHandler(res, 'Peak not found')
        } else {
            logger.info('Peak found is ' + JSON.stringify(peak))
            restService.returnHandler(res, 'Peak found by rank', {}, [peak])
        }
    } catch(error) {
        restService.errorHandler(res, 'Get peak by rank failed', error)
    }
}

exports.updateUserByEmail= async (req, res) => {
    try{
        const result = await mongoService.updateUserByEmail(req.body)
        if(result.matchedCount == 0){
            restService.warningHandler(res, 'Unable to find user to update', result)
        } else {
            restService.successHandler(res, 'Update user by email success', result)
        }
    } catch(error){
        restService.errorHandler(res, 'Update user by email failed', error)
    }
}

exports.deleteUserByEmail= async (req, res) => {
    try{
        const result = await mongoService.deleteUserByEmail(req.params.email)
        if(result.deletedCount == 0){
            restService.warningHandler(res, 'Unable to find user to delete', result)
        } else {
            restService.successHandler(res, 'Delete user by email success', result)
        }
    } catch(error){
        restService.errorHandler(res, 'Delete user by email failed', error)
    }
}

exports.resetUserCollection = async (req, res) => {
    try{
        await mongoService.dropCollection(User, loadUsers);
        restService.successHandler(res, 'Reset user collection success')
    } catch(error){
        restService.errorHandler(res, 'Reset user collection failed', error)
    }
}

exports.resetPeakCollection = async (req, res) => {
    try{
        await mongoService.dropCollection(Peak, loadPeaks);
        restService.successHandler(res, 'Reset peak collection success')
    } catch(error){
        restService.errorHandler(res, 'Reset peak collection failed', error)
    }
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