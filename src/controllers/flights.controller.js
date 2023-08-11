const { Flight } = require('../models/db.connect');

async function httpGetAllFlights(req, res, next) {
    try {
        const flight = Flight.findAll();
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