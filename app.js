const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Temp = require(`./lib/Temp`)
const inquirer = require(`inquirer`);
const path = require(`path`);
const fs = require(`fs`);
​
const OUTPUT_DIR = path.resolve(__dirname, `output`)
const outputPath = path.join(OUTPUT_DIR, `team.html`);
​
const render = require(`./lib/htmlRenderer`);
​
​const employees = []
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​function addEmployee() {
    inquirer
        .prompt({
            type: `list`,
            message: `Should we prepare your team?`,
            choices: [`yes`, `no`],
            name: `initialize`
        }).then((answer) => {

            if (JSON.stringify(answer) == `{"initialize":"yes"}`) {
                inquirer
                    .prompt({
                        type: `list`,
                        message: `What type of employee are you adding?`,
                        choices: [`Manager`, `Engineer`, `Intern`, `Temp`],
                        name: `employeeType`
                    }).then((employeeType) => {
                        switch (JSON.stringify(employeeType)) {
                            case `{"employeeType":"Manager"}`:
                                manager()
                                break
                            case `{"employeeType":"Engineer"}`:
                                engineer()
                                break
                            case `{"employeeType":"Intern"}`:
                                intern()
                                break
                            case `{"employeeType":"Temp"}`:
                                temp()
                                break
                            default:
                                break
                        }


                    })
            } else { console.log(`Congratulations on adding a new team member!`) }
        })
}

// better way to do this without repeating????
function anotherEmployee() {
    inquirer
        .prompt({
            type: `list`,
            message: `Would you like to add another employee?`,
            choices: [`yes`, `no`],
            name: `initialize`
        }).then((answer) => {
            if (JSON.stringify(answer) == `{"initialize":"yes"}`) {
                inquirer
                    .prompt({
                        type: `list`,
                        message: `What type of employee are you adding?`,
                        choices: [`Manager`, `Engineer`, `Intern`, `Temp`],
                        name: `employeeType`
                    }).then((employeeType) => {
                        switch (JSON.stringify(employeeType)) {
                            case `{"employeeType":"Manager"}`:
                                manager()
                                break
                            case `{"employeeType":"Engineer"}`:
                                engineer()
                                break
                            case `{"employeeType":"Intern"}`:
                                intern()
                                break
                            case `{"employeeType":"Temp"}`:
                                temp()
                                break
                            default:
                                break
                        }


                    })
            } else { render(employees) }
        })
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​function manager() {
    console.log(`Let's input your Manager!`)
    inquirer
        .prompt([
            {
                type: "input",
                message: `What is your Manager's name`,
                name: `managerName`
            },
            {
                type: "input",
                message: `What is your Manager's ID number?`,
                name: `managerId`
            },
            {
                type: "input",
                message: `What is your Manager's email?`,
                name: `managerEmail`
            },
            {
                type: "input",
                message: `What is your Manager's office number?`,
                name: `managerNumber`
            }
        ]).then((answers) => {
            const currentManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber, `Manager`)
            employees.push(currentManager)
            anotherEmployee()
        })
}

function engineer() {
    console.log(`Let's input your Engineer!`)
    inquirer
        .prompt([
            {
                type: "input",
                message: `Please enter the engineer's name.`,
                name: `engineerName`
            },
            {
                type: "input",
                message: `Please enter the engineer's ID number.`,
                name: `engineerID`
            },
            {
                type: "input",
                message: `What is your Engineer's email?`,
                name: `engineerEmail`
            },
            {
                type: "input",
                message: `What is your Engineer's Github Username?`,
                name: `engineerGithub`
            }
        ]).then((answers) => {
            const currentEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub, `Engineer`)

            employees.push(currentEngineer)
            anotherEmployee()
        })
}

function intern() {
    console.log(`Let's input your Intern!`)
    inquirer
        .prompt([
            {
                type: "input",
                message: `Please enter the intern's name.`,
                name: `internName`
            },
            {
                type: "input",
                message: `Please enter the intern's ID number.`,
                name: `internID`
            },
            {
                type: "input",
                message: `Please enter the intern's email address.`,
                name: `internEmail`
            },
            {
                type: "input",
                message: `What is the name of the intern's school?`,
                name: `internSchool`
            }
        ]).then((answers) => {
            const currentIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool, `Intern`)

            employees.push(currentIntern)
            
            anotherEmployee()
        })
}

function temp() {
    console.log(`We will begin entering the temp's information.`)
    inquirer
        .prompt([
            {
                type: "input",
                message: `Please enter the temp's name.`,
                name: `tempName`
            },
            {
                type: "input",
                message: `Please enter the temp's ID number.`,
                name: `tempID`
            },
            {
                type: "input",
                message: `Please enter the temp's email address.`,
                name: `tempEmail`
            },
            {
                type: "input",
                message: `Which temp agency is the employee from?`,
                name: `tempAgency`
            }
        ]).then((answers) => {
            const currentTemp = new Temp(answers.tempName, answers.tempID, answers.tempEmail, answers.tempAgency, `Temp`)

            employees.push(currentTemp)
            
            anotherEmployee()
        })
}

addEmployee()
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
