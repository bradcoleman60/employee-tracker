
const connection = require("./connection");

function selectChoice (queryStatement){
     
        const myArrayFor = [];
      
        connection.query(queryStatement, function (err, results, fields) {
          if (err) {
            console.log(err);
            return;
          }
      
          results.forEach((el) => {
            myArrayFor.push(el);
            return myArrayFor;
          });
          
          return myArrayFor;
          
        });

    }


      module.exports = selectChoice;



