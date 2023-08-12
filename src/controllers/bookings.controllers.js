const { Booking } = require('../models/db.connect');
const { Flight } = require('../models/db.connect');
// const formatFlightData = require('../utils/formatFlightData')

async function httpGetAllBookings(req, res, next) {
    try {
        const userId = req.user.id;
        const bookings = await Booking.findAll({
            where: {
                userId
            }
        });
        res.status(200).json({success: true, bookings })
    } catch(err) {
        console.log(err);
        next(err);
    }
}

async function httpGetBookedFlight(req, res, next) {
    try {
        const id = req.params.id;
        const userId = req.user.id;

        const booking = await Booking.findOne({
            where: {
                id,
                userId
            }
        });

        if (!booking) return res.status(404).json( {success: false, message: "Booking with such id doesn't exits"})

        res.status(200).json({success: true, booking})
    } catch(err) {
        console.log(err);
        next(err);
    }
}

async function httpBookFlight(req, res, next) {
    try {
        const userId = req.user.id;
        const flightId = req.body.flightId;

        const flight = await Flight.findByPk(flightId);
        if (!flight) return res.status(404).json({success: false, message: "flight with such id doesn't exist"})

        const totalPrice = flight.ticketPrice * req.body.passengerCount;
        const booking = await Booking.create({...req.body, userId, totalPrice});

        res.status(201).json({success: true, message: 'flight successfully booked, kindly make payment to confirm'});
    } catch(err) {
        console.log(err);
        next(err);
    }
}

async function httpUpdateBookingStatus(req, res, next) {
    try {
        const id = req.params.id;
        const userId = req.user.id;

        const { status } = req.body;

        const booking = await Booking.update({ status }, {
            where: {
                id,
                userId
            }
        });

        res.status(200).json({success: true, message: `booking status successfully updated ${status}`})
    } catch(err) {
        console.log(err);
        next(err);
    }
}


module.exports = {
    httpGetAllBookings,
    httpGetBookedFlight,
    httpBookFlight,
    httpUpdateBookingStatus
}