const RegistCollect = require('../models/RegistCollect')

class ContactController {
    // [GET] /news
    index(req, res) {
        res.render('contact');
    }

    // [POST]: Send data to db
    send(req, res, next) {
        const formData = req.body

        const record = new RegistCollect(formData)
        record.save()
        .then(() => {
            res.redirect('/contact')
        })
        .catch(next);
    }
}

module.exports = new ContactController;
