interface Deal1 {
    food: string
}

interface Deal2 {
    food: string;
    drink: string
}

let hamzahOrderTray: Deal1 = {
    food: "biryani",
}

let okashaOrderTray: Deal2 = {
    food: "biryani",
    drink: "pepsi",
}


// let hamzah: Deal1 = hamzahOrderTray; // No Error

// Stale Object
let hamzah1: Deal1 = okashaOrderTray; // No Error

// Fresh Object
// let hamzah: Deal1 = {
//     food: "biryani",
//     drink: "pepsi"
// }



interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}

interface ITube {
    diameter: number;
    length: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;


let tube: ITube = {
    diameter: 22,
    length: 10
}

ball = tube

// tube = ball

// let user1 = { name: "Zia", id: 1 };

// user1 = { id: 2, name: "hamzah" }

// user1 = { id: 2, name: "hamzah" }

// // user1 = {id: 3, firstName: "Ali"}

// // user1 = {id: 4, name: "arham", age: 22}

// let user1 = { name: "Zia", id: 1 };

// let user2 = { 
//     name: "Hamzah Syed", 
//     id: 22, 
//     firstName: "Hamzah", 
// };


// user1 = user2


// type Author = {
//     firstName: string,
//     lastName: string
// }

// let author: Author = {
//     firstName: "okasha",
//     lastName: "aijaz"
// }

// type Author = {
//     firstName: string,
//     lastName: string
// }
// type Book = {
//     name: string,
//     author: Author
// }

// let book1: Book = {
//     author: {
//         firstName: "Hamzah",
//         lastName: "Syed"
//     },
//     name: "Javascript"
// } 


// interface Student {
//     student_id: number;
//     name: string;
//     age: number
// }

// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
//     age: number
// }
// type Intersection = Student & Teacher
// let intersection: Intersection = {
//     name: 'okasha',
//     student_id: 1,
//     teacher_Id: 2,
//     teacher_name: "hamza",
//     age: 12,
// }

// let student: Student = {
//     name: "ali",
//     student_id: 1
// }

// let teacher:Teacher = {
//     teacher_Id:2,
//     teacher_name:"zia"
// }



// let a: any = 10
// a = 20
// a = "20"
// a = { a: "abc" }
// a = [1, 2, 3]


// let b: unknown
// b = 10
// b = "abc"
// b = { ab: "ab" }
// b = [1, 2, 3]
// b = function () {

// }
// b = true

// let c:boolean = a
// let c: boolean = b


// let firstName: string = "okasha"
// if (typeof firstName === "string") {
//     console.log(firstName);
// }
// else {
//     console.log(`else ${firstName}`);
// }


// type Custom = string & number
// let a:Custom = "10"


// let something: unknown = "zia"
// let knownType = something as string
// let knownType = <string>something
// let a = something as unknown as number


const enum Days {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY = 20,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

function assignTask(day: Days) {
    if (day === Days.MONDAY) {
        console.log("Admin word");
    }
    else if (day === Days.TUESDAY) {
        console.log("Admin word");
    }
    else if (day === Days.THURSDAY) {
        console.log("Admin word");
    }
    else {
        console.log("else");
    }
}

assignTask(Days.MONDAY)
// console.log(Days[1]);
console.log(Days.FRIDAY);




