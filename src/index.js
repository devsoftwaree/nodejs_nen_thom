const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine: handlebars } = require('express-handlebars');


// Khai báo database
const db = require('./config/db')

// Connect to db 
db.connect()

// Express library
const app = express();
const port = 3000;

// Sử dụng middleware để phân tích dữ liệu dạng json
app.use(express.json());

// Midleware xử lý dữ liệu từ form 
app.use(express.urlencoded({ extended: true }))

// File index.js tự động nạp nên không cần viết rõ ./routes/index.js
// Route init
const route = require('./routes')

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// HTTP loger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        layoutsDir: path.join(__dirname, 'resource', 'views', 'layouts'),
        defaultLayout: 'main.hbs', // Sử dụng tên tệp mới
        partialsDir: path.join(__dirname, 'resource', 'views', 'partials'),
        helpers: {
            counter: function (index) {
              return index + 1;
            }
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));


route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});