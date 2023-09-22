"use strict";
// let restParam = (name: string, ...restNames: string[]) => {
//     console.log(restNames)
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// // restParam("Hamzah", "ali")
// restParam("Hamzah", "ali", "arham")
// // restParam("Hamzah", "ali", "arham", "22")
// console.log("Hamzah", "ali", "arham")
// // console.log("Hamzah")
// console.log("First Task");
// for (let i = 0; i < 2000000000; i++) { } 
// console.log("Second Task");
// let parentFunction = (cb: () => void) => {
//     cb()
//     console.log("parent function called")
//     cb()
// }
// let callbackFunc = () => {
//     console.log("Callback function called");
// }
// parentFunction(callbackFunc);
// parentFunction(() => {console.log("hello")})
// console.log("First")
// console.log("Second")
// setTimeout(() => {
//     console.log("Forth");
// }, 3000);
// setTimeout(() => {
//     console.log("Forth");
// }, 1000);
// console.log("Test");
// console.log("Third")
// let orderPizza = (
// resolve: () => void,
//     handleErrorCb: () => void) => {
//     console.log("Order placed");
//     let isBurnt = Math.random() < 0.2;
//     // let isBurnt = true;
//     setTimeout(() => {
//         if (isBurnt) {
//             handleErrorCb()
//         } else {
//             ringBellCb()
//         }
//     }, 5000);
// }
// let errorHandle = () => {
//     console.log("something went wrong!")
// }
// let ringBell = () => {
//     console.log("Your pizza is ready")
// }
// orderPizza(ringBell, errorHandle);
let orderPizza = () => {
    return new Promise((resolve, reject) => {
        let isBurnt = true;
        setTimeout(() => {
            if (isBurnt) {
                reject("Something went wrong");
            }
            else {
                resolve("your pizza is ready");
            }
        }, 5000);
    });
};
// orderPizza()
//     .then((value) => {
//         console.log(value)
//     })
//     .catch(() => {
//         console.log("SOMTHING WENT WRONG!")
//     })
let getOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = yield orderPizza();
        console.log(value);
    }
    catch (err) {
        console.log(err);
    }
});
getOrder();
