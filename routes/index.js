// routes/index.js

var express = require('express');
var router = express.Router();

// GET index
router.get('/', function(req, res) {
    res.render('index.ejs');
});

// GET other
router.get('*', function(req, res){
    res.redirect('/');
});

module.exports = router;
