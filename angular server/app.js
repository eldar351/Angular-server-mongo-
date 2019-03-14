var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var tabletRouter = require('./routes/tabletapi');
 

var app = express();
 
mongoose.connect('mongodb://localhost/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/', tabletRouter);
 

module.exports = app;
