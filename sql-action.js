/* This sql-action.js file contains all of the sql function that perform an action on the database (add, delete or update).
This requires a connection to the db from connection.js These functions are called from the  index.js file*/

// Require Connection to Database
const connection = require("./connection");

// Add New Department
function addDepartment(department_name) {
  connection.query(
    `INSERT INTO employee_cms.department (name) VALUES ( ? )`,
    department_name,
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Added New Department Named  ${department_name}`);
    }
  );
}

//Add a new role
function addRole(name, department, salary) {
  connection.query(
    `INSERT INTO employee_cms.role (title, department_id, salary) VALUES ( ? , (SELECT id FROM department WHERE name = ?), ?);`,
    [name, department, salary],
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(
        `Added role ${name} with a salary of ${salary} to the ${department} department`
      );
    }
  );
}

//Add a new employee
function addEmployee(first_name, last_name, role_id, manager_id) {
  connection.query(
    `INSERT INTO employee_cms.employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);`,
    [first_name, last_name, role_id, manager_id],
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(
        `Added new employee: ${first_name} ${last_name} with a role ID of ${role_id} with a manager of ${manager_id}`
      );
    }
  );
}

//Update employee role
function UpdateEmpRole(employeeId, NewRoleID) {
  connection.query(
    `UPDATE employee_cms.employee SET role_id = ? WHERE id = ? ;`,
    [NewRoleID, employeeId],
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(typeof employeeID);
      console.log(
        `Updated employee ID: ${employeeId} to new role of ${NewRoleID}`
      );
    }
  );
}

module.exports = { addDepartment, addRole, addEmployee, UpdateEmpRole };
