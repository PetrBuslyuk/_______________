var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var USER = new Schema({
    firstName:      {type:String, required:true, trim:true},
    lastName:       {type:String, required:true, trim:true},
    birthday:       {type:Date},
    email:          {type:String, required:true, trim:true},
    login:          {type:String, required:true, trim:true},
    tel:            {type:String, trim:true},
    password:       {type:String, trim:true},
    token:          {type:String},
    secretQuestion1:{type:String, trim:true},
    secretQuestion2:{type:String, trim:true},
    secretAnswer1:  {type:String},
    secretAnswer2:  {type:String},
    country:        {type:String},
    city:           {type:String},
    address:        {type:String},
    zip:            {type:String},
    vk:             {type:String, trim:true},
    odnoklasniki:   {type:String, trim:true},
    facebook:       {type:String, trim:true},
    twitter:        {type:String, trim:true},
    distinction:    {type:String, enum:['Mr','Ms.','other']},
    sex:            {type:String, enum:['male','female','other']},
    isVerified:     {type:String, enum:['verified','not verified']},
    lang:           {type:String},
    website:        {type:String, required:false, trim:true},
    admin:          {type:Boolean},
    photo:          {type:String, required:false}
});

module.exports = mongoose.model('user', USER, 'user');