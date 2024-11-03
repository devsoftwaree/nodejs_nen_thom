const RegistCollect = require('../models/RegistCollect')

class BuyCollectsController {
    // [GET] /news
    index(req, res) {
        res.render('buy-collects');
    }

    cleanAddress(address) {
        // Thay thế các ký tự xuống dòng và các ký tự đặc biệt khác bằng dấu phẩy
        return address.replace(/[\r\n]+/g, ', ').replace(/\s+/g, ' ').trim();
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

module.exports = new BuyCollectsController;
