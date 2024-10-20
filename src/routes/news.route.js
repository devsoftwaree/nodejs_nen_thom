// Bốc tách router
var express = require('express')

var router = express.Router()

const newsController = require('../app/controllers/NewsController')

// Slug là một parameter bất kì
router.use('/:slug', newsController.show)
router.use('/', newsController.index)
 
module.exports = router