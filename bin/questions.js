import inquirer from 'inquirer';

const answers = await inquirer.prompt([
     {
      type: 'password',
      name: 'hiddenPassword',
      message: 'Enter hidden password:',
      mask: '', 
     },
  {
    type: 'password',
    name: 'password',
    message: 'Enter your password:',
    mask: '*',
  },
]);

console.log('Password set successfully!');