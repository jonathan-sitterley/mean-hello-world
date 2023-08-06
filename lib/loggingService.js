const winston = require('winston')
const { combine, timestamp, json } = winston.format

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: 'logs/combined.log',
        }),
        new winston.transports.File({
            filename: 'logs/app-error.log',
            level: 'error',
        }),
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'logs/exception.log' }),
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: 'logs/rejections.log' }),
    ],
});
exports.logger = logger;