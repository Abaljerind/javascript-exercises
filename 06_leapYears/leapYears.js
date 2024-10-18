const leapYears = function (year) {
  const yearsDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const yearsDivisibleByFourHundred = year % 400 === 0;

  return yearsDivisibleByFour && (!isCentury || yearsDivisibleByFourHundred);
};

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));
console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
