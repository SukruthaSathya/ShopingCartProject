var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/productHelpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  
 productHelpers.getAllProducts().then((products)=>{
    console.log(products);
    res.render('user/productlist', { admin: true, products })
});
 });
module.exports = router;
