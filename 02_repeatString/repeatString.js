const repeatString = function (str, num) {
  str = "";
  for (let i = 0; i < num; i++) {
    str += "hey";
  }
  return str;
};

console.log(repeatString("hey", 5));
// Do not edit below this line
module.exports = repeatString;
