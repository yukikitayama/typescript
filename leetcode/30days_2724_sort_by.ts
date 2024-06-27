type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    // arr.forEach((element) => fn(element));
    arr.sort((a, b) => fn(a) - fn(b));
    
    // console.log(arr);

    return arr;
};