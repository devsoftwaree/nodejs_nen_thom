// INSERT DATA / GET DATA
// try {
//     const record1 = new RegistCollect()
//     record1.name = 'Lâm Triệu Thiên'
//     record1.phone = '0987654321'
//     record1.email = 't@gmail.com'
//     record1.productSelected = 'Nến thơm thượng hạng'
//     record1.productQuantity = 5
    
//     await record1.save()

//     res.json(record1);
// } catch (err) {
//     res.status(400).json({ error: 'ERROR!!!' });
// }

const mongoose = require('mongoose')
const RegistCollect = require('../models/RegistCollect')
const RegistProduct = require('../models/RegistProduct')




class SiteController {

    // [GET] /home
    async index(req, res) {
        res.render('home')
    };

    async showData(req, res, next) {
        try {
            const [RegistCollectHandled, RegistProductHandled] = await Promise.all([
                RegistCollect.find({}).then(RegistCollect => {
                    return RegistCollect.map(item => item.toObject());
                }),
                RegistProduct.find({}).then(RegistProduct => {
                    return RegistProduct.map(item => item.toObject());
                })
            ]);
    
            res.render('customer-info', { RegistCollectHandled, RegistProductHandled });
        } catch (err) {
            next(err);
        }
    }
    
    
}

module.exports = new SiteController;