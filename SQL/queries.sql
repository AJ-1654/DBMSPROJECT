-- to get tasks for a student whose teacher_id will be procured from request.body
SELECT * FROM `tasks` WHERE teacher_id = 'param';

-- to get all the students under the teacher; the teacher_id will be procured from request.body
SELECT * FROM `students` WHERE teacher_id = 'param';

-- to get all the tasks given by the teacher; the teacher_id will be procured from request.body
SELECT * FROM `tasks` WHERE teacher_id = 'param';
