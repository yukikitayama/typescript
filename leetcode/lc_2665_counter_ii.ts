type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number
};

function createCounter(init: number): Counter {
    let count = init;

    return {
        increment: () => {
            count += 1;
            return count;
        },
        decrement: () => {
            count -= 1;
            return count;
        },
        reset: () => {
            count = init;
            return count;
        }
    }
};
