async function processRequest(req, res, next) {
    if (req.body.queryResult?.action == "getAvailableFlights") {
        return httpGetAllFlights(req, res, next)
    }
}