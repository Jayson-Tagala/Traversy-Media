(function () {
  const user = "Juan";
  console.log(user);

  const hello = () => console.log("Hello from the IIFE");
  hello();
})();

(function (name) {
  console.log("Hello " + name);
})("Hiro");
