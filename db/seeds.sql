USE employee_cms;

INSERT INTO department (name) VALUES 
    ('Engineering'), 
    ('Sales'), 
    ('Legal'), 
    ('Finance');

INSERT INTO role (title, department_id, salary) VALUES
    ('Sales Lead',2, 195000),
    ('Salesperson', 2, 150000),
    ('Lead Engineer', 1, 325000),
    ('Software Engineer' ,1, 275000),
    ('Chief Financial Officer', 3, 350000),
    ('Accounting Manager', 3, 125000),
    ('Chief Legal Office', 4 , 275000),
    ('Lawyer', 4 , 180000);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Mary','Jones' ,1,null),
    ('Bob','Smith' ,2,1),
    ('Mike' ,'Johnson' ,3,null),
    ('Brian','Kale' ,4,3),
    ('Anna','Sheppard' ,5,null),
    ('Ron','Howard' ,6,5),
    ('Kate','Karas' ,8,null),
    ('Alan' ,'Parker' ,7,8);

