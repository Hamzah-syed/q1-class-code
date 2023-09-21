"use strict";
// console.log("Task 1");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// for (let i = 0; i < 10000000000; i++) { } 
// console.log("Task 2");
// function parentFunction( cbFunc: () => void ) {
//     cbFunc()
//     console.log("Parent function")
//     cbFunc()
// }
// function cb(){
//     console.log("Callback function")
// }
// // parentFunction( () => {} )
// parentFunction( cb )
// console.log("first")
// console.log("second");
// setTimeout( () => {
//     console.log("Second")
// },  0)
// console.log("mid");
// setTimeout( () => {
//     console.log("third")
// },  0)
// console.log("last");
// for (let i = 0; i < 10000000000; i++) { } 
// console.log("third")
// let orderPizza = (ringBellcb: () => void, handleErrorcb: () => void) => {
//     console.log("Preparing Pizza");
//     let isBurnt = true;
//     setTimeout(() => {
//         if (!isBurnt) {
//             ringBellcb()
//         } else {
//             handleErrorcb()
//         }
//     }, 5000);
//     console.log("Test Console")
// }
// let ringBell = () => {
//     console.log("Your pizza is ready");
// }
// let handleError = () => {
//     console.log("Something went wrong");
// }
// orderPizza(ringBell, handleError);
let makeOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isBurnt = true;
            if (isBurnt) {
                reject("Something went wrong");
            }
            else {
                resolve("Your pizza is ready");
            }
        }, 2000);
    });
};
// makeOrder()
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error))
let getOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield makeOrder();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
});
getOrder();
