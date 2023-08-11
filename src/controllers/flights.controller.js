const { Flight } = require('../models/db.connect');

async function httpGetAllFlights(req, res, next) {
    try {
        const flight = await Flight.findAll();
        res.json({success: true, message: 'flight successfully scheduled'})
    } catch(err) {
        console.log(err);
        next(err);
    }
}

async function httpCreateNewFlight(req, res, next) {
    try {
        const flight = await Flight.create(req.body);
        res.json({success: true, message: 'flight successfully scheduled'})
    } catch(err) {
        console.log(err);
        next(err);
    }
}


module.exports = {
    httpGetAllFlights,
    httpCreateNewFlight,
}