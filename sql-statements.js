/* This file contains only SQL statements used in this app.  All SQL statements will be found below 
and they are exported to other associated js files and functions. */

//Retrieves Show Employee
const selectEmployeeTitle = `SELECT 
ee.id as 'ID',
ee.first_name as 'First Name',
ee.last_name as 'Last Name',
role.title as 'Title',
dept.name as 'Department',
role.salary as 'Salary',
CASE WHEN ISNULL(CONCAT (manager.first_name, " ", manager.last_name)) THEN "n/a" 
    ELSE CONCAT (manager.first_name, " ", manager.last_name) END as 'Manager'

FROM employee_cms.employee ee 
JOIN employee_cms.role role on ee.role_id = role.id
JOIN employee_cms.department dept on role.department_id = dept.id
LEFT JOIN employee_cms.employee manager on ee.manager_id = manager.id`;

//Retrieves Show Departments 
const viewDepartments = `SELECT * FROM employee_cms.department`;

//Retrieves Show Roles 
const viewRole = `SELECT * FROM employee_cms.role`;

module.exports = {selectEmployeeTitle, viewDepartments, viewRole}