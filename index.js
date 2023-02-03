//This adds the inquire.js module to this script
const inquirer = require("inquirer");

const selectChoice = require("./sql-select-choices");

//Require sql-statements
const sqlStatements = require("./sql-statements");

//Require sql-action
const sqlAction = require("./sql-action");

//Require select.js file
const executeQuery = require("./sql-select");

// Require NPM module console.table
const cTable = require("console.table");

// Require Database Connection
const connection = require("./connection");

const getChoices = require("./sql-get-choices");
const getDepartmentChoices = require("./sql-get-choices");

//Objtect that contains the main menu
const choiceObject = {
  viewDepartments: "View Department",
  viewRole: "View Roles",
  showEmployees: "View All Employees",
  addDepartmentQuest: "Add New Department",
  addRoleQuest: "Add New Role",
  // testQuery: "Add New Role",
  addNewEmployeeQuest: "Add New Employee",
  separator: new inquirer.Separator(),
  quit: "Quit",
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
  inquirer.prompt(questions).then(({ view }) => {
    console.log(view)
    var SQLStatement = Object.keys(choiceObject).find((key) => choiceObject[key] === view)
    console.log(SQLStatement)
     if (SQLStatement === "viewRole" || SQLStatement === "showEmployees" || SQLStatement === "viewDepartments"){
      executeQuery(sqlStatements[SQLStatement])
    } 
    else eval(SQLStatement + '();');
  }
  )}

//Add function to take in user input from Inquirer to add a new department 
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
var DepartmentArray =[]
var ManagerArray =[]
var roleArray = []


function getTHEchoice (){
  connection.query({sql: 'SELECT name FROM department', rowsAsArray: true},function (err, results, fields) {
    if (err) {
      console.log(err);
      return;
    }

    DepartmentArray = results.flat(1)
    // console.log(DepartmentArray)

    return DepartmentArray
  })

  }

function getManagerChoices (){

  connection.query({sql: 'SELECT CONCAT(first_name, " ", last_name, " (id:",id, ")") FROM employee_cms.employee', rowsAsArray: true},function (err, results, fields) {
    if (err) {
      console.log(err);
      return;
    }

    ManagerArray = results.flat(1)
    // console.log(ManagerArray)
    return ManagerArray
  })
}  

function getRoleChoices (){

  connection.query({sql: 'SELECT CONCAT(title, " (id:",id, ")") FROM employee_cms.role', rowsAsArray: true},function (err, results, fields) {
    if (err) {
      console.log(err);
      return;
    }

    roleArray = results.flat(1)
    // console.log(ManagerArray)
    return roleArray
  })
}  


getTHEchoice()
getManagerChoices()
getRoleChoices()



function addRoleQuest() {

  var questionsForNewRole = [
      {
        type: "item",
        name: "roleName",
        message: "Enter the name of the new Role you want to add",
      },
      {
        type: "list",
        name: "roleDepartment",
        message: "Enter the department number for this role",
        choices: DepartmentArray
      },
      {
        type: "item",
        name: "roleSalary",
        message: "Enter the salary of this new role",
      }
    ]
  // }
    inquirer.prompt(questionsForNewRole).then((answers) => {
      sqlAction.addRole(
        answers.roleName,
        answers.roleDepartment,
        answers.roleSalary
      );
      askquestion();
    });
  
}

//Function to Add new Employee
function addNewEmployeeQuest() {
  inquirer
    .prompt([
      {
        type: "item",
        name: "firstName",
        message: "Enter the First name of the new employee",
      },
      {
        type: "item",
        name: "lastName",
        message: "Enter the Last name of the new employee",
      },
      {
        type: "list",
        name: "employeeRole",
        message: "Enter the role ID for this employee",
        choices: roleArray
      },
      {
        type: "list",
        name: "employeeManager",
        message: "Enter the new employee's managers name",
        choices: ManagerArray
      },
    ])
    .then((answers) => {
      var managerString = answers.employeeManager
      var managerID = parseInt(managerString.slice(managerString.indexOf("(")+4, managerString.length-1))

      var roleString = answers.employeeRole
      var roleID = parseInt(roleString.slice(roleString.indexOf("(")+4, roleString.length-1))
     
      sqlAction.addEmployee(
        answers.firstName,
        answers.lastName,
        roleID,
        managerID
      );
      askquestion();
    });
}

askquestion();


////TEST QUERY FOR AN ARRAY OF ONLY VALUES IN THE NAME FIELD////////////////////////////////////////////////////////
// function addRoleQuest(queryStatement) {
function testQuery(queryStatement) {
  // const myArrayFor = [];

  connection.query(
    {
      sql: 'SELECT CONCAT (first_name, " ", last_name, " (id:",id,")" ) as name FROM employee_cms.employee',
      rowsAsArray: true,
    },
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }

      newArray = results.flat(1);

      const questionsX = [
        {
          type: "list",
          name: "view",
          message: "Pick an employee's Name",
          // choices: otherFile.bradX([]),
          choices: newArray,
        },
      ];

      inquirer.prompt(questionsX).then((answers) => {
        console.log(answers);
      });
    }
  );
}

// testQuery()
/////////////////////////////////////////////////////////////////////////////////////////////////
//Function to quit the Inquirer
function quit() {
  connection.end();
  console.log("Thanks for using the Employee CMS System");
}


