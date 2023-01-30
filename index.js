//This adds the inquire.js module to this script
const inquirer = require("inquirer");

// call once somewhere in the beginning of the app
const cTable = require("console.table");
console.table([
  {
    name: "foo",
    age: 10,
  },
  {
    name: "bar",
    age: 20,
  },
]);

//sample table
var values = [
  ["max", 20],
  ["joe", 30],
];
console.table(["name", "age"], values);

//To make connection  to MySql
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Mkonji2009!'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

//Create a SELECT statement to select  data from a table  
  
const myArrayFor = [];

const selectEmployeeTitle = `SELECT * FROM employee_cms.employee ee JOIN employee_cms.role role on ee.role_id = role.id`

connection.query(selectEmployeeTitle, function (err, results,fields){

    if(err) throw err;
    console.log(err)
    
    results.forEach(el => {
        myArrayFor.push({id: el.id, first: el.first_name, Last: el.last_name, Role: el.role_id, Title:el.title})
        
    })
    console.table(myArrayFor)

  });

  