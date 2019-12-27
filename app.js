const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')

//import DB and routes
const db = require('./config/DB').MONGO_URI
const userRoutes = require('./routes/userRoutes')

//port
const port = 4000 || process.env.PORT

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())

//use routes
app.use(userRoutes)


