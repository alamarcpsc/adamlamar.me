// app.js

var express      = require('express'),
    path         = require('path'),
    routes       = require('./routes/index'),
    favicon      = require('serve-favicon'),
    app = express();

// configure
app.set('name', 'adamlamar.me');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 80);

// middleware
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

module.exports = app;
