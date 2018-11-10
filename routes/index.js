var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Homework management system',
    userid: '',
    password: '',
    whoareyou: ''
  });
});
router.get('/logout', function (req, res) {
  res.redirect('/');
});
module.exports = router;