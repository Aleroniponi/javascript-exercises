const reverseString = function(str) {
  const splitString = str.split('');
  const reverseString = splitString.reverse();
  const joinedString = reverseString.join('');
  return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
