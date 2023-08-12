const express = require('express');
const webhookRoute = express.Router();

const { processRequest } = require('../controllers/processRequest.controller');

webhookRoute.post('/', processRequest);

module.exports = webhookRoute;