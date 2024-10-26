var express = require('express')

var router = express.Router()

const buyCollectsController = require('../app/controllers/BuyCollectsController')

router.post('/send', buyCollectsController.send);
router.get('/', buyCollectsController.index);

module.exports = router;