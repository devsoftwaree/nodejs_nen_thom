class BlogController {

    // [GET] /news
    index(req, res) {
        res.render('blog');
    }

    // [GET] /:slug
    slug(req, res) {
        res.render('home');
    }
}

module.exports = new BlogController;