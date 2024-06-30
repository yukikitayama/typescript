type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    for (const _ in obj) {
        return false;
    }
    return true;

    // return Object.keys(obj).length === 0;

    // for (let i = 0; i < Object.keys(obj).length; i++) {
    //     return false;
    // }
    // return true;
};