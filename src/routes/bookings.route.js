const express = require('express');
const BookingRouter = express.Router();

const { 
    httpGetAllBookings, 
    httpGetBasedOnCriteria, 
    httpBookFlight,
    httpCancelBooking
} = require('../controllers/flights.controller');

BookingRouter.get('/', httpGetAllBookings);
BookingRouter.get('/', httpGetBasedOnCriteria);
BookingRouter.put('/', httpBookFlight);
BookingRouter.patch('/:id', httpCancelBooking);


module.exports = BookingRouter;