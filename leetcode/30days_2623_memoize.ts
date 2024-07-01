type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        // Return memoized value
        if (key in cache) {
            return cache[key];
        }

        const functionOutput = fn(...args);

        // Memoize
        cache[key] = functionOutput;

        return functionOutput;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */