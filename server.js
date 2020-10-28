//Dependencies
const inquirer = require("inquirer")
const mysql = require("mysql")
const ctable = require("console.table")

//Establishes connection to mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306, // default for mysql
    user: "root",
    password: 'Password',
    database: 'employee_db',
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
    hello();
  });


  //allows user to ADD departments, roles, and employees
  function hello() {
    console.log("hello")  
  }
 
  




  //allows user to view department, roles, and employees


  //updates employee roles

