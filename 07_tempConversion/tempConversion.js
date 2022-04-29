const ftoc = function(farenheit) {
  return Math.floor(((farenheit - 32) * (5/9)) / 10);
};

const ctof = function(celcius) {
  return Math.floor(((celcius * (5/9)) + 32) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};