const removeFromArray = function (arr, ...num) {
  return arr.filter((item) => !num.includes(item));
};

console.log(removeFromArray([1, 2, "hey", 4], 4, 2, 1));

// Do not edit below this line
module.exports = removeFromArray;
