// * FOR OF is uses in Arrays while FOR IN uses in Objects * //

const colorObject = {
  color1: "red",
  color2: "blue",
  color3: "green",
  color4: "yellow",
  color5: "white",
};

for (const key in colorObject) {
  console.log(key, colorObject[key]);
}

const colorArr = ["red", "blue", "green", "yellow", "white"];

for (const key in colorArr) {
  console.log(colorArr[key]);
}
