// !!!
// Đây là file index của router: định nghĩa các tuyến đường đi của trang web

// Nạp file .route.js vào
const newsRouter = require('./news.route.js')
const siteRouter = require('./site.js')


function route(app) {
   

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // }); ==> Viết lại sau khi đã bóc tách các thành phần Router, Controller:
    app.use('/news', newsRouter)

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
    // app.get('/', (req, res) => {
    //     res.render('home');
    // }); ==> rewrite
    app.use('/', siteRouter)

}

module.exports = route;