// # Capitalize Challenge

//  Instructions:

// - Take the variable myString and capitalize the first letter of the word using some of the methods
//   that we talk about in the last video. Put the result in a variable called myNewString.

//  Create multiple solutions if you would like.

// Expected Result:
// const myString = 'developer
// console.log(myNewString); // 'Developer'

// * Hints:

// 1. You can use the charAt() method as well as string(index) to get the character at a specific index.
// 2. The .toUppercase() method will make the entire string uppercase
// 3. substring() or slice() will return a specific portion of a string

// My Solution:
const myString = "developer";

const firstLetter = myString.charAt(0).toUpperCase();
// console.log(firstLetter);
const restString = myString.slice(1);
// console.log(restString);
myNewString = firstLetter + restString;
console.log(myNewString);

// Other Solutions

// Solution 1.
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString);

// Solution 2.
myNewString = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString);

// Solution 3.
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString);
