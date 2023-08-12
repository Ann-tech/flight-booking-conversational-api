const express = require('express');
const webhookRoute = express.Router();

webhookRoute.post('/', (req, res) => {
    console.log(req.body);
    return res.json(req.body);
})

module.exports = webhookRoute;