var express = require('express')

var router = express.Router()

const contactController = require('../app/controllers/buyCollectsController')

router.post('/send', contactController.send)
router.get('/', contactController.index)

module.exports = router