const logger = require('./loggingService.js').logger

module.exports = {

    errorHandler: (res, message, err={}) => {
        logger.error( {message: message, error: err} )
        res.json( {message: message} )
    },

    warningHandler: (res, message, result={}) => {
        logger.warn( {message: message, result: result} )
        res.json( {message: message} )
    },

    successHandler: (res, message, result={}) => {
        logger.info( {message: message, result: result} )
        res.json( {message: message} )
    },
}