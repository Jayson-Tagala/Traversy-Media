let x;
x = new Date();

x = x.toString();

x = new Date(2021, 6, 10, 12, 30, 0);

x = new Date("2023-12-06T12:30:00");

// Timestamp

x = Date.now();

x = new Date("12-06-2023");
x = x.getTime();
x = x.valueOf();

x = new Date(1701792000000);

x = Math.floor(Date.now() / 1000);
console.log(x);
