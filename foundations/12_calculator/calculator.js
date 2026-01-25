const add = function(num1, num2) {
	return (num1 + num2)
};

const subtract = function(num1, num2) {
  return (num1 - num2)
};

const sum = function(array) {
  let sum = 0;
  for (i = 0; i <= array.length -1; ++i) {
    sum = sum + array[i]
  }
	return sum;
};

const multiply = function(array) {
  let mul = array[0];
  for (i = 1; i <= array.length -1; ++i) {
    mul = mul * array[i]
  }
	return mul;

};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
  let resultado = 1;
  for (let i = 1; i <= num; ++i) {
    resultado = resultado * i;
  }
	return resultado;
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
