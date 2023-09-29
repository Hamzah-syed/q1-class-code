// function calc(param1: string, param2: number): number
// function calc(param1: number, param2: string): string
// function calc(param1: number, param2: number): number

// function calc(param1: any , param2: any): any {

//     if(typeof param1 === "string" && typeof param2 === "string") {
//         // ...
//     }


//     console.log(param1 + param2)
// }

// calc(22, "22");
// calc(22, "22");

// calc("22", 22);


// //its customary to order overloads from most specific to least specific
// function add(arg1: any, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3

// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// // add("Hello", "World");
// // add("Hello", 22);
// // add(22, 22);
// add(22, 22);



// function greet(name: string, isHappy: boolean): string {

//     return isHappy ? `Hello, ${name}! 😊` : `Hello, ${name}. 😐`;
// }


// greet("Alex", false)


// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

    // this = {
    // name: string = "hamzah";
    // age: number = 22;
    // }

// }

// let alex = new Person("Alex", 23);
// let hamzah = new Person("hamzah", 22);


// console.log(new Person("Alex", 23))

// class Point {
//     x: number = 2;
//     y: number;
// }

// const pt = new Point();

// pt.x = 0;
// pt.y = 0;

// class GoodGreeter {
//     name: string;
//     constructor() {
//         this.name = "Hamzah";
//     }

//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// let person = new GoodGreeter();
// let person1 = new GoodGreeter();

// person.greet();


// class Point {
//     // Overloads
//     constructor(x: number, y: string);
//     constructor(s: string);
//     constructor(xs: any, y?: any) {
//         // TBD
//     }
// }

// // new Point(22, "hamzah")
// new Point("22")

// class Person{
//     name:string
//     constructor(name:string){
//         this.name = name
//     }
// }

// class Student extends Person {
//     rollNo: number;
//     constructor(name:string, rollNo:number){
//         // this.name = name
//         super(name)
//         this.rollNo = rollNo
//     }
// }

// let std1 = new Student("okasha",1)
// console.log(std1)

// class Teacher {
//     salary:number
//     constructor(name:string,salary:number){
//         // this.name = name
//         this.salary = salary
//     }
// }