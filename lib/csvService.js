const csv = require("csvtojson");

module.exports = {

    csvReadFile: (filePath, model, callback) => {
        console.log('Request to read CSV File')
        csv().fromFile(filePath)
        .then(function(jsonArrayObj){
           callback(jsonArrayObj, model);
         });
    },

}