// Controller
class NenYenController {

    // [GET] /news
    index(req, res) {
        res.render('nenYen');
    }

    // [GET] /:slug
    slug(req, res) {
        res.render('home');
    }
}

module.exports = new NenYenController;