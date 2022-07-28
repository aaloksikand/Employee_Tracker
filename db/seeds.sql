INSERT INTO department (dept_name)
VALUES (
    ("Front Desk"),
    ("Housekeeping"),
    ("Maintenance"),
    ("Breakfast"),
    ("Valet")
);

INSERT INTO role (title, salary, department_id)
VALUES (
    ("Front Desk Associate", 18, 1),
    ("Night Auditor", 18.50, 1),
    ("Front Office Manager", 25, 1),
    ("Room Attendant", 16, 2),
    ("Housekeeping Supervisor", 18, 2),
    ("Houseperson", 16, 2),
    ("Laundry Attendant", 16, 2),
    ("Maintenance Technician", 20, 3),
    ("Breakfast Attendant", 16, 4),
    ("Valet", 16, 5)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (
    ("Celeste", "Pasco", 1,3),
    ("Augstin", "Vasquez", 2,3),
    ("Fred", "Buhat", 3),
    ("Rosa", "Mirales", 4,3),
    ("Susana", "Morales", 5,3),
    ("Antawn", "Hairston", 6,3),
    ("Eva", "Morales", 7,3),
    ("Paula", "Sarmiento", 8,3)
    ("Odilio", "Chavez", 9,3)
);
