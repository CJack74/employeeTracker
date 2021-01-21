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

function inititialize() {
  console.log("hello") 
  loadPrompts(); 
}

async function loadPrompts() {
  var { options } = await prompt([
    {
      type: "list",
      name: "options",
      message: "What do you need",
      options: [
        {
          name: "View All Employees",
          value: "view-employees"
        },
        {
          name: "View Employees by Department",
          value: "view-employees-department"
        },
        {
          name: "View Employees by Manager",
          value: "view-employees-manager"
        },
        {
          name: "Add a Employee",
          value: "add-employee"
        },
        {
          name: "Update Employee Role",
          value: "update-employee-role"
        },
        {
          name: "View All Roles",
          value: "view-roles"
        },
        {
          name: "Add Role",
          value: "add-role"
        },
        {
          name: "View All Departments",
          value: "view-departments"
        },
        {
          name: "Add Department",
          value: "add-department"
        },
        {
          name: "Quit",
          value: "quit"
        },
      ]
    }
  ]);

  //Path depending on what the user chooses 
  switch (choice) {
    case "view-employees":
      return viewEmployees();
    case "view-employees-department":
      return viewEmployeesDepartment();
    case "view-employees-manager":
      return viewEmployeesManager();
    case "add-employee":
      return addEmployee(); 
    case "update-employee-role":
      return updateEmployeeRole();
    case "view-departments":
      return viewDepartments(); 
    case "add-departments":
      return addDepartments(); 
    case "view-roles":
      return viewRoles();
    case "add-roles":
      return addRoles();  
    default:
      return quit();    
  }
}

// Function for viewing employees in db
async function viewEmployees() {
  var employees = await db.findAllEmployees();

  console.log("\n");
  console.table(employees);

  loadPrompts();
}

// Function for viewing employees by department
async function viewEmployeesDepartment() {
  const departments = await db.findAllDepartments();

  const departmentSelect = departments.map(({ id, name }) => ({
    name: name,
    value: id
  })); 

  const { departmentId } = await prompt([
    {
      type: "list",
      name: "departmentId",
      message: "What department are you searching for employees?",
      select: departmentSelect
    }

  ]);

  const employees = await db.findAllEmployeesByDepartment(departmentId);
  
  console.log("\n");
  console.table(employees);

  loadPrompts();
}

// Function for updating employee's role
async function updateEmployeeRole() {
  const employees = await db.findAllEmployees();

  const employeeSelect = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));

  const { employeeId } = await prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee's role would you like to change?",
      select: employeeSelect
    }
  ]);

  const roles = await db.findAllRoles();

  const roleSelect = roles.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { roleId } = await prompt([
    {
      type: "list",
      name: "roleId",
      message: "Which role do you want to assign the selected employee?",
      select: roleSelect
    }
  ]);

  await db.updateEmployeeRole(employeeId, roleId);

  console.log("Employee's role has been updated");

  loadPrompts();
}

// Function to view role
async function viewRoles() {
  const roles = await db.findAllRoles();

  console.log("\n");
  console.table(roles);

  loadPrompts();
}




  //allows user to ADD departments, roles, and employees

 
  




  //allows user to view department, roles, and employees


  //updates employee roles

