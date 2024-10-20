const userCollect = require('../models/RegistCollect')

class ContactController {
    // [GET] /news
    index(req, res) {
        res.render('contact');
    }

    
    insertDB(req, res, next) {
        
    }

    
}

module.exports = new ContactController;
