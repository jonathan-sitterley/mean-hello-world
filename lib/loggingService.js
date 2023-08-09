const winston = require('winston')
const morgan = require('morgan');
require('winston-daily-rotate-file');

const { combine, timestamp, json } = winston.format;

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
        new winston.transports.DailyRotateFile({
            filename: 'logs/combined-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '14d',
        }),
        new winston.transports.DailyRotateFile({
            filename: 'logs/app-error-%DATE%.log',
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '14d',
        }),
    ],
    exceptionHandlers: [
        new winston.transports.DailyRotateFile({
            filename: 'logs/exception-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '14d',
        }),
    ],
    rejectionHandlers: [
        new winston.transports.DailyRotateFile({
            filename: 'logs/rejections-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '14d',
        }),
    ],
});
exports.logger = logger;

const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream: {
            write: (message) => logger.http(message.trim()),
        },
    }
);  
exports.morganMiddleware = morganMiddleware;