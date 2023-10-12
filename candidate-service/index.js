	
const serverless = require('serverless-http')
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const createUser = require("./create")


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


 
app.post('/create', createUser)
 
module.exports.handler = serverless(app)