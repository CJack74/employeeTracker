
-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS employee_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
name VARCHAR (30) NOT NULL,
PRIMARY KEY (id),
)

CREATE TABLE role(
PRIMARY KEY (id),
title VARCHAR (30) NOT NULL,
salary DECIMAL,
department_id INTEGER,
);

CREATE TABLE employee(
PRIMARY KEY (id),
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INTEGER,
manager_id INTEGER,
);