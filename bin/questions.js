import inquirer from 'inquirer';

const answers = await inquirer.prompt([
  {
    type: 'confirm',           
    name: 'proceed',           
    message: 'Do you want to continue?', 
    default: true,            
    transformer: (input, answers, flags) => {
      return input ? '✅ Yes' : '❌ No';
    },
  },
]);

console.log('Your answer:', answers.proceed);