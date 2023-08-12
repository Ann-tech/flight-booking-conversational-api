const { httpGetAllFlights } = require('./flights.controller');

async function processRequest(req, res, next) {
    console.log("hey")
    if (req.body.queryResult?.action == "getAvailableFlights") {
        console.log("hello")
        return httpGetAllFlights(req, res, next);
    }
}

module.exports = {
    processRequest
}