const express = require('express');
const inquirer = require ('inquirer'); //Uses the inquirer package
const mysql2 = require ('mysql2');  //Uses mysql2 package
const consoleTable = require ('console.table');  //users console.table package to print MySQL rows to the console

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password123',
        database: 'hr_db'
    },

    console.log('Connected to the hr_db database.')
);

// GIVEN a command-line application that accepts user input
// WHEN I start the application
function init(){
    inquirer
        .prompt([
            {   // THEN I am presented with the following options: 
                type: "choice",
                message: "Please select an option.",
                name: "userChoice",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department","Add a role", "Add an employee", "Update an employee role"]
            },
        ])
      
            .then((answers) => {
              switch (answers.userChoice[0]) {
                case "View all departments":
                    // WHEN I choose to view all departments
                    // THEN I am presented with a formatted table showing department names 
                    //and department ids
                return db.query('SELECT * FROM departments', function(err, results) {
                    console.log(results);
                });
                 
                case "View all roles":
                    // WHEN I choose to view all roles
                    // THEN I am presented with the job title, role id, the department 
                    //that role belongs to, and the salary for that role
                return db.query('SELECT * FROM roles', function(err, results) {
                    console.log(results);
                });
                
                case "View all employees":
                    // WHEN I choose to view all employees
                    // THEN I am presented with a formatted table showing employee data, 
                    //including employee ids, first names, last names, job titles, 
                    //departments, salaries, and managers that the employees report to
                return db.query('SELECT * FROM employees', function(err, results) {
                    console.log(results);
                });

                case "Add a department":
                return addDepartment();

                case "Add a role":
                return addRole();
                
                case "Add an employee":
                return addEmployee();
                
                case "Update an employee role":
                return updateEmployee();
                  
                break;
              }
              
            }
            );
 function addDepartment(){
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
        const dept = new Department(
          answers.dept_name
        );
        db.query('INSERT INTO department(dept_name)')
        VALUES
        ($answers.dept_name);
        db.query('SELECT * FROM department');
        })}


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
            choice: options.id,
        },
    ])
    .then((answers) => {
        const role = new Role (
          answers.title,
          answers.salary,
          answers.department_id,
        );
        db.query('INSERT INTO role (title, salary, deptartment_id)')
        VALUES
        (answers.title, answers.salary, answers_department_id);
        db.query('SELECT * FROM department');
        })}
function addEmployee()
{
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
            name: "managerList"
        },
    ])
    .then((answers) => {
        const role = new Employee (
          answers.first_name,
          answers.last_name,
          answers.role_id,
          answers.manager_id,
        );
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id)')
        VALUES
        (answers.first_name, answers.last_name, answers.role_id, answers.manager_id);
        db.query('SELECT * FROM department');
        })}
    
//function updateEmployee()
//{
//    UPDATE produce
//SET name = "strawberry"
//WHERE id = 1;
//}


// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and 
//their new role and this information is updated in the database



//You might also want to make your queries asynchronous. 
//MySQL2 exposes a .promise() function on Connections to upgrade an existing non-Promise connection to use Promises. 
//To learn more and make your queries asynchronous, refer to the npm documentation on MySQL2

//You will be committing a file that contains your database credentials. 
//Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. 
//In upcoming lessons, you will learn how to better secure this password, or you can start researching npm packages 
//now that could help you.



