let x;
let y;

// Concatenation
const name = "Juan";
const age = 23;

x = "Hello, my name is " + name + " and I am " + age + " years old";
// console.log(x);

// Template Literals
y = `Hello, my name is ${name} and I am ${age} years old`; // Template literals (backtick)
// console.log(y);

// String Properties and Methods
let string = "Hello World";

a = string.length;
b = typeof string;

// console.log(a);
// console.log(b);

// Access value by key
c = string[0];

// console.log(c);

// Check if a character exists in the string
d = string.includes("e");

// console.log(d);

e = string.toLowerCase();
f = string.toUpperCase();

// console.log(e);
// console.log(f);

// charAt
g = string.charAt(2);
// console.log(g);

// indexOf
h = string.indexOf("d");
// console.log(h);

// lastIndex
i = string.lastIndexOf("o");
// console.log(i);

// substring
j = string.substring(1, 4);
// console.log(j);

// slice
k = string.slice(3, -1);
// console.log(k);

// trim
l = string.trim();

// replace
m = string.replace(/World/gi, "Universe");
// console.log(m);

// includes
n = string.includes("W");
// console.log(n);

// valueOf
o = string.valueOf();
// console.log(o);
//
// split
p = string.split("");
console.log(p);
