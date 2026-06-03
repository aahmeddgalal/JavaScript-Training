// conditionals
let age = 90

if (age < 0) {
    console.log("Age must be a positive number")
    return 404
} else if (age < 6) {
    console.log("Free Pass")
} else if (age <= 6 && age >= 17) {
    console.log("Child Discount")
} else if (age >= 18 && age <= 26) {
    console.log("Student Discount")
} else if (age >= 27 && age <= 66) {
    console.log("Full Price")
} else {
    console.log("Senior citizen discount")
}