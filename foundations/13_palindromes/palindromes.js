const palindromes = function (string) {
    let clean = string.toLowerCase().match(/\w/gi).join("");
    return clean == clean.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;