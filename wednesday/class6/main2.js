"use strict";
// let trafficLight: boolean | "red" | "yellow" | "green" = false;
Object.defineProperty(exports, "__esModule", { value: true });
// trafficLight = 'red';
// trafficLight = false;
// trafficLight = "green";
// trafficLight = "red";
// let firstName = "Hamzah";
// firstName = "Ali"
// const firstName: string | boolean = "Hamzah";
// let firstName = "Hamzah"
// let updatedFirstName = firstName.toUpperCase();
// console.log(updatedFirstName)
// let age = 4;
// let updatedAge = age.toFixed(2);
// console.log(updatedAge);
// let myAge: string | number;
// myAge = 16; // Narrowing
// myAge.toFixed(2)
// myAge = '16';
// myAge.toUpperCase();
// console.log(myAge);
// let age = '16';
// console.log(typeof age)
// function renderValue(val: number | string) {
//     if (typeof val === "string") {
//         val.toUpperCase()
//     }
//     else {
//         val.toFixed(2)
//     }
//     val = 18
//     val;
// } 
// renderValue("Hamzah")
// renderValue(12)
// let age: number | "died" | "unknown";
// age = 90;//OK
// age
// age = "died";//OK
// age
// age = "unknown";//OK
// let teacher = {
//     "first-name": "Zeeshan",
//     experience: "10"
// }
// // console.log(teacher.name);
// let keyName: string = "first-name"
// console.log(teacher["first-name"])
// let student = {
//     name: "Hira",
//     age: 30
// }
// interface ITeacher {
//     name: string
//     salary: number
// }
// // Method #1
// let teacher: ITeacher;
// teacher = {
//     name: "Hamzah",
//     salary: 100000
// }
// // Method #2
// let teacher2: ITeacher = {
//     name: "Hamzah",
//     salary: 100000
// };
// console.log(teacher.salary)
// let firstName = "Hamzah";
// let lastName = 22;
// firstName = lastName;
// console.log(firstName); 
// let teacher1 = {
//     name: "Hamzah",
//     salary: 100000
// }
// let teacher2 = {
//     name: "Okasha",
//     salary: "100"
// }
// teacher1 = teacher2
// interface Deal1 {
//     food: string
// }
// interface Deal2 {
//     food: string
//     drink: string
// }
// let hamzahOrderPlate: Deal1 = {
//     food: "Biryani"
// }
// let okashaOrderPlate: Deal2 = {
//     food: "Biryani",
//     drink: "Pepsi"
// }
// hamzahOrderPlate = okashaOrderPlate; // No Error
// okashaOrderPlate = hamzahOrderPlate // missing property error
// console.log()
const randomeNUm = Math.random() * 10;
console.log(Math.round(randomeNUm));
