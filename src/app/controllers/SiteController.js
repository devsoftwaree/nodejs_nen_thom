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
const User = require('../models/User')
const Admin = require('../models/Admin')

class SiteController {

    // [GET] /home
    async index(req, res) {
        res.render('home')
    };

    // [GET] /customer-info
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

    // [GET] /dang-nhap
    renderLogin(req, res) {
        res.render('dangNhap')
    }

    // [POST] /login
    async login(req, res) {
        const clientUserName = req.body.username;
        const clientUserPass = req.body.password;

        try {
            const resultAdmin = await Admin.findOne({ username: clientUserName }).exec();
            if (resultAdmin && resultAdmin.password === clientUserPass) {
                return res.redirect('/customer-info');
            }

            const resultUser = await User.findOne({ username: clientUserName }).exec();
            if (resultUser && resultUser.password === clientUserPass) {
                return res.redirect('/?login=true');
            }

            res.redirect('/dang-nhap?login=false');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }

    // [GET] /dang-nhap
    renderSignUp(req, res) {
        res.render('dangKi')
    }

    // [POST] /dang-ki
    signUp(req, res, next) {
        const newUser = new User(req.body)
        newUser.save()
            .then(() => {
                res.redirect('/dang-ki?signup=true')
            })
            .catch(next => {
                res.redirect('/dang-ki?signup=false')
            });
    }

}

module.exports = new SiteController;