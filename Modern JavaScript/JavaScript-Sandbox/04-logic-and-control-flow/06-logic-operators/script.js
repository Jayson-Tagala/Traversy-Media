// AND Operator --> using double &(ampersand)'&&' everything has to be true or else it will be always false
console.log(10 > 20 && 30 > 15 && 40 > 30);

// OR Operator '||' --> there is one has to be true to have a true value
console.log(10 > 20 || 30 > 15);

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
b = 10 && 20 && 30;
c = 10 && 0 && 30;
d = 10 && "" && 0 && 30;

console.log(a); // 20
console.log(b); // 30
console.log(c); // 0
console.log(d); // '' Empty String

// Example Uses

const posts = ["Post One", "Post Two"];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last value

let x;
let y;
let z;

x = 10 || 20;
y = 0 || 25;
z = 0 || null || "" || undefined;

console.log(a);
console.log(b);
console.log(c);

/*
?? - returns the right side operand when the left is null or undefined
*/

let i1;
let i2;
let i3;
let i4;
let i5;

i1 = 10 ?? 20;
i2 = null ?? 20;
i3 = undefined ?? 30;
i4 == 0 ?? 30;
i5 == "" ?? 30;

console.log(`i1 is equal to ${i1}`);
console.log(`i2 is equal to ${i2}`);
console.log(`i3 is equal to ${i3}`);
console.log(`i4 is equal to ${i4}`);
console.log(`i5 is equal to ${i5}`);
