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
     {type: 'list', name: 'license', message: 'choose your license', choices: ['GPL 3.0', 'GNU', 'MIT', APACHE 2.0]},
     {type: 'input', name: 'email', message: 'input email address.'},
     {type: 'input', name: 'project', message: 'whats the name of your project?'},
     {type: 'input', name: 'discription', message: 'discribe your project.'},
     {type: 'input', name: 'github', message: 'what is your username?'},
     {type: 'input', name: 'install', message: 'how do you install your project?'}
     {type: 'input', name: 'test', message: 'which command do you use to run it?'},
     {type: 'input', name: 'contributers', message: 'how should users contribute?'},
// Function call to initialize app
init();

