# LAB - Class 401

## Project: Basic Express Server

### Author: Cody Davis

### Problem Domain
Setting up a basic express server to configure heroku deployment and to create tests for basic routes

### Links and Resources
- [Github](https://github.com/Cozhee/basic-express-server/pulls)
- [Heroku Production Deployment](https://basic-express-server-cody-prod.herokuapp.com/)

### Setup

#### `.env` requirements (where applicable)
- `PORT` - 3001
- `DATABASE_URL` - N/A at this time

#### How to initialize/run your application (where applicable)
`npm install` to get the dependencies
`nodemon` to run the server
Open `http://localhost:3001/` to view the server

#### How to use your library (where applicable)
N/A

#### Features / Routes
- Feature One: Added route
- GET : `/person`

- Feature Two: Added route
- GET: `*`, catch all route for errors

#### Tests
To run tests type `npm test`. Server does not need to be running in another instance
Basic tests that will check if routes are working correctly

#### UML
<img width="400" alt="Screen Shot 2022-06-14 at 3 45 38 PM" src="https://user-images.githubusercontent.com/55909913/173701721-fa9738a5-b0cb-4a78-a22b-f7f447f9e931.png">
