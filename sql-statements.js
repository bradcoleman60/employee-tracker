/* This file contains only SQL statements used in this app.  All SQL statements will be found below 
and they are exported to other associated js files and functions. */

const actionSQL = require("./sql-action")

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

//Adds a new Department 
function addDepartment (department_name) {
   var addDepartmentSQL = `INSERT INTO employee_cms.department (name) VALUES ('${department_name}');`
   var consoleStatement = `Added a new department named: ${department_name}`
    // return addRoleSQL, consoleStatement;
    actionSQL(addDepartmentSQL,consoleStatement)
};

//Add a new role
function addRole(name, department, salary) {
    const addRoleSQl = `INSERT INTO employee_cms.role (title, department_id, salary) VALUES ('${name}','${department}','${salary}');`;
    const consoleStatement = `Added role ${name} with a salary of ${salary} to the ${department} department`;
    actionSQL(addRoleSQl,consoleStatement)
    };

//Add a new employee
function addEmployee (first_name, last_name,role_id, manager_id){
    const addEmployeeSQL = `INSERT INTO employee_cms.employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}','${last_name}','${role_id}',${manager_id});`;
    const consoleStatement = `Added new employee: ${first_name} ${last_name} with a role ID of ${role_id} with a manager of ${manager_id}`;
    actionSQL(addEmployeeSQL,consoleStatement)
}

//Update employee role
function UpdateEmpRole (employeeId, NewRoleID) {
    const UpdateEmpRoleSQL = `UPDATE employee_cms.employee SET role_id = ${NewRoleID} WHERE id = ${employeeId};`;
    const consoleStatement = `Updated employee ID: ${employeeId} to new role of ${NewRoleID}`;
    actionSQL(UpdateEmpRoleSQL,consoleStatement)
}




module.exports = {selectEmployeeTitle, viewDepartments, viewRole, addDepartment, addRole, addEmployee, UpdateEmpRole}