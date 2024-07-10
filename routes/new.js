var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('form');
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    // res.redirect('/');
});

module.exports = router;