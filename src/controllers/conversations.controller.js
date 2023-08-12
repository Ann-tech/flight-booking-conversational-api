const { runSample } = require('../helpers/chatbot_helper');

async function httpSendMessage(req, res, next) {
    try {
        const { message } = req.body;
        if (!message) res.send(400).json({message: "provide a message"});
        const data = await runSample(process.env.PROJECT_ID, message);
        if (data.action) return;
        return res.status(200).json({message: data.fulfillmentText});
    } catch(err) {
        console.log(err);
        next(err);
    }
}


module.exports = {
    httpSendMessage
}