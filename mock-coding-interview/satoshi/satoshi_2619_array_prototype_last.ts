interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function () {
    // Access current array
    if (this.length === 0) {
        return -1;
    } else {
        // Return the last element
        return this[this.length - 1];
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
