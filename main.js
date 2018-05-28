const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {

    const roomID = req.body.message.roomID;
    const userName = req.body.sender.name;
    const isGuest = req.body.sender.isGuest == 1;

    const serverUrl = 'https://app.come.cat/v3/cc/send';
    const apiKey = 'ujRfuXfAcplcfmhvP8aTXRC0Tv63KxHV';

    if(!isGuest)
        return;

    request.post({
        headers: {
            'apikey': apiKey,
        },
        uri: serverUrl,
        body: { 
            roomID: roomID,
            message: 'Echobot response :' + req.body.message.message
        },
        json: true,
        method: 'POST'
    }, (err, res, body) => {

        console.log(body);
        
    });

});

app.listen(3003, () => console.log('Example app listening on port 3003!'));