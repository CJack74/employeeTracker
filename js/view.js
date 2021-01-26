var mysql = require("mysql");
var server = require("../server");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "employee_db"
});

exports.viewEmployees = (cb) => {
    connection.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;
        console.log(results)
        //cb(results);
    });
}


exports.getAllRoles = (cb) => {
    connection.query("SELECT * FROM role", function (err, results) {
        if (err) throw err;
        cb(results);
    });
}

// exports.getAllDepartments = (cb) => {
//     connection.query("SELECT * FROM department", function(err,results) {
//       if(err) throw err;
//       cb(results);
//    });
// }

