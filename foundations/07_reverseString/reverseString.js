const reverseString = function(string) {
 let size = string.length - 1;
let final = "";
for (let i = size; i >= 0; --i) {
    final += string[i];
}
return final;

};


// Do not edit below this line
module.exports = reverseString;
