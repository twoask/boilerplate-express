let express = require('express');
let app = express();

// Log something
console.log('Hello Express');

let indexFile = __dirname + '/views/index.html';
let assetPath = __dirname + '/public';

// Define static assets
app.use('/public', express.static(assetPath));

// Define handlers
app.get("/", function(req, res) {
    // res.send('Hello Express');
    console.log('Sending back ' + indexFile);
    // Send the HTML file as response
    res.sendFile(indexFile);
});




































 module.exports = app;
