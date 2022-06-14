const validateQuery = (request, response, next) => {
    const { name } = request.query
    name ? next() : next('Please enter a name parameter like this: /person?name=Cody')
}

module.exports = validateQuery