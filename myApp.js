let express = require('express');
let app = express();

// Log something
console.log('Hello Express');

let absolutePath = __dirname + '/views/index.html';

app.get("/", function(req, res) {
    // res.send('Hello Express');
    console.log('Sending back ' + absolutePath);
    // Send the HTML file as response
    res.sendFile(absolutePath);
});




































 module.exports = app;
