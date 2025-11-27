import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {type: 'input', name: 'sss', message: 'sdasda'},
  {
    type: "list",
    name: "size",
    message: "What size do you need?",
    choices: [
      { name: 'Jumbo', value: 'Jumbo' },
      { name: 'Large', value: 'Large' },
      { name: 'Standard', value: 'Standard' },
      { name: 'Medium', value: 'Medium' },
      { name: 'Small', value: 'Small' },
      { name: 'Micro', value: 'Micro' },
    ],
  }
]);

console.log(answers);