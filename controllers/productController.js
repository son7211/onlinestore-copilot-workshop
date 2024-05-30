const db = require('../models');
const Product = db.Product;
const fs = require('fs');

// Function to get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Function to get a single product by ID
const getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByPk(productId);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports = {
    getProducts,
    getProduct
};