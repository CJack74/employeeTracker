//Dependencies
const inquirer = require("inquirer")
const mysql = require("mysql")
const ctable = require("console.table")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306, // default for mysql
    user: "root",
    password: 'Password',
    database: 'employee_db',
});

