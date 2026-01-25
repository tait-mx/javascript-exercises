const convertToCelsius = function(degrees) {
  return +((5/9) * (degrees - 32)).toFixed(1)
};

const convertToFahrenheit = function(degrees) {
  return +((degrees * (9/5)) + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
