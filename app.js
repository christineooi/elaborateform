const express = require('express');
const app = express();
const port = 3000;

// Allows us to process submitted form data
app.use(express.urlencoded({ extended: true }));

app.post('/', function(req, res){
    var name = req.body.user_name;
    var email = req.body.user_email;
    var cell = req.body.user_cell;
    var homepage = req.body.user_homepage;
    var communicationMethod = req.body.communication_method;
    var bestTime = req.body.best_time;
    var devices = req.body.device;
    var inquiryType = req.body.inquiry_type;
    var plan = req.body.plan;
    var message = req.body.user_message;
    // hidden value
    var timestamp = req.body.timestamp;

    res.send(`
        <h1>Here are your submitted form values:</h1>
        <p><strong>Name: </strong>${name}</p>
        <p><strong>E-Mail: </strong>${email}</p>
        <p><strong>Cell Phone: </strong>${cell}</p>
        <p><strong>Home Page: </strong>${homepage}</p>
        <p><strong>Preferred Communication Method: </strong>${communicationMethod}</p>
        <p><strong>Best Time To Reach You: </strong>${bestTime}</p>
        <p><strong>Devices: </strong>${devices}</p>
        <p><strong>Inquiry Type: </strong>${inquiryType}</p>
        <p><strong>Plan (Disabled field): </strong>${plan}</p>
        <p><strong>Message: </strong>${message}</p>
        <p><strong>Timestamp: </strong>${timestamp}</p>
    `);
});

app.listen(port);