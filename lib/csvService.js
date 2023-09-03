const csv = require("csvtojson");
const logger = require('./loggingService').logger

module.exports = {

    csvReadFile: async (filePath, model, callback) => {
        logger.info('Request to read CSV File')
        let jsonArrayObj = await csv().fromFile(filePath)
        await callback(jsonArrayObj, model);
    },

}