const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/recommend', (req,res) => {
    res.render('recommend');
})


app.post('/recommend', (req,res) => {
    res.render('recommend');
})







app.listen(3000, () => {
    console.log('Serving on port 3000')
})