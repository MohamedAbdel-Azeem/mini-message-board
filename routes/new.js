var express = require('express');
var router = express.Router();
const {messages} = require('./index');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('form');
});

router.post('/', function(req, res, next) {
    const user_name = req.body.user_name;
    const message = req.body.message;
    messages.push({text: message, user: user_name, added: new Date()});
    console.log(messages);
    res.redirect('/');
});

module.exports = router;