var Product = require('../models/product');

function ProductRouting(app){

    app.route('/products')
        .post(function(req,res){
            AddProduct(req,res);
        });

    const AddProduct = function(req, res){
        var r = req.body;
        console.log('\n Add product', r);
        var newProduct = new Product(r);
        newProduct.save(function(err,product) {
            if (err) {
                console.error(err);
                res.status(400).send(err);
            } else {
                console.log('Product created',product.id);
                res.status(200).send({'id':product.id});
            }
        });
    };
}


module.exports = ProductRouting;