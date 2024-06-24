type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void
function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    const timerId = setTimeout(() => {
        fn.apply(null, args);
    }, t);

    const cancelFn = () => {
        clearTimeout(timerId);
    }

    return cancelFn;
}