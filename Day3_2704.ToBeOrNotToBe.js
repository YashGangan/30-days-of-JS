/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const toBe = (a) => {
        if(a === val) {
            return true;
        } else {
            throw new Error("Not Equal");
        }
    }
    const notToBe = (a) => {
        if(a === val) {
            throw new Error("Equal");
        } else {
            return true;
        }
}
    return {toBe, notToBe}

};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal" should be false but is "Equal"
*/