var express = require('express');
var router = express.Router();

router.post('/login', function (req, res, next) {
  req.assert('userid', 'Userid is required').notEmpty();
  req.assert('password', 'Password is required').notEmpty();
  req.assert('youare', 'Plz select').notEmpty();
  var errors = req.validationErrors();

  if (!errors) {
    req.getConnection(function (error, conn) {
      var youare = req.body.youare;
      var password = req.body.password;
      if (youare === 'student') {
        var student_id = req.body.userid;
        conn.query('SELECT * FROM students WHERE student_id = ?', [student_id], function (error, results, fields) {
          if (error) {
            res.render('error', {
              title: "error",
              code: 400,
              text: "error ocurred"
            });
          } else {
            if (results.length > 0) {
              if (results[0].password == password) {
                var r = "/student/" + student_id;
                console.log('redirecting');
                res.redirect(r);
              } else {
                res.render('error', {
                  title: "error",
                  code: 204,
                  text: "Userid and password does not match"
                });
              }
            }
          }
        });
      }
      if (youare === 'teacher') {
        var teacher_id = req.body.userid;
        conn.query('SELECT * FROM teachers WHERE teacher_id = ?', [teacher_id], function (error, results, fields) {
          if (error) {
            res.render('error', {
              title: "error",
              code: 400,
              text: "error ocurred"
            });
          } else {
            if (results.length > 0) {
              if (results[0].password === password) {
                var r = "/teacher/" + teacher_id;
                console.log('redirecting');
                res.redirect(r);
              }
            } else {
              res.render('error', {
                title: "error",
                code: 204,
                text: "Userid and password does not match"
              });
            }
          }
        });
      }
    });
  } else {
    var error_msg = '';
    errors.forEach(function (error) {
      error_msg += error.msg + '<br>';
    });
    req.flash('error', error_msg);
    res.render('index', {
      title: 'Homework management system',
      userid: req.body.userid,
      password: req.body.password,
      whoareyou: req.body.whoareyou
    });
  }
});


module.exports = router;