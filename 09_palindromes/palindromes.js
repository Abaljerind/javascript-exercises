const palindromes = function (str) {
  const noPunctuation = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return noPunctuation.split("").reverse().join("") === noPunctuation;
};

console.log(palindromes("racecar"));
console.log(palindromes("ZZZZ car, a man, a maracaz."));
console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
