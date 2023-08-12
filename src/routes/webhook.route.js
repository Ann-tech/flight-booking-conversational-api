const express = require('express');
const webhookRoute = express.Router();

webhookRoute.post('/', (req, res) => {
    console.log(req.body.result);
    console.log(req);
    console.log(res);
    return res.json(result.body);
})

module.exports = webhookRoute;