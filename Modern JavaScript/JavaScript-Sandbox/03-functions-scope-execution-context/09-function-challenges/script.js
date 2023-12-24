// Function Challenges

// Challenge 1
// Instructions:
// Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument
// and returns the temperature in celsius.

// For bonus points, write it as a one line arrow function

// Expected Result: console.log(getCelsius(32)); // 0

// Solution 1:
const getCelsius = (F) => ((F - 32) * 5) / 9;
// console.log(getCelsius(32));
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2
// Instructions:
// Create an arrow function called minMax() that takes in an array of numbers and returns
// an object with the minimum and maximum number in array.

// Expected Result:
// console.log(minMax([1, 2, 3, 4, 5])); // {min: 1, max: 5}

// Hints:
// 1. YOu can user Math.min() and Math.max() to get the min and max of list of numbers
// 2. You can use Spread ... operator to spread the values of an array into separated arguments.

// Solution 2:
const minMax = (numbers) => {
  return { min: Math.min(...numbers), max: Math.max(...numbers) };
};

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
// Create an IIFE(Immediately Invoked Function Expression) that takes in the length and width of
// a rectangle outputs it to the console in a message as soon as the page loads

// Expected Result:
// on the page load
// The area of an rectangle with a length of 10 and width of 5 is 50.

// Hints:
// 1. The area of a rectangle is length * width. These should get passed into the IIFE as arguemnts.
// 2. You do not have to return anything from this function, just lo to the console.

// Solution 3:
// (function (length, width) {
// const area = length * width;
// console.log(
// `The area of a rectangle with a length of ${length} and width of ${width} is ${area}.`
// );
// })(10, 5);
//

// Other solution

((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);
