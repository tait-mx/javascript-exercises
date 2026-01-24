const removeFromArray = function(array, item) {

let string = String(array).replace(/,/g,"").replace(String(item), "");
return Array.from(string, x => Number(x));
};
// Array.from([1, 2, 3], (x) => x + x);
removeFromArray([1,2,3,4], 3)

// Do not edit below this line
module.exports = removeFromArray;
