//This adds the inquire.js module to this script
const inquirer = require("inquirer");

const selectChoice = require("./sql-select-choices");

//Require sql-statements
const sqlStatements = require("./sql-statements");

//Require sql-action
const sqlAction = require("./sql-action")

//Require select.js file
const executeQuery = require("./sql-select");

// Require NPM module console.table
const cTable = require("console.table");

// Require Database Connection
const connection = require("./connection");

///////////////////////////////////////////////////
const choiceObject = {
  viewDepartments: "View Department",
  viewRole: "View Roles",
  showEmployees: "View All Employees",
  addDepartment: "Add New Department",
  addRole: "Add New Role",
  addNewEmployee: "Add New Employee"
};

const questions = [
  {
    type: "list",
    name: "view",
    message: "What what would you like to do?",
    choices: Object.values(choiceObject),
  },
];

function askquestion() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.view === "View Department")
      executeQuery(sqlStatements.viewDepartments);
    if (answers.view === "View Roles") executeQuery(sqlStatements.viewRole);
    if (answers.view === "View All Employees")
      executeQuery(sqlStatements.showEmployees);
    if (answers.view === "Add New Department") addDepartmentQuest();
    if (answers.view === "Add New Role") addRoleQuest();
    if (answers.view === "Add New Employee") addNewEmployeeQuest();
  });
}

function addDepartmentQuest() {
  inquirer
    .prompt({
      type: "item",
      name: "departmentName",
      message: "Enter the name of the Department you want to add",
    })
    .then((answers) => {
      sqlAction.addDepartment(answers.departmentName);
      askquestion();
    });
}

function addRoleQuest() {
  inquirer
    .prompt([
      {
        type: "item",
        name: "roleName",
        message: "Enter the name of the new Role you want to add"
      },
      {
        type: "item",
        name: "roleDepartment",
        message: "Enter the department number for this role"
      },
      {
        type: "item",
        name: "roleSalary",
        message: "Enter the salary of this new role"
      }
    ])
    .then((answers) => {

      sqlAction.addRole(
        answers.roleName,
        answers.roleDepartment,
        answers.roleSalary
      );
      askquestion();
    });
}


function addNewEmployeeQuest() {
    inquirer
      .prompt([
        {
          type: "item",
          name: "firstName",
          message: "Enter the First name of the new employee"
        },
        {
          type: "item",
          name: "lastName",
          message: "Enter the Last name of the new employee"
        },
        {
          type: "item",
          name: "employeeRole",
          message: "Enter the role ID for this employee"
        },
        {
        type: "item",
        name: "employeeManager",
        message: "Enter the new employee's manager's ID"
        }
      ])
      .then((answers) => {
  
        sqlAction.addEmployee(
          answers.firstName,
          answers.lastName,
          answers.employeeRole,
          answers.employeeManager
        );
        askquestion();
      });
  }

askquestion();
///////////////////////////////////////////////////////////////////////////

// selectChoice(sqlStatements.employeeChoices)
// console.log(employeeChoices)
// console.log(sqlStatements);
// console.log(employeeChoices);

//These are SQL Action statements (add and update to various tables)
// sqlStatements.addDepartment('Facilities');
// sqlStatements.addRole('Marketing Rep',6,165000)
// sqlStatements.addEmployee('Joanne', 'Collins',6, null)
// sqlStatements.UpdateEmpRole(9, 9)

//These are SQL query statements that fetch data and create tables of requested date
// executeQuery(sqlStatements.showEmployeeTitle);
// executeQuery(sqlStatements.viewDepartments);
// executeQuery(sqlStatements.viewRole);






////TEST QUERY FOR AN ARRAY OF ONLY VALUES IN THE NAME FIELD
function testQuery(queryStatement) {
    const myArrayFor = [];
  
    connection.query({ sql: 'SELECT first_name FROM employee_cms.employee', rowsAsArray: true}, function (err, results, fields) {
    // connection.query('SELECT * FROM employee_cms.employee', function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(results)

      let arr = results;
      let finalObj = []

      for (let i=0; i < arr.length; i++){
        finalObj.push(arr[i])
      }

      console.log(finalObj)
    //   console.log(Object.values(results));
    //   console.log(results.reduce(function(result, current){
    //         return Object.assign(result,current);
    //     }, {}))
    //     console.log(Object.assign({}, ...results))

      
    //   results.forEach((el) => {
    //     myArrayFor.push(el);
    //   });
      // return myArrayFor;
    //   console.log(myArrayFor);
    //   console.log(myArrayFor.reduce(function(result, current){
    //     return Object.assign(result,current);
    //   }, {}))
      
      
    });
  }

//   testQuery()