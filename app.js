const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static('static'));
app.set('view engine', 'ejs');

const people = require('./routes/people');

app.use('/people', people);

app.listen(3000);