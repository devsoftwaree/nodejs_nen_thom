var express = require('express')

var router = express.Router()

const contactController = require('../app/controllers/ContactController')

router.use('/', contactController.index)
 
module.exports = router