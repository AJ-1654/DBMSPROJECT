var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next) {
    req.getConnection(function (error, conn) {
        conn.query('SELECT * FROM teachers WHERE teacher_id = ?', [req.params.id], function (error, results, fields) {
            var teacher = results[0];
            conn.query('SELECT * from tasks WHERE teacher_id = ? order by deadline', [req.params.id], function (error, results, fields) {
                console.log('Hello');
                res.render('teacher', {
                    title: "Welcome " + teacher.first_name,
                    tasks: results,
                    id: req.params.id,
                    name: teacher.first_name
                });
            });
        });
    });
});


module.exports = router;