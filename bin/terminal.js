function write(text) {
    process.stdout.write(text);
};

import chalk from "chalk";

write(chalk.red.bgYellow.strikethrough('Hello Biku'));
write(chalk.bgAnsi256(67)('67!'));
write(chalk.bgRgb(255, 28, 98)('HAYY <3'));

import inquirer from "inquirer";

let answers = await inquirer.prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
},
{
    type: 'input',
    name: 'age',
    message: 'How old ar you?',
},
]);

console.log(`Hello ${answers.name}!!!!!`)
console.log(`You are ${answers.age} years old!`)