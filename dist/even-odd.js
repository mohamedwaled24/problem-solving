"use strict";
// funtio that takes and integer as an argument and returns true if the number is even and false if the number is odd
// solution 1
function evenOdd(num) {
    if (num % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(evenOdd(11));
// solutuon 2
function evenOdd2(num) {
    return num % 2 === 0 ? 'Even' : "Odd";
}
//# sourceMappingURL=even-odd.js.map