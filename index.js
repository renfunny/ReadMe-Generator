// Packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown.js`);

// Array of questions for user input
const questions = [
  {
    name: `Title`,
    message: `What is the title of your project?`,
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log(`Please enter the title of your project`);
        return false;
      }
    },
  },
  {
    name: `Description`,
    message: `Provide a short description explaining the what, why and how of your project. Use the following questions as a guide:
    - What was your motivation?
    - Why did you build this project?
    - What problem does it solve?
    - What did you learn?`,
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log(`Please enter a short description of the project`);
        return false;
      }
    },
  },
  {
    name: `Installation`,
    message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log(
          `Please specify the steps required to install your project`
        );
        return false;
      }
    },
  },
  {
    name: `Usage`,
    message: `Provide instructions and examples for use of this project`,
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log(`Please specify how to use this project`);
        return false;
      }
    },
  },
  {
    type: `checkbox`,
    name: `License`,
    message: `Which license would you like for this project?`,
    choices: [`Apache2.0`, `MIT`, `AGPLv3`, `None`],
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log(`Please choose a license for the project`);
        return false;
      }
    },
  },
  {
    name: `Contributing`,
    message: `How would you like users to contribute to your project?`,
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log(`Please choose a license for the project`);
        return false;
      }
    },
  },
  {
    name: `Test`,
    message: `How can a user test this project?`,
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log(`Please choose a license for the project`);
        return false;
      }
    },
  },
  {
    name: `Github`,
    message: `Please enter your Github username`,
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log(`Please enter your Github username`);
        return false;
      }
    },
  },
  {
    name: `Email`,
    message: `Please enter your email`,
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log(`Please enter your Github username`);
        return false;
      }
    },
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`All done! Your README file had been created`);
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((userInput) => {
    console.log(userInput);
    writeToFile(`README.md`, generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
