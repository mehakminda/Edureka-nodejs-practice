var chalk =require('chalk');
//import chalk from './chalk';
console.log(chalk.red("Hi"));
console.log(chalk.red.bgYellow.bold("Hi"));
var design=chalk.magentaBright.bold.inverse;
var x="test";
console.log(design("12"));
// console.log(` Hello ${design(x))}` );
// console.log(` Hi ${design(x)}` );
// console.log(`  ${design(x)} `);