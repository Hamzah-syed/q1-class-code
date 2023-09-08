#!/usr/bin/env node
// students 
// let objectName = {
//     "key1": "value1",
//     //     key2: "value2",
//     //     key3: "value3",
// }
``;
// let stduent1 = {
//     name: "hamzah",
//     age: 22,
//     isTeacher: true,
//     englishSubject: {
//         marks: "100%",
//         grade: "A+"
//     },
//     subjects: ["english", "maths"],
// }
// stduent1.subjects[1]
// console.log(stduent1.subjects)
// // let grade = stduent1.englishSubject.grade
// // console.log(stduent1.englishSubject.grade)
// const students = [
//     {
//         studentName: "Hamzah",
//         studentAge: 22
//     },
//     {
//         "studentName": "Hamzah",
//         "studentAge": 22
//     },
//     {
//         "studentName": "Hamzah",
//         "studentAge": 22
//     }
// ]
// const firstName = "Hamzah";
import inquirer from "inquirer";
import { sum } from "./operations/add.js";
let answers = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "number1"
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "num2"
    },
    {
        message: "Select operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    }
]);
if (answers.operator === "+") {
    let result = sum(answers.num1, answers.num2);
    console.log(result);
}
