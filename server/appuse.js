var bodyParser = require('body-parser');

module.exports = function(app, mongoose) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

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
};