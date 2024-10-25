const RegistProduct = require('../models/RegistProduct')


class ProductController {
    // [GET] /nenYen
    nenYen(req, res) {
        res.render('nenYen');
    }

    // [GET] /nenNhien
    nenNhien(req, res) {
        res.render('nenNhien');
    }

    // [GET] /nenCham
    nenCham(req, res) {
        res.render('nenCham');
    }

    // [POST]: Send data to db
    send(req, res, next) {
        // console.log(req.body); // Kiểm tra xem dữ liệu nhận được đúng chưa
        let currentPage
        switch (req.body.tabIdName) {
            case 'an-yen':
            case 'nhan':
            case 'thien':
                currentPage = 'nen-yen'
                break
            case 'cam-thao':
            case 'ca-phe':
            case 'que-hoi':
                currentPage = 'nen-nhien'
                break

            case 'hy':
            case 'ngot':
            case 'yeu-thuong':
                currentPage = 'nen-cham'
                break

            default:
                break
        }
        const formData = req.body
        // console.log(formData)  // -> Kiểm tra dữ liệu trả về
        const record = new RegistProduct(formData)
        record.save()
        
        .then(() => {
            let linkDirect = `/product/${currentPage}?success=true`
            // console.log('Redirecting to: ', linkDirect);
            res.json({ redirect: linkDirect });
        })
        .catch(next);
    }

    // [GET] /:slug
    slug(req, res) {
        res.render('home');
    }
}

module.exports = new ProductController