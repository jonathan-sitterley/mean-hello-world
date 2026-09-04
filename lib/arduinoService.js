const logger = require('./loggingService.js').logger
const { SerialPort } = require('serialport')

// Create a port
const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
  })

module.exports = {

    postCommand: async (req, res) => {
        logger.info('Robotics postCommand service')
        let command = req.body
        let armed = 0
        if(command.armed == true){
            armed = '1'
        } else {
            armed = '0'
        }
        port.write(armed)
        port.write('\n')  //Signal to tell arduino command is complete
        return command
    },

}