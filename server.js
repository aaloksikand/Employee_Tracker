const express = require("express");
const inquirer = require("inquirer"); //Uses the inquirer package
const mysql2 = require("mysql2"); //Uses mysql2 package
const consoleTable = require("console.table"); //users console.table package to print MySQL rows to the console

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql2.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password123",
    database: "hr_db",
  },

  console.log("Connected to the hr_db database.")
);
db.connect(function(err) {
  console.log(err)
})
// GIVEN a command-line application that accepts user input
// WHEN I start the application
function init() {
  inquirer
    .prompt([
      {
        // THEN I am presented with the following options:
        type: "list",
        message: "Please select an option.",
        name: "userChoice",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then(async(answers) => {
      switch (answers.userChoice) {
        case "View all departments":
          // WHEN I choose to view all departments
          // THEN I am presented with a formatted table showing department names
          //and department ids
          let departments = await db.promise().query("SELECT * FROM department") 
            console.table(departments[0]);
            return;

        case "View all roles":
          // WHEN I choose to view all roles
          // THEN I am presented with the job title, role id, the department
          //that role belongs to, and the salary for that role
          //return db.query("SELECT * FROM role", function (err, results) {
          //  console.log(results);
          let roles = await db.promise().query("SELECT * FROM  role")
          console.table(roles[0]);
          return;  
        
        case "View all employees":
          // WHEN I choose to view all employees
          // THEN I am presented with a formatted table showing employee data,
          //including employee ids, first names, last names, job titles,
          //departments, salaries, and managers that the employees report to
          //return db.query("SELECT * FROM employee", function (err, results) {
          //  console.log(results);
          let employees = await db.promise().query("SELECT * FROM employee")
          console.table(employees[0]);
          return;
      
        case "Add a department":
          return addDepartment();

        case "Add a role":
          return addRole();

        case "Add an employee":
          return addEmployee();

        case "Update an employee role":
          return updateEmployee();
      }
    });
  function addDepartment() {
    inquirer
      .prompt([
        //// WHEN I choose to add a department
        // THEN I am prompted to enter the name of the department
        //and that department is added to the database
        {
          type: "input",
          message: "Please enter name of department.",
          name: "departmentName",
        },
      ])
      .then((answers) => {
        let departments = db.promise().query(`INSERT INTO department (dept_name) VALUES (${answers.departmentName})`) 
        console.log("Department added.");    
        console.table(departments[0]);
            return;
      });
  }

  function addRole() {
    var departmentArray = [];
    db.query("SELECT * FROM department", function (err, results) {
      //console.log(results);
    departmentArray = results.map(row => {
      return {
        name: row.dept_name, value: row.id //loop through department
      }
    })
    
    inquirer
    .prompt([
      // WHEN I choose to add a role
      // THEN I am prompted to enter the name, salary,
      //and department for the role and that role is added to the database
      {
        type: "input",
        message: "Please enter name of role.",
        name: "roleName",
      },
      {
        type: "input",
        message: "Please enter annual salary rounding up to nearest whole number.",
        name: "salary",
      },
      {
        type: "list",
        message: "Please associate new role with appropriate department ID.",
        choices: departmentArray,
        name: "departmentChoice",
      },
    ])
    .then((answers) => {
      let roleUpdated = db.promise().query(`INSERT INTO role (title, salary, deptartment_id) VALUES (${answers.roleName}, ${answers.salary}, ${answers.departmentChoice})`) 
        console.log("Role updated.");    
        console.table(roleUpdated[0]);
            return;
      });
    });
  }

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter first name of employee.",
        name: "employeeFirst",
      },
      {
        type: "input",
        message: "Please enter last name of employee.",
        name: "employeeLast",
      },
      {
        type: "list",
        message: "Please select employee role.",
        choice: options,
      },
      {
        type: "list",
        message: "Please select employee manager.",
        name: "managerList",
      },
    ])
    .then((answers) => {
      const role = new Employee(
        answers.first_name,
        answers.last_name,
        answers.role_id,
        answers.manager_id
      );
      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id)"
      );
      VALUES(
        answers.first_name,
        answers.last_name,
        answers.role_id,
        answers.manager_id
      );
      db.query("SELECT * FROM department");
    });
  }
}
init();
