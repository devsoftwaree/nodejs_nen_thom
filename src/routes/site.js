// Bốc tách route
var express = require('express')

var router = express.Router()

const siteController = require('../app/controllers/SiteController')
const SiteController = require('../app/controllers/SiteController')


router.get('/customer-info', SiteController.showData)
router.get('/', siteController.index)
 
module.exports = router