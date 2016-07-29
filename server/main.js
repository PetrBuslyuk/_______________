'use strict';
var express = require('express'),
    mongoose = require('mongoose'),
    config = require('./config');

var app = express();

require('./appuse')(app, mongoose);

require('./routing/user')(app);
require('./routing/products')(app);

app.use('/', express.static('public'));

//Listen server
app.listen(config.sPORT, config.sHOST, function () {
    console.log('Server started http://%s:%s', config.sHOST , config.sPORT);
});
