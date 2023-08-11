const express = require('express');
const FlightRouter = express.Router();

FlightRouter.get('/', httpGetAllFlights);
FlightRouter.get('/:id', httpGetFlightById);
FlightRouter.post('/', httpCreateNewFlight);
FlightRouter.put('/', httpUpdateFlightDetails);
FlightRouter.delete('/', httpDeleteFlight);

module.exports = FlightRouter;