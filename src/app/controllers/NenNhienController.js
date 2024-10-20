class NenNhienController {

    // [GET] /news
    index(req, res) {
        res.render('nenNhien');
    }

    // [GET] /:slug
    slug(req, res) {
        res.render('home');
    }
}

module.exports = new NenNhienController;