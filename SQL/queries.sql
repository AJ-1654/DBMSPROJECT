-- to get the student with particular id; the id will be provided in request body
SELECT * FROM students WHERE student_id = 'param'; 

-- to get the teacher with particular id; the id will be provided in request body
SELECT * FROM teachers WHERE teacher_id = 'param';

-- to get the tasks given by a teacher; the teacher_id will be provided in the request body
SELECT * FROM tasks WHERE teacher_id = 'param';

-- to insert a new task in the tasks table by a teacher; the task will be provided in the request body
INSERT INTO tasks SET 'task';

--to get the task from tasks to be updated; task_id will be provided in request parameter
SELECT * FROM tasks WHERE task_id = 'param';

-- to update a task by the teacher; task_id and updated task will be provided in request parameter and body respectively
update tasks SET task WHERE task_id = 'param';

-- to delete a task by the teacher; task_id will be provided in request parameters
DELETE FROM tasks WHERE task_id = 'param';