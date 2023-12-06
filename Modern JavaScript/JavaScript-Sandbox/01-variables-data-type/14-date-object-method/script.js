let x;

let date = new Date();

x = date.toString();
x = date.getTime();
x = date.valueOf();
x = date.getFullYear();
x = date.getMonth() + 1;
x = date.getDate();
x = date.getHours();
x = date.getMinutes();
x = date.getSeconds();
x = date.getMilliseconds();

x = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

x = Intl.DateTimeFormat("en-US").format(date);
x = Intl.DateTimeFormat("default").format(date);

console.log(x);
