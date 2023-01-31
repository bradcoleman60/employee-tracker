//This adds the inquire.js module to this script
const inquirer = require("inquirer");

//Require sql-statements
const sqlStatements = require("./sql-statements")

//Require select.js file
const executeQuery = require("./select")



// call once somewhere in the beginning of the app
const cTable = require("console.table");

// console.table([
//   {
//     name: "foo",
//     age: 10,
//   },
//   {
//     name: "bar",
//     age: 20,
//   },
// ]);

//sample table
// var values = [
//   ["max", 20],
//   ["joe", 30],
// ];
// console.table(["name", "age"], values);

//To make connection  to MySql
// var mysql = require('mysql2');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Mkonji2009!'
// });

// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });

//Create a SELECT statement to select  data from a table  
  
// const myArrayFor = [];

// const selectEmployeeTitle = `SELECT 
// ee.id as 'ID',
// ee.first_name as 'First Name',
// ee.last_name as 'Last Name',
// role.title as 'Title',
// dept.name as 'Department',
// role.salary as 'Salary',
// CASE WHEN ISNULL(CONCAT (manager.first_name, " ", manager.last_name)) THEN "n/a" 
//     ELSE CONCAT (manager.first_name, " ", manager.last_name) END as 'Manager'

// FROM employee_cms.employee ee 
// JOIN employee_cms.role role on ee.role_id = role.id
// JOIN employee_cms.department dept on role.department_id = dept.id
// LEFT JOIN employee_cms.employee manager on ee.manager_id = manager.id`;


// const viewDepartments = `SELECT * FROM employee_cms.department`;
// const viewRole = `SELECT * FROM employee_cms.role`;

// console.log(sqlSatements.selectEmployeeTitle)

executeQuery(sqlStatements.selectEmployeeTitle)
executeQuery(sqlStatements.viewDepartments)
executeQuery(sqlStatements.viewRole)

// connection.query(selectEmployeeTitle, function (err, results,fields){

//     if(err) throw err;
//     console.log(err)
    
//     results.forEach(el => {
//         myArrayFor.push(el)
//          })
//     console.table(myArrayFor)

//   });

  