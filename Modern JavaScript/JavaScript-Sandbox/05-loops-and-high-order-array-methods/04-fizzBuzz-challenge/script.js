// FizzBuzz Challenge

// Instructions:

/*
 * Print/log the numbers from 1 to 100
 * For multiples of three print "Fizz" instead of the number
 * For multiples of five print "Buzz"
 * For numbers which are multiples of both three and five print "FizzBuzz".
 */

// Hints:

/*
  If you have taken the course up to this point, then you know how to write loop and output/log something for each iteration.
  You also know how to check for a condition with "if/else/else if". You also know how to get a remainder of a number using the
  modulus operator(%). This is all you need to know to complete this challenge. Good luck!
  */

// USING FOR LOOP

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// USING WHILE LOOP

let j = 1;

while (j <= 100) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log("FizzBuzz");
  } else if (j % 3 === 0) {
    console.log("Fizz");
  } else if (j % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(j);
  }

  j++;
}
