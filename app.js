const inquirer = require('inquirer')
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(username, github);

// fs.writeFile("./index.html", pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log("page successfully created");
// })

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then((answers) => console.log(answers));