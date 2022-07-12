DROP DATABASE IF EXISTS hr_db;
-- creating database
CREATE DATABASE hr_db;
-- using database
USE hr_db;

--SELECT DATABASE() sees database in use

--CREATING TABLES
CREATE TABLE department(
    id INT NOT NULL PRIMARY KEY,
    dept_name VARCHAR(30),
);

CREATE TABLE role(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    DEPARTMENT_ID INT,
);

CREATE TABLE employee(
    id INT PRIMARY KEY,
    fist_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id int,
    manager_id int or null
);


