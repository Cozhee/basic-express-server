'use strict'

const supertest = require('supertest')
const server = require('../server')
const request = supertest(server.app)

describe('Server Tests', () => {

    describe('Error handler test', () => {

        test('404 on bad route', async() => {
            const response = await request.get('/foo')
            expect(response.status).toEqual(404)
            expect(response.text).toEqual('Not Found')
        })

        test('404 on bad method', async() => {
            const response = await request.put('/bar')
            expect(response.status).toEqual(404)
            expect(response.text).toEqual('Not Found')
        })
    })

})