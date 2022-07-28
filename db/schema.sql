DROP DATABASE IF EXISTS hr_db;
CREATE DATABASE hr_db;

CREATE TABLE department(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(30)
);

CREATE TABLE role(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150),
    salary DECIMAL(10,2),
    department_id INT,
    foreign key (department_id)
    references department(id)
);

CREATE TABLE employee(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    foreign key (role_id)
    references role(id),
    foreign key (manager_id)
    references employee(id)
    on delete set null
);


