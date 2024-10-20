// Bốc tách route
var express = require('express')

var router = express.Router()

const siteController = require('../app/controllers/SiteController')

// Slug là một parameter bất kì
router.use('/search', siteController.search)
router.use('/', siteController.index)
 
module.exports = router