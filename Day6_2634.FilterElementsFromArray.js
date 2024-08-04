/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = []
    arr.forEach((item, i) => {
        if (fn(item, i)){
            filteredArr.push(item)
        }
    })
    return filteredArr;
};