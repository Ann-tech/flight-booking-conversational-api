const { httpGetAllFlights } = require("./flights.controller")

async function processRequest(req, res) {
    if (req.queryResult.action == "getAvailableFlights") {
        return httpGetAllFlights(req, res, next)
    }
}

module.exports = {
    processRequest
}