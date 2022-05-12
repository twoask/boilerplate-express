let express = require('express');
let app = express();

// Log something
console.log('Hello Express');

app.get("/", function(req, res) {
    res.send('Hello Express');
});




































 module.exports = app;
