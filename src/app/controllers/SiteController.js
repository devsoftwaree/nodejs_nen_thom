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
    static checkAdminUser = false;
    // [GET] /home
    async index(req, res) {
        res.render('home')
    };

    // [GET] /customer-info
    async showData(req, res, next) {
        if (SiteController.checkAdminUser === true) {
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
        else 
            res.send("Không có quyền truy cập!")
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
                SiteController.checkAdminUser = true
                return res.redirect('/customer-info');
            }
    
            const resultUser = await User.findOne({ username: clientUserName }).exec();
            if (resultUser && resultUser.password === clientUserPass) {
                SiteController.checkAdminUser = false
                return res.redirect('/?login=true');
            }
        }
        catch(next) {
            
        }

        res.redirect('/dang-nhap?login=false');

    }

    // [GET] /dang-ki
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
            .catch(next);
    }

}

module.exports = new SiteController;