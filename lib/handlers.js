const mongoService = require('./mongoService')
const csvService = require('./csvService')

const Peak = require('../models/peak.js')
const User = require('../models/user.js')

exports.createUser = async (req, res) => {
    let user = req.body
    user.active = true;
    console.log("Handlers request body: " + JSON.stringify(req.body))
    await mongoService.createUser(user)
    res.json({ message: 'Create user success' })
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
    const peak = await mongoService.readPeakByRank(req.params.rank)
    console.log('Peak found is ' + JSON.stringify(peak))
    res.json([peak])
}

exports.updateUserByEmail= async (req, res) => {
    await mongoService.updateUserByEmail(req.body)
    res.json({ message: 'Update user success'})
}

exports.deleteUserByEmail= async (req, res) => {
    await mongoService.deleteUserByEmail(req.params.email)
    res.json({ message: 'Delete user success'})
}

exports.resetCollections = async (req, res) => {
    await mongoService.dropCollection(Peak, loadPeaks);
    await mongoService.dropCollection(User, loadUsers);
    res.json({ message: "Loading collections success" });
}

async function loadPeaks () {
    const message = "Load Peaks from handler.";
    console.log(message);
    var filePath = ('data/14er.csv');
    var model = Peak;
    await csvService.csvReadFile(filePath, model, mongoService.loadCollection);
}

async function loadUsers () {
    const message = "Load Users from handler.";
    console.log(message);
    var filePath = ('data/user.csv');
    var model = User;
    await csvService.csvReadFile(filePath, model, mongoService.loadCollection);
}