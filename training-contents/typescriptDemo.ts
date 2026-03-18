/*
============================================================
TYPESCRIPT DEMO FILE
Purpose: Explain why TypeScript is useful
============================================================

Key advantages:
1. Strong typing
2. Compile-time error detection
3. Better IDE support (auto suggestion)
4. Prevent runtime bugs
*/


// ============================================================
// VARIABLE TYPING
// ============================================================

// Explicit typing
let username1: string = "Admin";

let loginAttempts1: number = 3;

let isLoggedIn: boolean = false;


// ❌ This will cause a compile error in TypeScript
// loginAttempts = "five";



// ============================================================
// FUNCTION WITH TYPES
// ============================================================

function login1(user: string, password: string): boolean {

    console.log("Logging in user:", user);

    if (user === "Admin" && password === "admin123") {
        return true;
    }

    return false;
}


// Correct call
let result1 = login1("Admin", "admin123");


// ❌ Wrong parameter type (TypeScript will detect error)
// login1(123, true);



// ============================================================
// CLASS EXAMPLE
// ============================================================

class LoginPageOne {

    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    loginUser(): boolean {

        if (this.username === "Admin" && this.password === "admin123") {
            return true;
        }

        return false;
    }
}

// Create object
let loginPage1 = new LoginPageOne("Admin", "admin123");


// Call method
let loginStatus = loginPage1.loginUser();

console.log("Login Status:", loginStatus);



// ============================================================
// PROPERTY ACCESS
// ============================================================

console.log(loginPage1.username);


// ❌ Wrong property name (TypeScript detects this)
// console.log(loginPage1.usernme);



// ============================================================
// FUNCTION RETURN TYPES
// ============================================================

function addNumbers1(a: number, b: number): number {
    return a + b;
}

let total = addNumbers1(10, 20);


// ❌ TypeScript catches this mistake
// let total2 = addNumbers1("10", "20");



// ============================================================
// ARRAY TYPES
// ============================================================

let roles1: string[] = ["Admin", "User", "Manager"];


// ❌ TypeScript error
// roles1.push(123);



// ============================================================
// INTERFACE EXAMPLE
// ============================================================

interface User {

    username: string;
    password: string;
    role: string;
}

let user: User = {

    username: "Admin",
    password: "admin123",
    role: "Administrator"
};


// ❌ Missing field will cause error
/*
let user2: User = {
    username: "Test"
};
*/


// ============================================================
// SUMMARY
// ============================================================

/*
TypeScript advantages demonstrated:

✔ Prevent wrong variable types
✔ Prevent wrong function parameters
✔ Detect wrong property names
✔ Ensure object structure using interfaces
✔ Catch errors BEFORE runtime
*/
