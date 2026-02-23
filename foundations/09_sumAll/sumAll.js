function sumAll(int1, int2) {
    if (int1 >= 0 &&
        int2 >= 0 &&
        Math.round(int1) === int1 &&
        Math.round(int2) === int2 &&
        typeof (int1) == "number" &&
        typeof (int2) == "number")  {
        let arr = [int1, int2];
        let sum = 0;
        let arrSort = arr.sort((a, b) => a - b);
        for (let i = arrSort[0]; i <= arrSort[1]; i++) {
            sum = sum + i;
        }
        return sum;
    } else {
        return "ERROR"
    }
}

console.log(sumAll(-5, 1))

// Do not edit below this line
module.exports = sumAll;
