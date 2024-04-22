const add = function(num1, num2) {
	let sum = num1+num2;
  return sum;
};

const subtract = function(num1, num2) {
	let difference = num1 - num2;
  return difference;
};

const sum = function(numbers) {
  const sumOfAllNums = numbers.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return sumOfAllNums;
  };

const multiply = function(numbers) {
  const productOfAllNums = numbers.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return productOfAllNums;
};

const power = function(num1, num2) {
	let exponent = num1**num2;
  return exponent;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
