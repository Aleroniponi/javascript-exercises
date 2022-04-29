//  Original solution

// const palindromes = function (str) {
//   const words = str.toUpperCase().split();
//   const reverse = words.reverse();
//   const matched = words === reverse;
//   return matched;
// };

const palindromes = function(str) {
  processedString = str.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};

// Do not edit below this line
module.exports = palindromes;