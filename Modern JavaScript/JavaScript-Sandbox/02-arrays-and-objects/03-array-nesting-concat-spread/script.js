let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberries", "blueberries", "raspberries"];

fruits.push(berries);

x = fruits[3][1];

const allFruits = { fruits, berries };
x = allFruits;

x = fruits.concat(berries);

// Spread Operator (...)

x = [...fruits, ...berries];

// Flatten Arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object

x = Array.isArray(fruits);

x = Array.from("12345");

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(y);
