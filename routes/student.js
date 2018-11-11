var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next) {
    req.getConnection(function (error, conn) {
        conn.query('SELECT * FROM students WHERE student_id = ?', [req.params.id], function (error, results, fields) {
            var student = results[0];
            var tid = student.teacher_id;
            conn.query('SELECT * from tasks WHERE teacher_id = ? order by deadline', [tid], function (error, results, fields) {
                var tasks = results;
                console.log(tasks);
                res.render('student', {
                    title: "Welcome " + student.first_name,
                    tasks: tasks,
                    id: req.params.id,
                    name: student.first_name
                });
            });
        });
    });
});


module.exports = router;