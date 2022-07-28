DROP DATABASE IF EXISTS hr_db;
CREATE DATABASE hr_db;

CREATE TABLE department(
    id INT NOT NULL PRIMARY KEY AUTO INCREMENT
    dept_name VARCHAR(30),
);

CREATE TABLE role(
    id INT NOT NULL PRIMARY KEY AUTO INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
    foreign key (department_id)
    references department(id)
);

CREATE TABLE employee(
    id INT NOT NULL PRIMARY KEY AUTO INCREMENT
    fist_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT
    foreign key (role_id)
    references role(id),
    manager_id INT
    foreign key (manager_id)
    references employee(id)
);


