const express = require('express')
const bodyParser = require('body-parser')

const handlers = require('./lib/handlers')
const logger = require('./lib/loggingService.js').logger
const morganMiddleware = require('./lib/loggingService.js').morganMiddleware

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(morganMiddleware)

const port = process.env.PORT || 3000

app.use('/app', express.static('app'));

app.get('/', (req, res) => {
    logger.info('Routing to index');
    res.sendFile('app/index.html' , { root : __dirname});
})

app.get('/api/resetUserCollection', handlers.resetUserCollection)
app.get('/api/resetPeakCollection', handlers.resetPeakCollection)

app.post('/api/createUser', handlers.createUser)
app.get('/api/peaks', handlers.getPeaks)
app.get('/api/users', handlers.getUsers)
app.get('/api/peak/:rank', handlers.getPeakByRank)
app.post('/api/updateUser', handlers.updateUserByEmail)
app.delete('/api/user/:email', handlers.deleteUserByEmail)

app.post('/api/robotics', handlers.postCommand)

//Endpoint to test a server crash
app.get('/crash', (req, res) => {
    res.send('Crashing server!');
    process.exit(1);
  });

//custom 404 page
app.use((req, res) => {
    logger.warn('Page not found. Returning 404.');
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

//custom 500 page
app.use((err, req, res, next) => {
    logger.warn('Server Error.  Returning 500.  Error log: ');
    logger.error(err.message);
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => logger.info(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))