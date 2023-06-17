const csv = require("csvtojson");

module.exports = {

    csvReadFile: (filePath, model, callback) => {
        csv().fromFile(filePath)
        .then(function(jsonArrayObj){
           callback(jsonArrayObj, model);
         });
    },

}