const connection = require("./connection");
const mainIndex = require("./index");


// DepartmentArray =[]

function getDepartmentChoices(tempArray){
connection.query({ sql: 'SELECT name FROM department', rowsAsArray: true}, function (err, results, fields) {
    if (err) {
      console.log(err);
      return;
    }
    
    // tempArray  = []
    
    tempArray.push(results.flat(1))
    
    
    return tempArray
})
}
module.exports = {getDepartmentChoices}