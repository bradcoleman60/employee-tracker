//Require MySql
const mysql = require('mysql2');

//Set connection parameters 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  //What about DB name here?
  password : 'password'
});

//Create a connection
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    // console.log('connected as id ' + connection.threadId);
    return connection
    
  });
  

module.exports = connection