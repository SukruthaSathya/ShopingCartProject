var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/productHelpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    console.log(products);
    res.render('admin/productlist', { admin: true, products })

  })
});
router.get('/addProduct', function (req, res) {
  res.render('admin/addProduct')
})
router.post('/addProduct', (req, res) => {


  productHelpers.addProduct(req.body, (id) => {
    let image = req.files.Image
    console.log(id);
    image.mv('./public/product-images/' + id + '.jpg', (err, done) => {
      if (!err) {
        res.render("admin/addProduct")
      }
      else {
        console.log(err);
      }
    })
  })
})

module.exports = router;
