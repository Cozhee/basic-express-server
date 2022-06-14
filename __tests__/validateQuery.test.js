const supertest = require('supertest')
const server = require('../server')
const request = supertest(server.app)

describe('Validate query', () => {
    describe('Name query', () => {
        test('500 with no name', async() => {
            const response = await request.get('/person')
            expect(response.status).toEqual(500)
        })

        test('200 with name', async() => {
            const response = await request.get('/person?name=Cody')
            expect(response.status).toEqual(200)
        })

        test('Name object response', async() => {
            const response = await request.get('/person?name=Cody')
            const name = response.text
            expect(response.text).toEqual(name)
        })
    })
})