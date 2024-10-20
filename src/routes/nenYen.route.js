// Bốc tách route
var express = require('express')

var router = express.Router()

const YenController = require('../app/controllers/NenYenController')

// Slug là một parameter bất kì
router.get('/:slug', YenController.slug)
router.get('/', YenController.index)
 
module.exports = router