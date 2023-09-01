const express = require('express');
require('./config/mongoose');

// express app
const app = express();

const route = require('./config/route');

app.use(express.urlencoded({extended: false}));
app.use('/public', express.static('public'));

// register view engine
app.set('view engine', 'ejs');

app.use(route);

app.listen(2200, console.log('Local host is on 2200'));