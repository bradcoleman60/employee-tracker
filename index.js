//This adds the inquire.js module to this script
const inquirer = require("inquirer");

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

//Object that contains the main menu
const choiceObject = {
  viewDepartments: "View Department",
  viewRole: "View Roles",
  showEmployees: "View All Employees",
  addDepartmentQuest: "Add New Department",
  addRoleQuest: "Add New Role",
  addNewEmployeeQuest: "Add New Employee",
  updateEmployeeQuest: "Update an existing employee",
  // separator: new inquirer.Separator(),
  quit: "Quit",
  // separator1: new inquirer.Separator(),
};
const questions = [
  {
    type: "list",
    name: "view",
    message: "What what would you like to do?",
    pageSize: 10,
    choices: Object.values(choiceObject),
  },
];

/* This function displays the main menu that the user can select from.  Depending on the answer selected 
this function either invokes the execute Query function and passes the name of the sql query to return a 
report to the console log or invokes on of 4 additional functions below to perform an action 
(add department, add role, add employee or modify an employee) */
async function askquestion() {
  inquirer.prompt(questions).then(async ({ view }) => {
    var SQLStatement = Object.keys(choiceObject).find(
      (key) => choiceObject[key] === view
    );
    if (
      SQLStatement === "viewRole" ||
      SQLStatement === "showEmployees" ||
      SQLStatement === "viewDepartments"
    ) {
      await executeQuery(sqlStatements[SQLStatement]);
      await continueOn();
      // await askquestion();
    }
    //The eval method is used to variable to invoke a function
    else eval(SQLStatement + "();");
  });
}

//Function to reinstate the main menu or quit
function continueOn(){
  inquirer
  .prompt({
    type: "confirm",
    name: "continue",
    message: "Do you want to see the main menu again?",
  }).then((answers) => {
    if (answers.continue === true){
      askquestion()
    } else {connection.end();
    console.log("Thanks for using the Employee CMS System");
    }
  })

}


/*These are arrays that hold lists of  departments, managers(employees), and roles, 
respectively for use in the prompt questions below*/
var DepartmentArray = [];
var ManagerArray = [];
var roleArray = [];

//Function to take in user input from Inquirer to add a new department
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

/* Function to obtain the list of departments used in the prompt questions below*/
function getDepartmentChoices() {
  connection.query(
    { sql: "SELECT name FROM department", rowsAsArray: true },
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }

      DepartmentArray = results.flat(1);
      // console.log(DepartmentArray)

      return DepartmentArray;
    }
  );
}

/* Function to obtain the list of managers(employees) used in the prompt questions below*/
function getManagerChoices() {
  connection.query(
    {
      sql: 'SELECT CONCAT(first_name, " ", last_name, " (id:",id, ")") FROM employee_cms.employee',
      rowsAsArray: true,
    },
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }
      //This method combines the array of array's from the sql statement into one array
      ManagerArray = results.flat(1);
      return ManagerArray;
    }
  );
}

function getRoleChoices() {
  connection.query(
    {
      sql: 'SELECT CONCAT(title, " (id:",id, ")") FROM employee_cms.role',
      rowsAsArray: true,
    },
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }
      //This method combines the array of array's from the sql statement into one array
      roleArray = results.flat(1);

      return roleArray;
    }
  );
}

//These call the functions to retrieve the departments, managers and roles.
getDepartmentChoices();
getManagerChoices();
getRoleChoices();

//Function to add a new role
function addRoleQuest() {
  var questionsForNewRole = [
    {
      type: "input",
      name: "roleName",
      message: "Enter the name of the new Role you want to add",
    },
    {
      type: "list",
      name: "roleDepartment",
      message: "Enter the department number for this role",
      choices: DepartmentArray,
    },
    {
      type: "item",
      name: "roleSalary",
      message: "Enter the salary of this new role",
    },
  ];
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
        type: "input",
        name: "firstName",
        message: "Enter the First name of the new employee",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter the Last name of the new employee",
      },
      {
        type: "list",
        name: "employeeRole",
        message: "Enter the role ID for this employee",
        choices: roleArray,
      },
      {
        type: "list",
        name: "employeeManager",
        message: "Enter the new employee's managers name",
        choices: ManagerArray,
      },
    ])
    .then(({ firstName, lastName, employeeRole, employeeManager }) => {
      //These two variables parse the answer received to obtain the Manger ID and the role ID for passing to the SQL UPDATE statement
      var managerID = parseInt(
        employeeManager.slice(
          employeeManager.indexOf("(") + 4,
          employeeManager.length - 1
        )
      );
      var roleID = parseInt(
        employeeRole.slice(
          employeeRole.indexOf("(") + 4,
          employeeRole.length - 1
        )
      );

      //Calls the addEmployee function on the sqlAction file and passes input variables
      sqlAction.addEmployee(firstName, lastName, roleID, managerID);
      askquestion();
    });
}

function updateEmployeeQuest() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeName",
        message: "Which employee do you want to update?",
        choices: ManagerArray,
      },
      {
        type: "list",
        name: "newRole",
        message: "Select the new role for this employee",
        choices: roleArray,
      },
    ])
    .then(({ employeeName, newRole }) => {
      //These  two variable parse the answer received to obtain the employee ID and the role ID for passing to the SQL UPDATE statement
      var employeeID = parseInt(
        employeeName.slice(
          employeeName.indexOf("(") + 4,
          employeeName.length - 1
        )
      );
      var roleID = parseInt(
        newRole.slice(newRole.indexOf("(") + 4, newRole.length - 1)
      );
      //Calls the UpdateEmpRole function on the sqlAction file and passes input variables
      sqlAction.UpdateEmpRole(employeeID, roleID);
      askquestion();
    });
}

askquestion();

//Function to quit the Inquirer
function quit() {
  connection.end();
  console.log("Thanks for using the Employee CMS System");
}
