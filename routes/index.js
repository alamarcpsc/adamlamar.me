// routes/index.js

var express = require('express');
var router = express.Router();

// redirects http to https
router.all('*', ensureSecure);

// GET index
router.get('/', function(req, res) {
    res.render('index.ejs');
});

// redirects everything to '/'
router.get('*', function(req, res){
    res.redirect('/');
});

function ensureSecure(req, res, next){
    if(req.secure){
        return next();
    } else {
        res.redirect('https://' + req.hostname + req.url);
    }
}

module.exports = router;
