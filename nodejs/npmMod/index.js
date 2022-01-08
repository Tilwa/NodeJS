const chalk = require("chalk");
const validator = require("validator");
// console.log(chalk.greenBright.inverse("Success"));

// console.log(chalk.red.inverse("Error"));

const res = validator.isEmail("shahrukhaltaf123@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
