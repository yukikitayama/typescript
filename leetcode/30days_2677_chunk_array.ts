type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const ans: Obj[][] = [];
    let curr: Obj[] = [];

    for (const element of arr) {

        if (curr.length === size) {
            ans.push(curr);
            curr = [];
        }

        curr.push(element);
    }

    if (curr.length) {
        ans.push(curr);
    }

    return ans;

    // let ans = [];
    // let curr = [];
    
    // for (let i = 0; i < arr.length; i++) {
    //     curr.push(arr[i]);

    //     if ((i + 1) % size === 0) {
    //         ans.push(curr);
    //         curr = [];
    //     }
    // }

    // if (arr.length % size !== 0) {
    //     ans.push(curr);
    // }

    // return ans;
};
