// Bốc tách route
var express = require('express')

var router = express.Router()

const NhienController = require('../app/controllers/NenNhienController')

// Slug là một parameter bất kì
router.use('/:slug', NhienController.slug)
router.use('/', NhienController.index)
 
module.exports = router