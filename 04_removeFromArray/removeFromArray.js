// const removeFromArray = function(arr, ...args) {
//   for (let n of args) {
//     let newArray = arr.indexOf(args);
//     console.log(newArray);
//   }
//   return arr;
// };

var removeFromArray = function(...args) {
  const array = args[0];
  return array.filter(val => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;