import inquirer from 'inquirer';

const answers = await inquirer.prompt([
  {
    type: 'editor',
    name: 'bio',
    message: 'Write a short bio (at least 3 lines):',
    validate: (text) => text.split('\n').length >= 3 || 'Must be at least 3 lines.',
    waitForUserInput: true,
  },
  {
    type: 'editor',
    name: 'edition',
    message: 'Edit the following content:',
    default: 'Hello, World!',
    waitForUserInput: false,
  },
]);

console.log(answers);