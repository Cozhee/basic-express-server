'use strict'

const notFoundHandler = require('./error-handlers/404')
const errorHandler = require('./error-handlers/500')
const personRoute = require('./modules/personRoute')
const validateQuery = require('./middleware/validateQuery')
const logger = require('./middleware/logger')

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

app.use(logger)

app.get('/person', validateQuery, personRoute)

app.use('*', notFoundHandler)
app.use(errorHandler)

function start() {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
}

module.exports = {app, start}