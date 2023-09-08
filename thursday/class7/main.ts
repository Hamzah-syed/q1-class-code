// let user1 = {
//     name: "hamzah",
//     age: 18
// }

// let user2 = {
//     name: "Ali",
//     age:22
// }


// user1 = user2

// console.log(user1.name)


interface Deal1 {
    food: string;
}

interface Deal2 {
    food: string;
    drink: string;
}



let hamzahTray: Deal1 = {
    food: "Biryani",
};

let okashaTray: Deal2 = {
    food: "Biryani",
    drink: "Pepsi",
}


// let hamzah: Deal1 = hamzahTray;

//  Stale Object
// let hamzah: Deal1 = okashaTray // NO ERROR

// //  Fresh Object
// let hamzah1: Deal1 = { // Error
//     food: "Biryani",
//     drink: "Pepsi" // No extra property
// }

// // let okasha: Deal2 = hamzahTray

// let okasha: Deal2 = okashaTray



// let okasha: Deal2


interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}

interface Tube {
    diameter: number;
    length: number;
}

// let ball: Ball = {
//     diameter: 50,
// }

// let sphere: Sphere = {
//     diameter: 10
// }

// ball = sphere;
// sphere = ball;

let ball: Ball = {
    diameter: 50,
}

let tube: Tube = {
    length: 20,
    diameter: 50
}

// ball = tube

// tube = ball


// let user1 = { name: "Zia", id: 1 };
// user1 = {id: 2, name:"Hamzah"};

// user1 = {id: 3, firstName: "Hamzah"}


// user1 = {id:4, name:"Hamzah", age:22}


let user1 = { name: "Zia", id: 1 };
let user2 = { name: "Hamzah", id: 2, age: 22 }
let user3 = { firstName: "Hamzah", id: 3 }

// user1 = user3x

// console.log(user1)

// type AllTypes = string | number | boolean
// let a: AllTypes = 10
// let b: AllTypes = "10"

// type Author = {
//     firstName: string;
//     lastName: string;
// };

// type Book = {
//     name: string;
//     author: Author;
// };

// let book: Book = {
//     name: "Javascript",
//     author: {
//         firstName: "Hmaza",
//         lastName: "Syed"
//     }
// }

// console.log(book.author);







// interface Student {
//     student_id: number;
//     name: string;
// }

// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }

// let student1: Student = {
//     name: "Ali",
//     student_id: 1
// }

// let teacher1: Teacher = {
//     teacher_name: "zia",
//     teacher_Id: 1
// }

// type InterSection = Student & Teacher

// let obj: InterSection = {
//     student_id: 1,
//     name: "okasha",
//     teacher_Id: 2,
//     teacher_name: "Hamza"
// }




// let a: any = 10
// a = "abc"
// a = true
// a = { name: "okasha" }
// a = [1, 2, 3]
// a = function () {
//     console.log("abc");
// }



// let b: unknown = 10
// b = "abc"
// b = false
// b = { name: "okasha" }
// b = [1, 2, 2]
// b = function () {

// }


// let c: boolean = a
// let c: boolean = b



// let a = 10
// if (typeof a === "number") {
//     console.log(a);
// }
// else {
//     console.log("else", a);
// }

// type Custom = string & number



// let myname: string = "okasha"
// let myupdatedtype = myname as string
// let myupdatedtype = <string>myname
// let myupdatedtype = myname as unknown as number




const enum TrafficLights {
    RED,
    GREEN = 20,
    YELLOW
}

let redColor: TrafficLights = TrafficLights.RED
let greenColor: TrafficLights = TrafficLights.GREEN

console.log(redColor);

