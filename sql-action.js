/* This sql-action.js file contains all of the sql function that perform an action on the database (add, delete or update).
This requires a connection to the db from connection.js These functions are called from the  index.js file*/

const connection = require("./connection");

function actionSQL(SQL_statement, consoleStatement) {
  
  connection.query(SQL_statement, function (err, results, fields) {
    if (err) {
      console.log(err);
      return;
    }
    return console.log(consoleStatement);
    });
    
  };

  module.exports = actionSQL;
