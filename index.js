const express = require('express')
const bodyParser = require('body-parser')

const handlers = require('./lib/handlers')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

const port = process.env.PORT || 3000

app.use('/app', express.static('app'));

app.get('/', (req, res) => {
    res.sendFile('app/index.html' , { root : __dirname});
})

app.get('/api/resetCollections', handlers.resetCollections)

app.post('/api/createUser', handlers.createUser)
app.get('/api/peaks', handlers.getPeaks)
app.get('/api/users', handlers.getUsers)
app.get('/api/peak/:rank', handlers.getPeakByRank)
app.post('/api/updateUser', handlers.updateUserByEmail)
app.delete('/api/user/:email', handlers.deleteUserByEmail)

//custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))