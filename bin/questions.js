import inquirer from 'inquirer';

let answers = await inquirer.prompt([
    {
        type: 'input',
        name: 'action',
        message: 'Would you like to order a pizza? (Please type "order" to continue)',
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
{
    type: 'checkbox',
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

console.log('Order has submitted!');
