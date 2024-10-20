// !!!
// Đây là file index của router: định nghĩa các tuyến đường đi của trang web

// Nạp file .route.js vào

const contactRouter = require('./contact.route.js');
const siteRouter = require('./site.js');
const yenRouter = require('./nenYen.route');
const chamRouter = require('./nenCham.route');
const nhienRouter = require('./nenNhien.route');
const blogRouter = require('./blog.route.js')

function route(app) {
   

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // }); ==> Viết lại sau khi đã bóc tách các thành phần Router, Controller:
  
    app.use('/contact', contactRouter)

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
    // app.get('/', (req, res) => {
    //     res.render('home');
    // }); ==> rewrite

    app.use('/nen-yen', yenRouter)
    app.use('/nen-cham', chamRouter)
    app.use('/nen-nhien', nhienRouter)
    app.use('/blog', blogRouter)
    
    app.use('/', siteRouter)

}

module.exports = route;