// let fan: boolean | number = 1;

// fan = "false"

// if (fan) {
//     console.log("Fan is On")
// }


// else {
//     console.log("Fan Is Off")
// }



// let myname: string | null;

// myname = null;
// console.log(myname);

// // myname = "zia";
// // console.log(myname);

// // const firstName = "hamzah"

// // let num1 = 2;

// // console.log(num1.toFixed(2))


// // let myAge: string | number;

// // myAge = 16; // narrowing
// // myAge.toFixed(2)

// // myAge = "16"

// // myAge.toUpperCase()



// // let fan: boolean | number = 1;

// // fan = false

// // if (typeof fan === "number") {

// //     fan.toFixed(2)
// //     console.log("Fan is On")
// // }

// // else {

// //     console.log("Fan Is Off")
// // }


// let random = Math.random() * 100
// let roundedVal = Math.round(random)
// // console.log(roundedVal)

// let myAge: number | string

// if (roundedVal > 50) {
//     myAge = 25
//     console.log("This is a number: ", myAge)
// } else {
//     myAge = "25"
//     console.log("This is a string: ", myAge)
// }


// let age = Math.random() > 0.6 ? "60" : 60;

// if (typeof age === "number") {

//     age
// }

// else {
//     age
// }




// let trafficLight: "red" | "green" | "yellow" | 5 = "red"

// trafficLight = 5

// let firstName = "Hamzah"
// firstName = "Ali"

// const  firstName1 = "Hamzah"

// if ( firstName1 === "")

// let teacher = {
//     "first-name": "Zeeshan",
//     experience: "10"
// }

// console.log(teacher.experience);

// console.log(teacher["first-name"]);



// console.log(teacher["experience"]);


// interface IStudent {
//     name: string,
//     age: number
// }

// let student1: IStudent = {
//     name: "Hamzah",
//     age: 28
// }

// let student2: IStudent = {
//     name: "Hamzah",
//     age: 28
// }


// type All = string | number | boolean

// let age: All = ""

// let age1: All = ""

interface Deal1 {
    food: string,
}

interface Deal2 {
    food: string,
    drink: string,
}


let hamzahOrder: Deal1 = {
    food: "Biryani"
}

let shezadOrder: Deal2 = {
    food: "Biryani",
    drink: "Pepsi"
}

hamzahOrder.food

hamzahOrder = shezadOrder;
console.log(hamzahOrder)

// shezadOrder = hamzahOrder



