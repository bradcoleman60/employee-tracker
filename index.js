//This adds the inquire.js module to this script
const inquirer = require("inquirer");

//Require sql-statements
const sqlStatements = require("./sql-statements")
const actionSQL = require("./sql-action");
// const addRole = require("./sql-action")

//Require select.js file
const executeQuery = require("./select")

// call once somewhere in the beginning of the app
const cTable = require("console.table");

//These are SQL Action statements (add and update to various tables)
// sqlStatements.addDepartment('Marketing');
// sqlStatements.addRole('Marketing Rep',6,165000)
// sqlStatements.addEmployee('Joanne', 'Collins',6, null)
// sqlStatements.UpdateEmpRole(9, 9)

//These are SQL query statements that fetch data and create tables of requested date
executeQuery(sqlStatements.selectEmployeeTitle);
executeQuery(sqlStatements.viewDepartments);
executeQuery(sqlStatements.viewRole);





  