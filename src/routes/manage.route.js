// ĐỂ LẠI SAU 

var express = require('express')
var router = express.Router()
const siteController = require('../app/controllers/SiteController');

router.post('/dang-nhap', siteController.login);

module.exports = router;