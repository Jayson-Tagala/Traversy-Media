// function add(x, y) {
// return x + y;
// }
//
// console.log(add(5, 10));

// Arrow Function Syntax
const add = (x, y) => {
  return x + y;
};

// Implicit Return
const sub = (x, y) => x - y;

// Can leave off () with a single param
const double = (x) => x * 2;

// Return an object
const createObj = () => ({
  name: "Hiro",
});

const number = [1, 2, 3, 4, 5];

number.forEach(function (n) {
  console.log(n);
});
// Arrow function in a callback
number.forEach((n) => console.log(n));

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(double(10));
console.log(createObj());
