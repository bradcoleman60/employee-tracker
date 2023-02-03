//Require MySql
const mysql = require('mysql2');

//Set connection parameters 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'employee_cms',
  password : 'password'
});

//Create a connection
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    return connection
    
  });
  

module.exports = connection