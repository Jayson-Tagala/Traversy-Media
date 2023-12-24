const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log("It is January");
    break;

  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
  case 4:
    console.log("It is April");
    break;
  case 5:
    console.log("It is May");
    break;
  case 6:
    console.log("It is June");
    break;
  case 7:
    console.log("It is July");
    break;
  case 8:
    console.log("It is August");
    break;
  case 9:
    console.log("It is September");
    break;
  case 10:
    console.log("It is October");
    break;
  case 11:
    console.log("It is November");
    break;
  case 12:
    console.log("It is December");
    break;
  default:
    console.log("Not a valid Month!");
}

switch (true) {
  case hour < 12:
    console.log("Good Morning");
    break;

  case hour < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Night");
}
