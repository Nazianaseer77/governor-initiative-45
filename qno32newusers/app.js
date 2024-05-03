"use strict";
let current_users = ["ayan", "admin", "yasha", "isra", "ishrat"];
let new_users = ["naseer", "abid", "admin", "maham", "hamza"];
new_users.forEach((newuser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newuser.toLowerCase())) {
        console.log(`${newuser} will need to enter a new username`);
    }
    else {
        console.log(`${newuser} is available`);
    }
});
