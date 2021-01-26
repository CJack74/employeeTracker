//Dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");
var ctable = require("console.table");
var add = require("./js/add")
var view = require("./js/view")

//Establishes connection to mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306, // default for mysql
  user: "root",
  password: 'Password',
  database: 'employee_db',
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  mainMenu();
});


function mainMenu() {
  inquirer.prompt([
      {
          type: "list",
          message: "What would you like to do?",
          name: "choice",
          choices: [
              "View Employees",
              "Add Employee",
              "Update Employee Role",
              "Quit"                
          ]
      }
  ])
  .then(function(answer) {
    if(answer.choice === "View Employees") {
      view.viewEmployees();
    }
    else if(answer.choice === "Add Employee") {
      add.addEmployee();
    }      
    // else if(answer.choice === "Update Employee Role") {
    //   update.updateRole();
    // }
    else if(answer.choice === "EXIT") {
      connection.end();
      return
    }
  });
  
};


// //Function to exit Employee Management System
// function quit() {
//   console.log("Employee Management System has been closed");
//   process.exit();
// }



