"use strict";
// convert number to reversed array
// solution
// 1- convert number to string
// 2- split the str into arr
// 3- reverse the arr
// 4- convert the arr to number
function reversedArr(num) {
    if (num === 0)
        return 0;
    let str = num.toString();
    let arr = str.split('');
    let reversedArr = arr.reverse();
    let numArr = reversedArr.map(num => Number(num));
    return numArr;
}
console.log(reversedArr(12345));
//# sourceMappingURL=convertNumToRevArr.js.map