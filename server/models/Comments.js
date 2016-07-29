var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Comments = new Schema({
    users: [{type: Schema.Types.ObjectId, ref: 'user'}],
    type: {type:String, enum:['post','users',]},
    comments : []
});

module.exports = mongoose.model('comments', Comments, 'comments');