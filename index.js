const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamArray = [];

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
                message: "What is the team engineer's ID?"
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
                message: "Would you like to add an engineer, add an intern, or finish building your team?",
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
                console.log(teamArray);
            }
        })
}

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
                message: "What is the team interns's ID?"
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
                message: "Would you like to add an engineer, add an intern, or finish building your team?",
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
                console.log(teamArray);
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
            console.log(teamArray);
        }
    })

function buildHTML() {

}