// String - Sequence of characters. Must be in quotes or backticks
const firstName = "Sara";
const output = firstName;

console.log(output, typeof output);

// Number - Integers as well as floating-point numbers
const age = 30;
const temp = 98.9;
const output1 = temp;

console.log(output1, typeof output1);

// Boolean - Logical entity / true or false
const isStudent = true;
const output2 = isStudent;

console.log(output2, typeof output2);

// Null - Intentional absence of any object value
let nullVar = null;
const output3 = nullVar;

console.log(output3, typeof output3);

// Undefined - A Variables that has not yet been defined / Assigned
let undefinedVar;
const output4 = undefinedVar;

console.log(output4, typeof output4);

// Symbols - Built-in object whose constructor returns a unique symbols
const sym1 = Symbol("symbol");
const sym2 = Symbol();
const symbolArray = [sym1, sym2];
console.log(symbolArray[0], typeof symbolArray[0]);

// BigInt - Numbers that are greater than the 'Number' type can handle
const bigNum = 10n ** 50n;
const output6 = bigNum;
console.log(output6, typeof output6);
