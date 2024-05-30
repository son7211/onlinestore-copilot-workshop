const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all products
router.get('/products', productController.getProducts);

// Route to get a specific product by id
router.get('/products:id', productController.getProduct);



module.exports = router;