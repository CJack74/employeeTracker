use employees;



INSERT INTO department
    (name)
VALUES
    ('Human Resources'), ('Legal'), ('Engineering'), ('Marketing');


-- Data for role table
INSERT INTO role
    (title, department_id)
VALUES
    ('Marketing Lead', 4), ('Junior Marketer', 4),
    ('Lead Engineer', 3), ('Test Engineer', 3),
    ('HR Manager', 1), ('HR Representive', 1),
    ('Legal Exec', 2), ('Paralegal', 2);


-- Data for employee table
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Bruce', 'Lee', 1, NULL), ('Mike', 'Dans', 2, 1), ('John', 'Singleton', 3, NULL),
    ('Duncan', 'James', 4, 3), ('Brad', 'Metts', 5, NULL), ('Eric', 'Berg', 6, 5),
    ('Kris', 'Cortez', 7, NULL), ('Jake', 'Long', 8, 7);