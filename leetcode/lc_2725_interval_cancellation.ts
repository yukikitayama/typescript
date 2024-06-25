type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    // Before interval, execute immediately
    fn(...args);
    
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Not const cancelFn = clearInterval(intervalId);
    // We need to return function to clear, not result of clearing interval
    const cancelFn = () => clearInterval(intervalId);

    return cancelFn;
};