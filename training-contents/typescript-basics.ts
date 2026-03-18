/**
 * ==========================================================
 * TYPESCRIPT QUICK OVERVIEW
 * This file demonstrates:
 * - let and const
 * - functions with parameters and return types
 * - condition statements
 * - loops
 * - exception handling
 * - classes with constructor, fields
 * - instance methods
 * - static methods
 * ==========================================================
 */


/**
 * ----------------------------------------------------------
 * 1. VARIABLE DECLARATION
 * ----------------------------------------------------------
 */

// let -> value can change
let age: number = 30
age = 31

// const -> value cannot be reassigned
const country: string = "India"

// Type inference (TypeScript automatically detects type)
let city = "Chennai"

console.log("Age:", age)
console.log("Country:", country)
console.log("City:", city)



/**
 * ----------------------------------------------------------
 * 2. FUNCTION WITH PARAMETERS AND RETURN TYPE
 * ----------------------------------------------------------
 */

// Function that adds two numbers
function addNumbers(a: number, b: number): number {
    return a + b
}

let result = addNumbers(10, 20)
console.log("Addition Result:", result)



/**
 * ----------------------------------------------------------
 * 3. CONDITION STATEMENTS
 * ----------------------------------------------------------
 */

let marks: number = 75

if (marks >= 90) {
    console.log("Grade: A")
} 
else if (marks >= 70) {
    console.log("Grade: B")
} 
else {
    console.log("Grade: C")
}



/**
 * ----------------------------------------------------------
 * 4. ITERATIONS / LOOPS
 * ----------------------------------------------------------
 */

// For loop
console.log("For Loop Example")
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i)
}


// Array iteration
let tools: string[] = ["Selenium", "Playwright", "Cypress"]

console.log("Automation Tools:")
for (let tool of tools) {
    console.log(tool)
}



/**
 * ----------------------------------------------------------
 * 5. EXCEPTION HANDLING
 * ----------------------------------------------------------
 */

function divide(a: number, b: number): number {

    try {

        if (b === 0) {
            throw new Error("Division by zero is not allowed")
        }

        return a / b

    } catch (error) {

        console.log("Error occurred:", error)

        return 0
    } finally {
        console.log("Division operation attempted")
    }

}

let divisionResult = divide(10, 2)
console.log("Division Result:", divisionResult)



/**
 * ----------------------------------------------------------
 * 6. CLASS WITH CONSTRUCTOR, FIELDS AND METHODS
 * ----------------------------------------------------------
 */

class Calculator {

    // Fields / properties
    name: string
    version: number

    // Constructor
    constructor(name: string, version: number) {
        this.name = name
        this.version = version
    }

    /**
     * Instance method
     * Requires an object of the class
     */
    multiply(a: number, b: number): number {
        return a * b
    }

    /**
     * Static method
     * Can be called directly using class name
     */
    static getToolInfo(): string {
        return "Utility Calculator Tool"
    }
}



// Creating object (instance) of class
let calc = new Calculator("MyCalculator", 1.0)

console.log("Calculator Name:", calc.name)

let multiplyResult = calc.multiply(4, 5)
console.log("Multiplication Result:", multiplyResult)


// Calling static method
let toolInfo = Calculator.getToolInfo()
console.log("Static Method Output:", toolInfo)
