"use strict";
// class Person {
//     name: string
//     age: number
//     address: string
//     constructor(name: string, age: number, address: string) {
//         this.name = name
//         this.age = age
//         this.address = address
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class Teacher extends Person {
//     salary: number
//     constructor(salary: number, name: string, age: number, address: string) {
//         super(name, age, address)
//         this.salary = salary
//     }
// }
// let teacher1 = new Teacher(50000, 'john', 20, 'USA')
// console.log(teacher1);
// class Animal {
//     eat(){
//         console.log('Animal is eating..');
//     }
// }
// class Tiger extends Animal {
// }
// let tiger = new Tiger();
// tiger.eat();
// let x: number = 0;
// class C {
//     x: string = "hello";
//     m() {
//         x = 12;
//     }
// }
// class C {
//     private _length = 0;
//     get length() {
//         return this._length;
//     }
//     set length(value) {
//         if (value < 10) {
//             this._length = value;
//         }
//     }
// }
// let obj1 = new C()
// obj1.length = 10
// console.log(obj1.length)
// interface IPerson {
//     name: string
// }
// class Person implements IPerson {
//     name!: string;
//     age!: number
// }
// let person1: Person = new Person()
// console.log(person1.name);
// class Person {
//     name: string
//     age: number
//     address: string
//     constructor(name: string, age: number, address: string) {
//         this.name = name
//         this.age = age
//         this.address = address
//     }
//     eat(raita:boolean) {
//         console.log("Biryani + " , raita);
//     }
// }
// class Teacher extends Person {
//     constructor(name: string, age: number, address: string) {
//         super(name, age, address)
//     }
// }
// class Student extends Person {
//     constructor(name: string, age: number, address: string) {
//         super(name, age, address)
//     }
//     eat(){
//         console.log("Burger");
//         super.eat(false)
//     }
// }
// let teacher1 = new Teacher('john', 20, 'USA')
// teacher1.eat(true)
// let student1 = new Student("ali", 30, "PAK")
// student1.eat()
// class Person{
//     protected name:string = "okasha"
// }
// class Teacher extends Person{
//     updateName(){
//         this.name = "hamza"
//     }
//     displayName(){
//         return this.name
//     }
// }
// let teacher1 = new Teacher()
// teacher1.updateName()
// console.log(teacher1.displayName())
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        Student.serialNo += 1;
    }
}
Student.serialNo = 0;
let student1 = new Student("ali", "12345");
let student2 = new Student("ali", "12345");
let student3 = new Student("ali", "12345");
let student4 = new Student("ali", "12345");
let student5 = new Student("ali", "12345");
let student6 = new Student("ali", "12345");
console.log(Student.serialNo);
