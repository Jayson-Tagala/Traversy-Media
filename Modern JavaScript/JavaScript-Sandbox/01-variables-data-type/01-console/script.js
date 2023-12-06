console.log(100);

console.log("Hello World");

console.log(20, "Hello World", true);

const x = 100;
// Console log (clg) --> shortcut key
console.log(x);

// Console error
console.error("Alert");

// Console warning
console.warn("Warning");

// Console table --> create a table for objects
console.table({ name: "Jayson", email: "jayson@gmail.com" });

// console group
console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

// Adding CSS style to the console log

const styles = "padding: 10px; background-color: white; color: green";

console.log("%cHello World", styles);
