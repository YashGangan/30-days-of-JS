/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let fun = x
        for (i=functions.length-1; i>=0; i--) {
            fun = functions[i](fun)
        }
        return fun
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */