interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const ans = {};

    for (const item of this) {
        const key = fn(item);

        if (key in ans) {
            ans[key].push(item);
        } else {
            ans[key] = [item];
        }
    }

    return ans;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */