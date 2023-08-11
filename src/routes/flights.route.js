const express = require('express');
const FlightRouter = express.Router();

FlightRouter.get('/', httpGetAllFlights);
FlightRouter.get('/:id', httpGetFlightById);
FlightRouter.post('/', httpCreateNewFlight);
FlightRouter.put('/:id', httpUpdateFlightDetailsById);
FlightRouter.delete('/', httpDeleteFlight);

module.exports = FlightRouter;