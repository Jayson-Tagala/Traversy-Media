// Falsy Value
/*
- false
- 0
- "" (empty string) are considered falsy values
- null
- undefined
- NaN
*/
const a = false;
const b = 0;
const c = "";
const d = null;
const e = undefined;
const f = NaN;

if (f) {
  console.log("This is truthy");
} else {
  console.log("This is Falsy");
}

// console.log(Boolean(f));

// Truthy Value:
/*
- Everything else that is not falsy
- True
- '0' (0 in a string)
- ' ' (space in a string)
- 'false' (false in a string)
- [] (empty array)
- {} (empty object)
- function () {} (empty function)
*/
//
// const x = " ";
//
// if (x) {
// console.log("This is truthy");
// } else {
// console.log("This is falsy");
// }
//
// console.log(Boolean(x));

// Truthy and Falsy caveats

const children = 3;

if (children !== undefined) {
  // Same as --> // (!isNaN(children))
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

// Checking for empty arrays

const posts = [];
// const posts = ['Post One', 'Post Two'] --> // List Posts

if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No Posts To List");
}

// Checking for empty objects
const user = {
  name: "Juan",
};
// or
// const user = {} --> No User

if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log("No User");
}

// Loose Equality (==)
console.log(false === 0);
console.log("" === 0);
console.log(null === undefined);
