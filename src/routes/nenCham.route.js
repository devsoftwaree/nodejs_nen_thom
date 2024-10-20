// Bốc tách route
var express = require('express')

var router = express.Router()

const ChamController = require('../app/controllers/NenChamController')

// Slug là một parameter bất kì
router.use('/:slug', ChamController.slug)
router.use('/', ChamController.index)
 
module.exports = router