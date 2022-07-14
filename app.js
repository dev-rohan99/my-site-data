// external module import
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const path = require('path');
const xssClean = require('xss-clean');
const jsonwebtoken = require('jsonwebtoken');
const multer = require('multer');
const mongoose = require('mongoose');
const router = require('./src/routes/api');

// security middleware implement
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(xssClean());
app.use(bodyParser.json());


dotenv.config({ path: path.join(__dirname, "./config.env") });


// datebase connection
const mongodbConnectionStr = process.env.CONNECTION_STR || 'mongodb+srv://portfolio:RMportfolioDataRM@cluster0.knhes.mongodb.net/portfolios?retryWrites=true&w=majority';

mongoose.connect(mongodbConnectionStr, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Connected!');
    }
});

// routing implement
app.use('/api', router);

// add react front-end routing
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-side', 'build', 'index.js'))
})


module.exports = app;