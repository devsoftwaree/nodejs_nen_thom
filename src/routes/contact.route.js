var express = require('express')

var router = express.Router()

const contactController = require('../app/controllers/ContactController')

router.post('/send', contactController.insertDB)
router.get('/', contactController.index)
 
module.exports = router