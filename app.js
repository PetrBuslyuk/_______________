'use strict';
var express = require('express'),
    config  = require('./config'),
    mongoose = require('mongoose'),
    user = require('./routing/UserRoute'),
    product = require('./routing/ProductsRoute'),
    dbURI = 'mongodb://localhost/sales';

//var sUSERNAME = process.env.sUSERNAME || '';
//var sPASSWORD = process.env.sPASSWORD || '';
var sPORT = process.env.sPORT || '3000';
var sHOST = process.env.sHOST || 'localhost';
var sDB = process.env.sDB || 'sales';
var sDBPORT = process.env.sDBPORT || '27017';


var app = express();
app = config(app);

//mongoose.connect('mongodb://'+sUSERNAME+':'+sPASSWORD+'@'+sHOST+':'+sDBPORT+'/'+sDB);
mongoose.connect('mongodb://'+sHOST+':'+sDBPORT+'/'+sDB);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
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

app.route('/user')
    //.get(function(req,res){
    //    user.GetUser(req,res);
    //})
    .post(function(req,res){
        user.AddUser(req,res);
    })
    .patch(function(req,res){
        user.EditUser(req,res);
    })
    .delete(function(req,res){
        user.DeleteUser(req,res);
    });

app.route('/products')
    .post(function(req,res){
        product.AddProduct(req,res);
    });

app.route('/auth')
    .post(function(req,res){
        user.Authorise(req,res);
    });

//TODO logout, subscribe, subscribe to note
app.route('/logout')
    .post(function(req,res){

    });

app.route('/subscribe')
    .post(function(req,res){

    });

app.route('/subscribe/:id')
    .post(function(req,res){

    });

//Listen server
app.listen(sPORT, sHOST, function () {
    console.log('Express server started on port %s at %s', sPORT, sHOST);
});
