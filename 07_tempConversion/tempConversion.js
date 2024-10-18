const convertToCelsius = function (temperature) {
  return +(((temperature - 32) * 5) / 9).toFixed(1);
};

const convertToFahrenheit = function (temperature) {
  return +((temperature * 9) / 5 + 32).toFixed(1);
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
