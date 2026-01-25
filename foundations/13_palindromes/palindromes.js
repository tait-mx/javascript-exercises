const palindromes = function (word) {
    let clean = word.replace(/[\p{P}\s]/gu, "");
    let reverse = clean.split("").reverse().join("");
    return clean.toLowerCase() == reverse.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
