/* This select.js file is a function that executes the SELECT SQL to view employee reports.
This requires a connection to the db from connection.js and the sql SELECT statements from 
sql-statements.js file.  This function is called from the  index.js file*/

const connection = require("./connection");


async function executeQuery(queryStatement) {
  const myArrayFor = [];

  connection.query(queryStatement, function (err, results, fields) {
    if (err) {
      console.log(err);
      return;
    }

    results.forEach((el) => {
      myArrayFor.push(el);
    });
    console.log()
    console.table(myArrayFor);
       
  })  
}

module.exports = executeQuery;

