// Bốc tách route
var express = require('express')

var router = express.Router()

const blogController = require('../app/controllers/BlogController')

// Slug là một parameter bất kì
router.use('/:slug', blogController.slug)
router.use('/', blogController.index)
 
module.exports = router