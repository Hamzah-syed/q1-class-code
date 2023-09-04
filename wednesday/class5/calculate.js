import { Sum } from './add.js';
// import { subtract } from './subtract'
import inquirer from "inquirer";
const num1 = await inquirer.prompt({
    message: "Enter your first number",
    type: "number",
    name: "firstNum"
});
const num2 = await inquirer.prompt([
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNum"
    },
    {
        message: "Enter your second number",
        type: "list",
        choices: ["*", "+"],
        name: "operation"
    },
]);
// console.log(num1.firstNum)
// console.log(num2.secondNum)
let result = Sum(num1.firstNum, num2.secondNum);
console.log(result);
