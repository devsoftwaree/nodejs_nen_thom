const RegistCollect = require('../models/RegistCollect')

class buyCollectsController {
    // [GET] /news
    index(req, res) {
        res.render('buy-collects');
    }

    // [POST]: Send data to db
    send(req, res, next) {
        const formData = req.body

        const record = new RegistCollect(formData)
        record.save()
        .then(() => {
            res.redirect('/buy-collects?success=true')
        })
        .catch(next);
    }
}

module.exports = new buyCollectsController;
