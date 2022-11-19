const express = require('express');
const router = express.Router();

const {
  createProduct,
  getAllProducts,
} = require('../controllers/productController');
const { UploadProductImage } = require('../controllers/uploadsController');

router.route('/').post(createProduct).get(getAllProducts);
router.route('/uploads').post(UploadProductImage);

module.exports = router;
