const logger = require('./loggingService.js').logger

module.exports = {

    errorHandler: (res, message, err) => {
        logger.error( {message: message, error: err} )
        res.status(500).json( {message: message} )
    },

    warningHandler: (res, message, result={}) => {
        logger.warn( {message: message, result: result} )
        res.status(404).json( {message: message} )
    },

    returnHandler: (res, message, result={}, data={}) => {
        logger.info( {message: message, result: result} )
        res.status(200).json(data)
    },

    successHandler: (res, message, result={}, data={}) => {
        logger.info( {message: message, result: result} )
        res.status(200).json( {message: message} )
    },

}