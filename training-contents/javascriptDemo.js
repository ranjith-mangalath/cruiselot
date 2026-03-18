/*
============================================================
JAVASCRIPT DEMO FILE
Purpose: Show lack of type safety
============================================================
*/


// ============================================================
// VARIABLES
// ============================================================

let username = "Admin";

let loginAttempts = 3;


// JavaScript allows changing type
loginAttempts = "five";

console.log(loginAttempts);



// ============================================================
// FUNCTION
// ============================================================

function login(user, password) {

    console.log("Logging in user:", user);

    if (user === "Admin" && password === "admin123") {
        return true;
    }

    return false;
}



// Wrong parameter types
login(123, true);



// ============================================================
// CLASS
// ============================================================

class LoginPage {

    constructor(username, password) {

        this.username = username;
        this.password = password;
    }

    loginUser() {

        if (this.username === "Admin" && this.password === "admin123") {
            return true;
        }

        return false;
    }
}



let loginPage = new LoginPage("Admin", "admin123");


// Wrong property name
console.log(loginPage.usernme);



// ============================================================
// ADD FUNCTION
// ============================================================

function addNumbers(a, b) {

    return a + b;
}


// This will concatenate strings instead of adding numbers
let result = addNumbers("10", "20");

console.log(result); // 1020



// ============================================================
// ARRAYS
// ============================================================

let roles = ["Admin", "User"];

// JavaScript allows mixed types
roles.push(123);

console.log(roles);
