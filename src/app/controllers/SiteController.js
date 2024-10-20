const RegistCollectModel = require('../models/RegistCollect')
const RegistProduct = require('../models/RegistProduct')

class SiteController {

    // [GET] /home
    async index(req, res) {

        // NOTE: EXAMPLE
        // try {
        //     const instance = new RegistCollectModel()
        //     instance.name = 'Thiên'
        //     instance.address = 'HCM'
        //     await instance.save()
        //     res.json(instance);
        //     // res.render('home'); // Bỏ comment nếu bạn muốn render template thay vì trả về JSON
        // } catch (err) {
        //     res.status(400).json({ error: 'ERROR!!!' });
        // }
    };

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;