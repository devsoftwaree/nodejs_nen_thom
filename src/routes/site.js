// Bốc tách route
var express = require('express')

var router = express.Router()

const siteController = require('../app/controllers/SiteController')


router.get('/thong-tin-khach-hang', siteController.showData)
router.get('/dang-nhap', siteController.renderLogin)
router.get('/dang-ki', siteController.renderSignUp)
router.post('/lien-he', siteController.contact)
router.post('/user-login', siteController.login)
router.post('/user-signup', siteController.signUp)
router.get('/', siteController.index)
 
module.exports = router