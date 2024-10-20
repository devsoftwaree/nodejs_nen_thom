// Bốc tách route
var express = require('express')

var router = express.Router()

const ChamController = require('../app/controllers/NenChamController')

// Slug là một parameter bất kì
router.get('/:slug', ChamController.slug)
router.get('/', ChamController.index)
 
module.exports = router