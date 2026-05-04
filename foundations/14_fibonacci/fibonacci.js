const fibonacci = function(n) {
    let fibo1 = 0;
    let fibo2 = 1;
    let fibo3;
    n = +n;
    
    if (n < 0) {fibo3 = "OOPS"};
    if (n == 0) {fibo3 = 0}
    if(n == 1) {fibo3 = 1} else {
    for(let i = 1; i < n; i++) {
        fibo3 = fibo1 + fibo2
        fibo1 = fibo2;
        fibo2 = fibo3
    }
}
    return fibo3
};



// Do not edit below this line
module.exports = fibonacci;