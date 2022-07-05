# LAB - Class 401

## Project: Basic Express Server

### Author: Cody Davis

### Problem Domain
Setting up a basic express server to configure heroku deployment and to create tests for basic routes

### Links and Resources
- [Github](https://github.com/Cozhee/server-deployment-practice/pulls)
- [AWS CLI deployment](http://basicexpressserver.eba-gbmaecgh.us-west-2.elasticbeanstalk.com/person?name=cody)
- [AWS GUI deployment](http://beanstalkiselastic-env.eba-jmrepq37.us-west-2.elasticbeanstalk.com/person?name=Jonald)

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
- GET : `/`

- Feature Two: Added route
- GET: `/home`

#### Tests
To run tests type `npm test`. Server does not need to be running in another instance
Basic tests that will check if routes are working correctly

#### UML
![Screen Shot 2022-06-13 at 4 49 54 PM](https://user-images.githubusercontent.com/55909913/173465689-06d6edfb-264f-428f-a06b-968e7aeac577.png)
