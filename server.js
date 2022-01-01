const express = require('express');
const app = express();
const morgan = require('morgan');
const methodOverride = require("method-override");
const port = 3000;

app.use('/public/', express.static('public'))
app.use(morgan(`dev`));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride("_method"));


app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/price', (req, res) => {
    res.render('price.ejs');
})
app.get('/about', (req, res) => {
    res.render('about.ejs');
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs');
})
app.listen(port);