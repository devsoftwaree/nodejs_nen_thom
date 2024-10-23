// ĐỂ LẠI SAU

const passport = require('../app/config/passport.js');

exports.login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/customer-info',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
};
