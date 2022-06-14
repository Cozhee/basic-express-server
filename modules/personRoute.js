const personRoute = (request, response) => {
    const { name } = request.query
    const  nameObject = {
        name: name
    }
    response.status(200).json(nameObject)
}

module.exports = personRoute