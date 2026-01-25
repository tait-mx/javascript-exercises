const fibonacci = function (fiboNum) {
    secuence = [0, 1];
    fiboNum = +fiboNum;


    if (fiboNum > 0) {

        for (let i = 1; i <= fiboNum - 1; i++) {
            // size = secuence.length;
            secuence.push(secuence[secuence.length - 1] + secuence[secuence.length - 2]);
        };
        return secuence.findLast(x => x);
    } else if (fiboNum == 0) { return 0}
    else { return "OOPS"}
}
    // Do not edit below this line
    module.exports = fibonacci;
