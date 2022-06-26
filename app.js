const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// middleware
app.use(bodyParser.json())


// import routes
const testRoutes = require('./routes/test')

// routes 
app.use('/test', testRoutes)

// connect to db 
mongoose.connect(process.env.DB_CONNECTION)
let db = mongoose.connection
    db.on('connected', function () {
        console.log('Connected to MongoDB.');
    });

    db.on('error', function (err) {
        console.error.bind(console, 'Connection to MongoDB error!.');
    });

    db.on('close', function () {
        console.log('Connection to MongoDB closed.');
    });

// listen port
app.listen(process.env.PORT, () => {
    console.log(`This server running in ${process.env.PORT}`);
})