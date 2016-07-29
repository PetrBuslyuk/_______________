'use strict';
var express = require('express'),
    use  = require('./app-uses'),
    mongoose = require('mongoose'),
    config = require('./config');

var app = express();
app = use(app);

//mongoose.connect('mongodb://'+sUSERNAME+':'+sPASSWORD+'@'+sHOST+':'+sDBPORT+'/'+sDB);
mongoose.connect('mongodb://'+config.sHOST+':'+config.sDBPORT+'/'+config.sDB);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to mongodb://'+config.sHOST+':'+config.sDBPORT+'/'+config.sDB);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
    console.error('Mongoose default connection error: ' + err);
    process.exit(1);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.error('Mongoose default connection disconnected');
    process.exit(1);
});

require('./routing/user')(app);
require('./routing/products')(app);

app.use('/', express.static('public'));

//Listen server
app.listen(config.sPORT, config.sHOST, function () {
    console.log('Server started http://%s:%s', config.sHOST , config.sPORT);
});
