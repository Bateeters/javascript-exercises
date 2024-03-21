const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32)* (5/9);
  
  // need to do this method of rounding because toFixed(1) and parseFloat(number())
  // will give 0.0 for first test and will count it wrong
  celsius = Math.round(celsius*10)/10; 
  return celsius
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius* (9/5))+32;
  fahrenheit = Math.round(fahrenheit*10)/10; 
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
