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

    // [GET] /:slug
    slug(req, res) {
        res.render('home');
    }
}

module.exports = new ProductController