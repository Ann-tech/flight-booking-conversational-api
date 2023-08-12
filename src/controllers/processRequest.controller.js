const { httpGetAllFlights } = require('./flights.controller');

async function processRequest(req, res, next) {
    if (req.body.queryResult?.action == "getAvailableFlights") {
        return httpGetAllFlights(req, res, next)
    }
}

module.exports = {
    processRequest
}