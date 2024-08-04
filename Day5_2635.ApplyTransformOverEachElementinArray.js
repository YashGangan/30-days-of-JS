/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const test = [];
    arr.map(
        (ele, i) => test.push(fn(ele, i))
    );
    return test
};