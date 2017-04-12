// server.js

var http  = require('http'),
    https = require('https'),
    fs    = require('fs'),
    app   = require('./app');

var credentials = {
    key: fs.readFileSync('./certificates/adamlamar.me.key'),
    cert: fs.readFileSync('./certificates/www_adamlamar_me_cert.cer')
};

http.createServer(app).listen(80, function () {
    console.log('http server listening on port: 80');
});

https.createServer(credentials, app).listen(443, function () {
    console.log('https server listening on port: 443');
});