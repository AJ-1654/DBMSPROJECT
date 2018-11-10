CREATE TABLE `TEACHERS` (
    `teacher_id` int(5) NOT NULL AUTO_INCREMENT,
  	`first_name` varchar(25) NOT NULL,
  	`last_name` varchar(25) NOT NULL,
  	`DOB` date NOT NULL,
    `password` varchar(10) NOT NULL,
  	PRIMARY KEY (`teacher_id`)
) ENGINE = INNODB AUTO_INCREMENT = 1;
