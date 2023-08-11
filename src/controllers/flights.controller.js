const { Flight } = require('../models/db.connect');

async function httpGetAllFlights(req, res, next) {
    try {
        const flights = await Flight.findAll();
        res.status(200).json({success: true, flights })
    } catch(err) {
        console.log(err);
        next(err);
    }
}

async function httpGetFlightById(req, res, next) {
    try {
        const flight = await Flight.findByPk();
        res.status(200).json({success: true, flight})
    } catch(err) {
        console.log(err);
        next(err);
    }
}

async function httpCreateNewFlight(req, res, next) {
    try {
        const flight = await Flight.create(req.body);
        res.status(201).json({success: true, message: 'flight successfully scheduled'})
    } catch(err) {
        console.log(err);
        next(err);
    }
}


module.exports = {
    httpGetAllFlights,
    httpCreateNewFlight,
}