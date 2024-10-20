class NenChamController {

    // [GET] /news
    index(req, res) {
        res.render('nenCham');
    }

    // [GET] /:slug
    slug(req, res) {
        res.render('home');
    }
}

module.exports = new NenChamController;