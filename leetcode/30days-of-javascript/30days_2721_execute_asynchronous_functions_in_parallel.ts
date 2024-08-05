type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
        // if (functions.length === 0) {
        //     resolve([]);
        //     return;
        // }

        // Initialize 
        const res: T[] = new Array(functions.length).fill(null);

        let resolvedCount = 0;

        functions.forEach((element, index) => {
            element().then((subResult: T) => {
                res[index] = subResult;
                
                resolvedCount++;

                if (resolvedCount === functions.length) {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */