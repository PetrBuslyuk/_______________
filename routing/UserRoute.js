var User = require('../models/User');

this.AddUser = function(req, res){
    var r = req.body;
    console.log('\n Add user', r);
    var newUser = new User(r);
    newUser.save(function(err,user) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        } else {
            console.log('User created',user.id);
            res.status(200).send({'id':user.id});
        }
    });
};

this.EditUser = function(req, res){
    var r = req.body;
    console.log('\n Edit user', r);
    if (!r.id){
        console.error('id is empty');
        res.status(400).send({error:'id is empty'});
    }else{
        User.update({_id: r.id}, r, {multi:true}, function(err) {
            if (err) {
                console.error(err);
                res.status(404).send(err);
            } else {
                res.status(200).send();
            }
        });
    }
};

this.DeleteUser = function(req, res){
    var r = req.body;
    console.log('\n\n Delete user', r);
    if (!r.id){
        console.error('id is empty');
        res.status(400).send({error:'id is empty'});
    }else{
        User.remove({_id: r.id}, function(err) {
            if (err) {
                console.log(err);
                res.status(404).send(err);
            } else {
                res.status(200).send();
            }
        });
    }
};

this.Authorise = function(req, res){
    var r = req.body;
    console.log('\n\n Authorise ', r);

    User.find({_id: r.id}, function(err) {
        if (err) {
            console.error(err);
            res.status(404).send(err);
        } else {
            res.status(200).send();
        }
    });
};

module.exports = this;