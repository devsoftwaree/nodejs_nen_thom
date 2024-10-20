// Bốc tách route
var express = require('express')

var router = express.Router()

const YenController = require('../app/controllers/NenYenController')

// Slug là một parameter bất kì
router.use('/:slug', YenController.slug)
router.use('/', YenController.index)
 
module.exports = router