const express = require('express');
const app = express();
const helmet = require('helmet');
const passport = require('passport');

const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware')
const morganMiddleware = require('./middlewares/morgan.middleware');

const logger = require('./logging/logger');

const authRouter = require('./routes/auth.route');
const FlightRouter = require('./routes/flights.route');
const BookingRouter = require('./routes/bookings.route');

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

/**
* on this route dialogflow send the webhook request
* For the dialogflow we need POST Route.
* */
app.post('/webhook', (req, res) => {
    // get agent from request
    let agent = new WebhookClient({request: req, response: res})
    // create intentMap for handle intent
    let intentMap = new Map();
    // add intent map 2nd parameter pass function
    intentMap.set('webhook-demo',handleWebHookIntent)
    // now agent is handle request and pass intent map
    agent.handleRequest(intentMap)
})
function handleWebHookIntent(agent){
    agent.add("Hello I am Webhook demo How are you...")
}


// Signup and login authentication middleware
require("./authentication/auth");

//auth router
app.use('/api/v1/auth', authRouter);

//flights router
app.use('/api/v1/flights', passport.authenticate('jwt', { session: false }), FlightRouter);

//bookings router
app.use('/api/v1/bookings', passport.authenticate('jwt', { session: false }), BookingRouter);

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