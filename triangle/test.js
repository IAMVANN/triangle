const scanner = require("readline-sync");
const base = Number(scanner.question("Enter base: "));
const height = Number(scanner.question("Enter height: "));
const hypotenuse = Number(scanner.question("Enter hypotenuse: "));
if (base ** 2 + height ** 2 == hypotenuse ** 2) {
    console.log("\nYes, that's a right triangle!")
} else {
    console.log("\nNope...not a right triangle.")
}
