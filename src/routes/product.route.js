// Bốc tách route
var express = require('express')
const multer = require('multer');
const upload = multer(); // Khởi tạo multer

var router = express.Router()

const productController = require('../app/controllers/ProductController')

// Slug là một parameter bất kì
router.get('/nen-yen', productController.nenYen)
router.get('/nen-cham', productController.nenCham)
router.get('/nen-nhien', productController.nenNhien)

router.get('/infoAnYen', productController.infoAnYen)
router.get('/infoNhan', productController.infoNhan)
router.get('/infoThien', productController.infoThien)

router.get('/infoCamThao', productController.infoCamThao)
router.get('/infoCaPhe', productController.infoCaPhe)
router.get('/infoQueHoi', productController.infoQueHoi)

router.get('/infoHy', productController.infoHy)
router.get('/infoYeuThuong', productController.infoYeuThuong)
router.get('/infoNgot', productController.infoNgot)

router.post('/send', upload.none(), productController.send)


// router.get('/:slug', productController.slug)

module.exports = router