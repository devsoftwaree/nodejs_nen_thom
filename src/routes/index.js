// !!!
// Đây là file index của router: định nghĩa các tuyến đường đi của trang web

// Nạp file .route.js vào

const buyCollectsRouter = require('./buyCollects.route.js');
const siteRouter = require('./site.js');
const productRouter = require('./product.route.js')
const blogRouter = require('./blog.route.js')

function route(app) {
    // app.get('/contact', (req, res) => {
    //     res.render('contact');
    // }); ==> Viết lại sau khi đã bóc tách các thành phần Router, Controller:
  
    app.use('/buy-collects', buyCollectsRouter)

    app.use('/blog', blogRouter)
    app.use('/product', productRouter)
    
    // app.use('/:slug', productRouter)
    app.use('/', siteRouter)

}

module.exports = route;