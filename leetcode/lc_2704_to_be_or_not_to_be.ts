type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (anotherVal): boolean => {
            if (val !== anotherVal) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: (anotherVal): boolean => {
            if (val === anotherVal) {
                throw new Error("Equal")
            }
            return true;
        }
    };
}