
//this is not part of the overload list, 
//so it has only three overloads
//its customary to order overloads from most specific to least specific
// function add(arg1: string, arg2: string): string;   //option 1
// function add(arg1: number, arg2: number): number;   //option 1
// function add(arg1: string, arg2: number): boolean;   //option 1
// function add(arg1: any, arg2: any): any {
//     if (typeof arg1 === "string" && typeof arg2 === "number") {
//         return arg1 + arg2;
//     } else {
//         return arg1 + arg2;
//     }
// }


// // let result = add(33, "22");

// let result = add("33", 22);
// console.log(result);


// class Person {
//     name: string = "Hamzah";
//     age: number = 22;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

// }

// let hamzahInfo = new Person("Hamzah", 33);

// let aliInfo = new Person("Ali", 44);


// console.log(hamzahInfo);
// console.log(aliInfo);

// console.log(hamzahInfo);


// class Point {
//     x = 0;
//     y = 0;
//   }

//   const pt = new Point();


// class GoodGreeter {
//     readonly name: string;
//     constructor(name: string) {
//         this.name = name;
//     }

//     greet() {
//         console.log("Hello", this.name)
//     }
// }

// let myGreeter = new GoodGreeter("Hamzah")
// myGreeter.name = "Ali";




// class Point {
//     // Overloads
//     constructor(x: number, y: string);
//     constructor(s: string);
//     constructor(s: any, y?: any) {
//         // TBD
//     }
// }

// new Point("Hamzah");


class Person {
    name: string
    constructor(name: string) {
        this.name = name;
    }
}

class Student extends Person {
    grade: number;

    constructor(grade: number, name: string) {
        super(name)
        this.grade = grade;
    }
}
let std = new Student(5, "Hamzah");
std.name

class Teacher {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}


