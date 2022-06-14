const logger = (request, response, next) => {
    console.log(`REQUEST: ${request.method}, ${request.originalUrl}`)
    next()
}

module.exports = logger