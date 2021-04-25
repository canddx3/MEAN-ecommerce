var express = require('express')
var app = express();
var port = process.env.PORT || 8080
var morgan = require('morgan');
var mongoose = require('mongoose');

app.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017/mountainbikes', function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err);
    } else {
        console.log('successful connection to mongodb');
    }
});




app.listen(port, function() {
    console.log('running the server on port ' + port);
});