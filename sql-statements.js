/* This file contains Select SQL statements used in this app.  All SQL statements will be found below 
and they are exported to other associated js files and functions. */

const actionSQL = require("./sql-action")
const connection = require("./connection");

//Retrieves Show Employee
const showEmployees = `SELECT 
ee.id as 'ID',
ee.first_name as 'First Name',
ee.last_name as 'Last Name',
role.title as 'Title',
dept.name as 'Department',
role.salary as 'Salary',
CASE WHEN ISNULL(CONCAT (manager.first_name, " ", manager.last_name)) THEN "n/a" 
    ELSE CONCAT (manager.first_name, " ", manager.last_name) END as 'Manager'

FROM employee ee 
JOIN role on ee.role_id = role.id
JOIN department dept on department_id = dept.id
LEFT JOIN employee manager on ee.manager_id = manager.id
ORDER BY ee.id asc`;

//Retrieves Show Departments 
const viewDepartments = `SELECT * FROM employee_cms.department`;

//Retrieves Show Roles 
const viewRole = `SELECT * FROM employee_cms.role`;

//Retrieves List of Employee Only for Modify Employee Function 
const employeeChoices = `SELECT id FROM employee_cms.employee`;

module.exports = {showEmployees, viewDepartments, viewRole}