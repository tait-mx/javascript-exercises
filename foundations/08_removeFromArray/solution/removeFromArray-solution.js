
const removeFromArray = function (array, ...args) {
  const newArray = [];
  array.forEach((item) => {
      newArray.push(item);
    });

  return newArray;
  }
 
console.log(removeFromArray([1, 4, 4, 2, 3], 3, 4, 0))



// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

module.exports = removeFromArray;
