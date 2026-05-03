


const repeatString = function (string, num) {
    if(num >= 0) {
    let repeat = '';
    for (let i = 0; i < num; i++) { repeat += string };
    return repeat;
    } else {
        return "ERROR";
    }
};

repeatString('hey', -3);


// Do not edit below this line
module.exports = repeatString;
