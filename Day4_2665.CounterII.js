/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const og = init;
    let curr = init;
    return {
        increment () {
            let val = curr + 1;
            curr = val;
            return val;
        },
        decrement () {
            let val = curr - 1;
            curr = val;
            return val;
        },
        reset () {
            curr = og;
            return og;
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */