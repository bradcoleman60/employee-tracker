//Require MySql
const mysql = require('mysql2');

//Set connection parameters 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  //What about DB name here?
  password : 'Mkonji2009!'
});

//Create a connection
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    return connection
    // console.log('connected as id ' + connection.threadId);
  });
  

module.exports = connection