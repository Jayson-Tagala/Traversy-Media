let x;

a = 5 + "5";
b = 5 + Number("5");
c = 5 * "5";
d = 5 + null;
e = Number(null);
f = Number(true);
g = Number(false);
h = 5 + true;
i = 5 + false;
j = 5 + undefined;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);
console.log(h, typeof h);
console.log(i, typeof i);
console.log(j, typeof j);
