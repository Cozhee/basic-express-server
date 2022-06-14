const validateQuery = (request, response, next) => {
    const { name } = request.query
    if (!name) {
        next('Please enter a name parameter like this: /person?name=Cody')
    } else {
        response.status(200).send({'name': name})
    }
}

module.exports = validateQuery