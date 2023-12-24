const x = 100;

console.log(x, "in global");

function run() {
  console.log(x, "in function");
}

run();

if (true) {
  console.log(x, "in block");
}

function add() {
  const x = 20;
  const y = 50;
  console.log(x + y);
}

add();
