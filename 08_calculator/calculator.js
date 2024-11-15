const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  if(array.length === 0)
    return 0;

  let sum = 0;
	for (const num of array) {
    sum += num;
  }

  return sum;
};

const multiply = function(array) {
  if(array.length === 0)
    return 0;

  let sum = 1;
	for (const num of array) {
    sum *= num;
  }

  return sum;
};

const power = function(num1, exponent) {
	return Math.pow(num1, exponent)
};

const factorial = function(num) {
	if(num === 1 || num === 0) return 1;

  let returnNum = 1;
  for(let i = num; i > 1; i--) {
    returnNum *= i;
  }

  return returnNum;

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
