CREATE TABLE `STUDENTS` (
    `student_id` int(5) NOT NULL AUTO_INCREMENT,
  	`first_name` varchar(25) NOT NULL,
  	`last_name` varchar(25) NOT NULL,
  	`DOB` date NOT NULL,
    `password` varchar(10) NOT NULL,
	  `teacher_id` int(5),
  	PRIMARY KEY (`student_id`),
    FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`teacher_id`)
) ENGINE = INNODB AUTO_INCREMENT = 1;

CREATE TABLE `TASKS` (
    `task_id` int(5) NOT NULL AUTO_INCREMENT,
  	`text` varchar(2000) NOT NULL,
    `deadline` date NOT NULL,
    `teacher_id` int(5),
  	PRIMARY KEY (`task_id`),
    FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`teacher_id`)
) ENGINE = INNODB AUTO_INCREMENT = 1;
