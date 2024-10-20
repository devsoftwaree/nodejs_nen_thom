class ContactController {
    // [GET] /news
    index(req, res) {
        res.render('contact');
    }
}

module.exports = new ContactController;
