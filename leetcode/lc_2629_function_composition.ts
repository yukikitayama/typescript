type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return (x: number) => functions.reduceRight((acc, fn) => fn(acc), x);

    // return function(x: number): number {
    //     if (functions.length === 0) {
    //         return x;
    //     }

    //     let ans = x;
    //     for (const func of functions.reverse()) {
    //         ans = func(ans);
    //     }
    //     return ans;
    // }

    // return function(x: number): number {
    //     let res = x;

    //     if (functions.length === 0) {
    //         return res;
    //     } else {
    //         for (let i = functions.length - 1; i >= 0; i--) {
    //             res = functions[i](res);
    //         }
    //         return res;
    //     }
    // }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */