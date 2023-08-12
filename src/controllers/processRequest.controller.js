const Flight = require("../models/db.connect")

async function processRequest(req, res, next) {
    if (req.body.queryResult?.action == "getAvailableFlights") {
        try {
            const flights = await Flight.findAll();
            console.log("hey, I got here")
            return res.status(200).json({success: true, message: "Here is a list of all flights", flights });
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = {
    processRequest
}