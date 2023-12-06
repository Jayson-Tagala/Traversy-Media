let x;

const num = new Number(5.4526);

x = num.toString();
x = num.length; // there is no length property in numbers however,
// you can convert it to string to count the digits
x = num.toString().length;
// toFixed - allow you to specify the number of decimals
x = num.toFixed(2);
// toPrecision - used to format a number to a specified precision.
//It is often used with numbers to control the number of significant digits.
x = num.toPrecision(3);
// toExponential - is used to represent a number in exponential notation.
// Exponential notation is a way of expressing a number as the product of a coefficient and a power of 10.
x = num.toExponential(2);
// toLocalString -  is used to format a number, date, or time according to the locale and formatting options of the user's environment.
x = num.toLocaleString("en-US");
// valueOf -  is a default method that is called by various operations to convert an object to its primitive value.
x = num.valueOf(num);

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x, typeof x);
