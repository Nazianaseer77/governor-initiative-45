"use strict";
let users = ["ayan", "irtesam", "yasha", "isra", "admin"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log(`Hello ${user}, thank you logging in again`);
    }
}
