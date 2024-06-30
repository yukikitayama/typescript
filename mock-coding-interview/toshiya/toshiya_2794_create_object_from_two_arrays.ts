type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function createObject(keysArr: JSONValue[], valuesArr: JSONValue[]): Record<string, JSONValue> {
    const obj: Record<string, any> = {};

    keysArr.forEach((key, index) => {
        if (typeof key !== 'string') {
            key = String(key);
        }

        if (!(key in obj)) {
            obj[key] = valuesArr[index];
        }
    });

    return obj;

    // let ans = {};

    // for (let i = 0; i < keysArr.length; i++) {
    //     let k = String(keysArr[i]);

    //     if (!(k in ans)) {
    //         ans[k] = valuesArr[i];
    //     }
    // }

    // return ans;
};