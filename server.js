// server.js

var http  = require('http'),
    https = require('https'),
    fs    = require('fs'),
    app   = require('./app');

/*
var credentials = {
    key: fs.readFileSync('/etc/letsencrypt/live/adamlamar.me/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/adamlamar.me/cert.pem')
};
*/

var httpServer  = http.createServer(app);

httpServer.listen(80);
httpServer.on('error', function(err) {
    console.log('error:' + err);
});
httpServer.on('listening', function(){
    console.log('Listening on port: ' + 80);
});

/*
https.createServer(credentials, app).listen(443, function () {
    console.log('https server listening on port: 443');
});
*/