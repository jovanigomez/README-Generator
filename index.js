// TODO: Include packages needed for this application
import inquirer from "inquirer";
import * as fs from "fs";
import path from "path";
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
 inquirer
 .prompt([
     {type: 'list', name: 'license', message: 'choose your license', choices: ['GPL 3.0', 'GNU', 'MIT', 'APACHE 2.0']},
     {type: 'input', name: 'email', message: 'input email address.'},
     {type: 'input', name: 'project', message: 'whats the name of your project?'},
     {type: 'input', name: 'discription', message: 'discribe your project.'},
     {type: 'input', name: 'github', message: 'what is your username?'},
     {type: 'input', name: 'install', message: 'how do you install your project?'},
     {type: 'input', name: 'test', message: 'which command do you use to run it?'},
     {type: 'input', name: 'contributers', message: 'how should users contribute?'}
 ])
 
 .then((answers)=> {
     console.log(answers)
     generateFile(answers)
 })

 
 // Function call to initialize app
init();

function generateFile(data) {
    const filePath = path.join(process.cwd(), 'Generated-README.md');
    fs.writeFileSync(filePath, convertToMarkDown(data))
}

function convertToMarkDown(data) {
    return `# Project

    ${data.project}

    ## Description:
    ${data.description}

    ## Table of Context:
    
    -[Installation](#installation)
    -[Contributers](#contributers)
    -[Licenses](#lincenses)
    
    ## Installation:
    ${data.install}

    ## Contributers:
    ${data.contributers}

    ## Licenses:
    ${data.license}

    ## Badge:
    ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

    ## Tests:
    ${data.test}

    ## Email:
    ${data.email}

    ## Github:
    ${data.github}
     `
}