// divisible by four 
// not divisible by 100 unless divisible by 400
function leapYears(number) {
   if (number%4 == 0 && (number%100 != 0 || number%400 == 0)) {return true} else {
    return false}
}

console.log(leapYears(1600))

// Do not edit below this line
module.exports = leapYears;
