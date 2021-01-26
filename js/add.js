var mysql = require("mysql");
var inquirer = require("inquirer");
var view = require("./view");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "employee_db"
});



exports.addEmployee = () => {
    view.getAllRoles(function(rolesResults) {
       var roles = [];
       for(var i = 0; i < rolesResults.length; i++) {
           roles.push(rolesResults[i].title);
       }
        var options = [
         {
             type: "input",
             message: "Employee's First Name",
             name: "firstName",
             default: "First name"
         },
         {
             type: "input",
             message: "Employee's Last Name",
             name: "lastName",
             default: "Last name"
         },
         {
             type: "list",
             message: "Employee's Role",
             name: "role",
             choices: ["Engineer", "Manager", "Quit"]
         }
         ];
 
         inquirer.prompt(options)
         .then((answers) => {
             var roleId = null;
             for(var i= 0; i < rolesResults.length; i++) {
                 if(rolesResults[i].title === answers.role) {
                     roleId = rolesResults[i].role_id
                 }
             }
             connection.query("INSERT INTO employee SET ?",
                 {
                     first_name: answers.firstName,
                     last_name: answers.lastName,
                     role_id: roleId
                 },
             function(err,results) {
                 if(err) throw err;
                 console.log("Successfully added " + answers.firstName + " " + answers.lastName );
                 console.log(results)
             })
         });
     });
 };