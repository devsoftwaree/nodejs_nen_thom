// Bốc tách route
var express = require('express')

var router = express.Router()

const productController = require('../app/controllers/ProductController')

// Slug là một parameter bất kì
router.get('/nen-yen', productController.nenYen)
router.get('/nen-cham', productController.nenCham)
router.get('/nen-nhien', productController.nenNhien)
router.get('/:slug', productController.slug)

module.exports = router