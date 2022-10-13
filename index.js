const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamArray = [];

// Helper function that asks the questions associated with an enginner
const askAboutEngineer = async () => {
    await inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's Github user name?"
            },
            {
                type: "list",
                name: "addMember",
                message: "Would you like to add another engineer, add an intern, or finish building your team?",
                choices: ["Add engineer", "Add intern", "Finish building"]
            },
        ]) 
        .then((answers) => {
            // console.log(answers);
            teamArray.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
            if(answers.addMember === "Add engineer") {
                askAboutEngineer();
            } else if(answers.addMember === "Add intern") {
                askAboutIntern();
            } else {
                // console.log(teamArray);
                buildHTML();
            }
        })
}

// Helper function that asks the questions associated with an intern
const askAboutIntern = async () => {
    await inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the interns's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the interns's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?"
            },
            {
                type: "list",
                name: "addMember",
                message: "Would you like to add an engineer, add another intern, or finish building your team?",
                choices: ["Add engineer", "Add intern", "Finish building"]
            },
        ])
        .then((answers) => {
            // console.log(answers);
            teamArray.push(new Intern(answers.name, answers.id, answers.email, answers.school));
            if(answers.addMember === "Add engineer") {
                askAboutEngineer();
            } else if(answers.addMember === "Add intern") {
                askAboutIntern();
            } else {
                // console.log(teamArray);
                buildHTML();
            }
        })
}

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is the team manager's office number?"
        },
        {
            type: "list",
            name: "addMember",
            message: "Would you like to add an engineer, add an intern, or finish building your team?",
            choices: ["Add engineer", "Add intern", "Finish building"]
        },
    ])
    .then((answers) => {
        // console.log(answers);
        teamArray.push(new Manager(answers.name, answers.id, answers.email, answers.officeNum));
        if(answers.addMember === "Add engineer") {
            askAboutEngineer();
        } else if(answers.addMember === "Add intern") {
            askAboutIntern();
        } else {
            // console.log(teamArray);
            buildHTML();
        }
    })

// Helper function that builds an HTML file titled "team-profile.html" in the dist directory
// The general structure used for the HTML is based on test-layout.html
function buildHTML() {
    let teamCards = ""
    for(let i = 0; i < teamArray.length; i++) {
        let role = teamArray[i].getRole();
        teamCards = teamCards.concat(`
            <div class="col-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body bg-primary text-white">
                        <h5 class="card-title">${role}</h5>
                        <h7 class="card-title">${teamArray[i].getName()}</h7>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamArray[i].getId()}</li>
                        <li class="list-group-item">Email: 
                            <a href="mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a>
                        </li>`);
    
        if(role === "Manager") {
            teamCards = teamCards.concat(`
                        <li class="list-group-item">Office Number: ${teamArray[i].getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>`);
        } else if(role === "Engineer") {
            teamCards = teamCards.concat(`
                        <li class="list-group-item">Github: 
                            <a href="https://github.com/${teamArray[i].getGithub()}">${teamArray[i].getGithub()}</a>
                        </li>
                    </ul>
                </div>
            </div>`);
        } else if(role === "Intern") {
            teamCards = teamCards.concat(`
                        <li class="list-group-item">School: ${teamArray[i].getSchool()}</li>
                    </ul>
                </div>
            </div>`);
        }
}
    fs.writeFile("./dist/team-profile.html", 
    `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>Team Profile</title>
</head>
<body>
    <header class="bg-danger text-white text-center">
        <h1>My Team</h1>
    </header>

    <section class="container">
        <div class="row d-flex justify-content-center">${teamCards}
        </div>
    </section>
</body>
</html>`, 
    (err) => err ? console.error(err) : console.log('Success!'))
}