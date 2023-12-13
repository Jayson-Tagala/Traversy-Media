// Array Challenges

// Challenge 1:

// Introductions:
// Use some of the array methods we looked at to mutate the following array
// to = the expected result bellow:
// const arr [1, 2, 3, 4, 5];

// Expected Result:
//  console.log(arr);
// [6, 5, 4, 3, 2, 1, 0];

// Hint: No Hints. Thi one is pretty easy

let x;

const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);

newArray = arr.reverse();

console.log(arr);

// Challenge 2:

// Combine arr1 and arr 2 into new array called arr3 with the following elements:
// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [5, 6, 7, 8, 9, 10]

// Notice that bott arr1 and arr 2 include the number 5. You will have to find a way to get rid of the extra 5.

// Expected Result:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Hint: There are many ways to do this. but think of the concat() method or the spread operator as
// well as the slice() or splice() method.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);
console.log(arr3);

// Other Solution

const arr4 = arr1.slice(0, 4).concat(arr2);
console.log(arr4);
