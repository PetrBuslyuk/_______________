var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Product = new Schema({
    title: [Schema.Types.Mixed],
    categories: {type:String, enum:['verified','not verified']}, //TODO change categories values
    userCreator: {type:String},
    dateStart: {type:Date},
    dateEnd: {type:Date},
    priceStart: [Schema.Types.Mixed],
    typeOfProduct: {type:String, enum:['auk','fixed', 'free']},
    description:[Schema.Types.Mixed],
    agreeded: {type:Boolean},
    imgs:  [Schema.Types.Mixed]
});

module.exports = mongoose.model('product', Product, 'product');