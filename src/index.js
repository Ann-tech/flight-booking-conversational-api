const express = require('express');
const app = express();
const helmet = require('helmet');

const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware')
const morganMiddleware = require('./middlewares/morgan.middleware');

const logger = require('./logging/logger');

const authRouter = require('./routes/auth.route');

require('dotenv').config();

// Add the morgan middleware
app.use(morganMiddleware);

const PORT = process.env.PORT || 3000;

//To parse url encoded data
app.use(express.urlencoded( {extended: false} ))

//To parse data passed via body
app.use(express.json());

app.use( helmet() );

//connect to db
const { db } = require('./models/db.connect');

// Signup and login authentication middleware
require("./authentication/auth");

app.use('/api/v1/auth', authRouter);

app.get('/', (req, res, next) => {
    res.json( {success: true, message: 'Welcome to our booking api'});
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        logger.info(`Server is running on PORT ${PORT}`)
    })
}

app.use( errorHandlerMiddleware )

module.exports = app;