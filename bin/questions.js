 import inquirer from 'inquirer';
 
const answers = await inquirer.prompt([
    {
      type: 'password',
      name: 'hiddenPassword',
      message: 'Enter hidden password:',
      mask: '',
    },
  {
    type: 'confirm',          
    name: 'proceed',          
    message: 'Do you want to continue?',
    default: true,            
    transformer: (input, answers, flags) => {
      return input ? '✅ Yes' : '❌ No';
    },
  }, 
  {
    type: 'editor',
    name: 'edition',
    message: 'Edit the following content:',
    default: 'Hello, World!',
    waitForUserInput: false,
  },
  {type: "expand",
    name: "overwrite",
    message: "Conflict on `file.js`:",
    choices: [ { key: "y", name: "Overwrite", value: "overwrite" },
      { key: "a", name: "Overwrite all next", value: "overwrite_all" },
      { key: "d", name: "Show diff", value: "diff" },
      new inquirer.Separator(),
      { key: "x", name: "Abort", value: "abort" }
    ]
  },
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
  },
  {
        type: 'rawlist',
        name: 'size',
        message: 'What size do you need?',
        choices: [
            { name: 'Jumbo', value: 'jumbo' },
            { name: 'Large', value: 'large' },
            { name: 'Standard', value: 'standard' },
            { name: 'Medium', value: 'medium' },
            { name: 'Small', value: 'small' },
            { name: 'Micro', value: 'micro' },
        ],
when: (answers) => answers.action === 'order',
    },
    { type: 'checkbox',
        name: 'topping',
            message: 'What extra toppings do you want?',
                choices: [
                    { name: 'cheese', value: 'Cheese' },
                    { name: 'pepperoni', value: 'Pepperoni' },
                    { name: 'onion', value: 'Onion' },
                    { name: 'mushrooms', value: 'Mushrooms' },
                    { name: 'pineapple', value: 'Pineapple' },
                ],
    },
]);

console.log('Your answer:', answers.proceed);
console.log('Password set successfully!');
console.log(answers);
console.log(answers);
console.log('Order has submitted!');