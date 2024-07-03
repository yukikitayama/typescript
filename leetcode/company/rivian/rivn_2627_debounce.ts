type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeoutId;

    return function(...args) {
        // Calling clearTimeout on undefined or finished timeout does nothing
        // Clear previously set debounced funcion
        clearTimeout(timeoutId);

        // setTimeout calls a function after the time
        timeoutId = setTimeout(() => {
            fn.apply(this, args)
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */