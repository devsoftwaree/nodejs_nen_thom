// Bốc tách route
var express = require('express')

var router = express.Router()

const NhienController = require('../app/controllers/NenNhienController')

// Slug là một parameter bất kì
router.get('/:slug', NhienController.slug)
router.get('/', NhienController.index)
 
module.exports = router