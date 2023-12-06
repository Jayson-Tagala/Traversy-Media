// Number Challenge

// Instructions:
// Create a variable called x that is a random number between 1 and 100 along with a variable
// called y that is a random number between 1 and 50.

// Create a variable for the sum, difference, product, quotient and remainder of x and y. Log the output
// log the output in a string that shows the two numbers of x and y along with the operator and result

// - You can log the output string directly or put them in separated variables and log them like below
// - You can use string concatenation or template literals for the output

// Hints:
// - The Math.Random() function returns a floating-point, pseudo-random number in the range 0 to less than 1
// - The Math.floor() function will round a number down to the nearest integer
const firstNum = Math.floor(Math.random() * 100 + 1);

const secondNum = Math.floor(Math.random() * 50 + 1);

// console.log(firstNum);
// console.log(secondNum);

// Get the Sum
let sum = firstNum + secondNum;
console.log(`${firstNum} + ${secondNum} = ${sum}`);
// Get the Difference
let diff = firstNum - secondNum;
console.log(`${firstNum} - ${secondNum} = ${diff}`);
// Get the Product
let prod = firstNum * secondNum;
console.log(`${firstNum} * ${secondNum} = ${prod}`);
// Get the Quotient
let quo = firstNum / secondNum;
console.log(`${firstNum} / ${secondNum} = ${quo}`);
// Get the Remainder
let rem = firstNum % secondNum;
console.log(`${firstNum} % ${secondNum} = ${rem}`);
