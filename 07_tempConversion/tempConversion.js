const convertToCelsius = function(farenheit) {
    let c = (farenheit - 32) * 5/9;

    c = Math.round(c * 10) / 10;

    return c;
};

const convertToFahrenheit = function(celsius) {
  let f = (celsius * 9/5) + 32;

  f = Math.round(f * 10) / 10;

  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
