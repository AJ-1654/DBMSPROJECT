var express = require('express');
var router = express.Router();

router.get('/new/:id', function (req, res, next) {
    res.render('taskForm', {
        title: "Add Task",
        teacher_id: req.params.id,
        text: '',
        deadline: ''
    });
});

router.post('/add', function (req, res, next) {
    req.assert('teacher_id', 'Teacher_id is required').notEmpty();
    req.assert('text', 'Text is required').notEmpty();
    req.assert('dos', 'Date of Submission is required').notEmpty();
    var errors = req.validationErrors();
    if (!errors) {
        var task = {
            text: req.body.text,
            deadline: req.body.dos,
            teacher_id: req.body.teacher_id
        };
        console.log(task.deadline);
        req.getConnection(function (error, conn) {
            conn.query('INSERT INTO tasks SET ?', task, function (err, result) {
                if (err) {
                    req.flash('error', err);
                    res.render('taskForm', {
                        title: 'Add Task',
                        text: req.body.text,
                        deadline: req.body.dos,
                        teacher_id: req.body.teacher_id
                    });
                } else {
                    console.log('adding new task');
                    req.flash('success', 'Data added successfully!');
                    var r = "/teacher/" + task.teacher_id;
                    console.log('redirecting');
                    res.redirect(r);
                }
            });
        });
    }
});

router.post('/back/:id', function (req, res) {
    var r = "/teacher/" + req.params.id;
    console.log('redirecting');
    res.redirect(r);
});

router.get('/edit/:id', function (req, res) {
    req.getConnection(function (error, conn) {
        conn.query('SELECT * FROM tasks WHERE task_id = ' + req.params.id, function (err, results, fields) {
            res.render('editTask', {
                title: 'Edit Task',
                text: results[0].text,
                task_id: req.params.id,
                teacher_id: results[0].teacher_id
            });
        });
    });
});

router.get('/delete/:id', function (req, res) {
    var task = {
        task_id: req.params.id,
    };
    var teacher_id;
    req.getConnection(function (error, conn) {
        conn.query('SELECT * FROM tasks where task_id = ?', [req.params.id], function(err,result){
            teacher_id = result[0].teacher_id;
        });
        conn.query('DELETE FROM tasks WHERE task_id = ' + req.params.id, task, function (err, result) {
            console.log('inside delete');
            var r = "/teacher/" + teacher_id;
            console.log('redirecting');
            res.redirect(r);
        });
    });
});

router.post('/update/:id', function (req, res) {
    console.log('inside update');
    var task = {
        text: req.body.text,
        deadline: req.body.dos,
        teacher_id: req.body.teacher_id
    };
    req.getConnection(function (error, conn) {
        conn.query('UPDATE tasks SET ? WHERE task_id = ' + req.params.id, task, function (err, result) {
            console.log('success', 'Data updated successfully!');
            var r = "/teacher/" + task.teacher_id;
            console.log('redirecting');
            res.redirect(r);
        });
    });
});

module.exports = router;