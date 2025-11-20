function write(text) {
    process.stdout.write(text);
};

import chalk from "chalk";

write(chalk.red.bgYellow.strikethrough('Hello Biku'));
write(chalk.bgAnsi256(67)('67!'));
write(chalk.bgRgb(255, 28, 98)('HAYY <3'));