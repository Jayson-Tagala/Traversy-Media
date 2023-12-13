let x;

const arr = [34, 55, 95, 20, 15];

// Push ->Put a value at the end of the array
arr.push(100);
// Pop -> Pop up / delete the value at the end of an array
arr.pop();
// Unshift -> used to add value in the beginning of an array
arr.unshift(23);
// Shift -> Remove and return the first element from an array
arr.shift();
// Reverse -> reverse the array
// arr.reverse();

x = arr.includes(20); // includes -> it will check if there is a same value we are looking inside the array : true | false
x = arr.indexOf(15); // indexOf -> gives the index of the given value of the array
x = arr.slice(1, 4); // slice ->  is used to extract a portion of an array and returns a new array containing the extracted elements.
x = arr.splice(1, 4); //  is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//Unlike slice(), splice() modifies the original array.

console.log(x, arr);
