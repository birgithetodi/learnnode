import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    type: "expand",
    name: "overwrite",
    message: "Conflict on `file.js`:",
    choices: [
      { key: "y", name: "Overwrite", value: "overwrite" },
      { key: "a", name: "Overwrite all next", value: "overwrite_all" },
      { key: "d", name: "Show diff", value: "diff" },
      new inquirer.Separator(),
      { key: "x", name: "Abort", value: "abort" }
    ]
  }
]);

console.log(answers);