const express = require('express');
const webhookRoute = express.Router();

webhookRoute.post('/', (req, res) => {
    console.log(req);
})

module.exports = webhookRoute;