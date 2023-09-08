"use strict";
let hamzahOrderTray = {
    food: "biryani",
};
let okashaOrderTray = {
    food: "biryani",
    drink: "pepsi",
};
// let hamzah: Deal1 = hamzahOrderTray; // No Error
// Stale Object
let hamzah1 = okashaOrderTray; // No Error
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let tube = {
    diameter: 22,
    length: 10
};
ball = tube;
function assignTask(day) {
    if (day === 1 /* Days.MONDAY */) {
        console.log("Admin word");
    }
    else if (day === 2 /* Days.TUESDAY */) {
        console.log("Admin word");
    }
    else if (day === 21 /* Days.THURSDAY */) {
        console.log("Admin word");
    }
    else {
        console.log("else");
    }
}
assignTask(1 /* Days.MONDAY */);
// console.log(Days[1]);
console.log(22 /* Days.FRIDAY */);
