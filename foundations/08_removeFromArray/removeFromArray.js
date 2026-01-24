const removeFromArray = function(array, ...item) {

let string = String(array).replace(/,/g,"").replace(String(item), "");
return Array.from(string, x => Number(x));
};

// Do not edit below this line
module.exports = removeFromArray;
