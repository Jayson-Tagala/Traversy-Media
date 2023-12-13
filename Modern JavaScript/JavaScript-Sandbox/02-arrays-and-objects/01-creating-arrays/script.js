let x;
// Array Literal
const numbers = [12, 45, 32, 29, 39];
const mixed = [12, "Hello", true, null];

// Array Constructor
const fruits = new Array("apple", "grapes", "pineapple", "orange");

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = "pear";

fruits.push("blueberry");

console.log(fruits);
