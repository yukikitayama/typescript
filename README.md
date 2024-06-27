# TypeScript

**JavaScript object** serve as vital constructs that group related data and functions together. The functions are considered methods of the object when they reside within it.

**Method chaining**, a function returns an object which includes methods. These methods can be invoked sequentially in a chain-line manner. It's a restricted form of method chaining as they don't return the original object for further chaining. 

**Full method chaining** permits multiple methods to be invoked in a single statement, implemented when each method returns an object, which could be the original object or new object. It's readable and concise, preferred pattern in JavaScript. It allows the next method to be directly invoked on the previous method's result.

**JavaScript error handling** uses `throw` statement to create custom error messages. A common and recommended approach is to throw an **error instance** by `throw new Error("Some message");`. `throw new AggregateError([_, _, ...])` can throw multiple errors at once.

```
function checkName(name) {
  if (name === '') {
    throw "Name can't be empty!";
  }
  return name;
}

try {
  console.log(checkName(''));
} catch (error) {
  console.error(error); // "Name can't be empty!"
}
```

**Higher-order functions** are functions that operate on other functions, either by taking them as arguments or by returning them.

**Factory functions** are functions that return object instances.

**Closure** is the combination of the function and it's environment. Functions have a reference to all variables declared in the same scope as well as any outer scopes. These scopes are function's **lexical environment**. You can declare functions withiin other functions and return them. The inner function has access to any variables declared by outer function. When a function is defined inside another function, a closure is created.

```
function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  }
}
const addTo2 = createAdder(2);
addTo2(5); // 7
```

**Callback** is a function passed as an argument to another function. 

Array

In JavaScript, you can read and write to indices that aren't in the range `[0, arr.length)`, though it's discouraged to do so because it's confusing.

In JavaScript, arrays can have elements appended with an average O(1) time by `arr.push(element)`, and you can build up a transformed array by appending each element to the end one-by-one

For if statements, value wil be **coerced** into a boolean based on it's **truthiness**. This exists because it's convenient. All values are considered **truthy** except the following.
- `false`
- All forms of zero, `0`, `-0`, etc
- `NaN`
- `""` empty string
- `null`
- `undefined`

JavaScript **logical operators** don't return booleans; they return one of the two operands provided to them. The logical operator will return the last value it needed to evaluate.
- `||` OR operator
  - Returns the first value if the first value is truthy without evaluating the 2nd value. Otherwise, it returns the second value
- `&&` AND operator
  - Returns the first value if the first value is falsy without evaluating the 2nd value. Otherwise, it returns the second value.
- `??` Nullish coalescing operator
  - Same as `||` except it only treats `null` and `undefined` as falsy.

```
// Before
let val;
if (a) {
  val = a;
} else if (b) {
  val = b;
} else {
  val = c;
}

// After
const val = a || b || c;

// Before
if (a && b) {
  func();
}

// After
a && b && func();
```

**Reduce** iterates over each value in an array and merges each value into an **accumulator** variable in some way. The first argument is a callback that takes in the current `accumulator` value and each array element and returns a new `accumulator` value. The second argument is the value the `accumulator` is initialized as. The final value of `accumulator` after looping over the entire array is returned.

```
const nums = [1, 2, 3];
const sum = nums.reduce((accumulator, val) => accumulator + val, 0);
console.log(sum); // 6
```

**Function composition** uses the output of one function as the input of another function.

`Array.reduceRight()` method applies a function against an accumulator and each element in the array from right to left to reduce it to a single value. `reduceRight()` simplifies the code and provide functional programming style.

The accumulator is a value that is being built up with each iteration and returned at the end.

**Promise** is the eventual completion (or failure) of an asynchronous operation and allows us to work with the results when they become available. It's a way to handle asynchronous code in an organized and structured manner. Promise provides `.then()` and `.catch()` to handle the resolved values or errors.

Promise has 3 states
- Pending: Initial state. The asynchronous operation is ongoing, hasn't completed yet.
- Fulfilled: Asynchronous operation is successfully completed. Promised result or value is available
- Rejected: Asynchronous operation fails or has an error.

`async` and `await` simplifies working with promise. It makes asynchronous code appear like synchronous code.
- `async`
  - Defines asynchronous function. The function returns a **promise**.
  - **Non-promises returned from async functions are automatically wrapped in promises**.
- `await`
  - Pauses the execution of asynchronous function until a promise is resolved.
  - Can only be used in `async` function
  - **`await` within `async` function allows you to write asynchronous code in a sequential and readable manner, without explicit promise chaining using `.then()`**.

`Promise.all()`
- Handles multiple promises concurrently. 
- It takes array of promises and returns a new promise that resolves when all the promises in array have resolved. 
- It waits for all the promises to settle. 
- **If any of the promises are `rejected`, the returned promise is `rejected` with the reason of the first `rejected` promise**.
- **Allows parallel execution of multiple asynchronous operations and combine the resutls**.
- **Used to fetch data from multiple APIs simultaneously**.

`setTimeout(callback, millisecond)` is a web API method to delay in the code execution. It's a method to call function or evaluate expression after a specified milliseconds. After the millisecond, callback is called.

`setTimeout()` vs. `setInterval()`
- `setTimeout()` executes a function, after waiting the milliseconds
- `setInterval()` repeats a function at every milliseconds time interval

`setInterval(function, delay milliseconds)` is used to repeat executing a function or code snippet with a fixed time delay between each call. It returns **interval ID (unique numeric value)**. The ID can be used later to identigy and control. `clearInterval(intervalID)` to cancel. **`setInterval` doesn't immediately call the function, so you need to manually call the function before setting the interval**.

**Interval cancellation**
- Auto-saving in editing applications
  - Use interval cancellation to schedule auto-saving at regular intervals. If the user explicitly saves the document or exits the app, you can cancel the interval to prevent unnecessaru auto-saving that periodically saves changes.
- Animation and slideshow timinings
- Time-based reminders
  - Once the user acknowledges the reminder or the task is completed, cancel the interval to stop further reminders.

`JSON.parse()` converts JSON string into JavaScript `object`, `array` or primitive value.

To determine the number of elements in anarray, or the number of key-values pairs in an object
- For arrays, use `.length` property
- For objects, use `Object.keys()`, because `length` property isn't available.

```
const spiders = ["Peter", "Gwen", "Miles"];
console.log(spiders.length); // Output: 3

const person = {
  name: "Pavitr Prabhakar",
  age: 17,
  city: "Mumbattan"
};
console.log(Object.keys(person).length); // Output: 3
```

**Prototype** is a sort of template object that is used as the basis for creating other objects. All objects inherit properties and methods from their prototypes. The object can be extended with custom methods or properties.

**Extending a built-in prototype like array can potentially be risky as it might lead to unforeseen behavior if your method name clashes with others. Overriding built-in methods is generally discouraged.

`this` https://leetcode.com/problems/array-prototype-last/editorial/

A crucial concept to grasp in JavaScript is that the `this` value in a function object is usually not fixed. It often varies based on the context in which the function is invoked. The `this` value within a function is typically determined at the time of its execution, rather than at the moment of its definition.

`bind` https://leetcode.com/problems/array-prototype-last/editorial/

`bind` can set the `this` value in methods. This method creates a new function, when invoked, has its `this` keyword set to the provided value. The new function is **permanently bound `this` value, regardless of how the function is later called**. Once you have used `bind` to set the `this` value in a function, it cannot be changed.

`call` https://leetcode.com/problems/array-prototype-foreach/editorial/

`call()` is a predefined JavaScript method to invoke a method with an owner object as an argument. It allows an object to use a method belonging to another object. It allows us to provide `this` argument to a function in addition to the original arguments of the function.

For loop

`for (const element of arr) {}`

**Chunking an array** allows us to divide a large array into smaller, manageable subarrays. It can be used for pagination, parallel processing, or dividing data for distributed systems.

Sorting

`Array.sort()` sorts the elements of an array in place (**mutating** or **in-place** operation). It doesn't work as expected for arrays of numbers and arrays of objects, so need **compare function**. By default, it sorts elements as strings, which can lead to unexpected results when sorting numbers.

Compare function
- Return negative value: `a` should come before `b`
- Return positive value: `a` should come after `b`
- Return 0: `a` and `b` unchanged.

Sort numbers in ascending order by **compare function**. This function subtracts b from a. If a is less than b, a negative value is returned, placing a before b.
```
let numbers = [40, 1, 5, 200];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 40, 200]
```

`Array.prototype.sort()` has **time complexity of `O(NlogN)`** in most JavaScript engines, including V8 (used in Chrome and Node.js).

Examples of stable sort algorithms include Merge Sort and TimSort (used by Python and Java, and also in V8 for arrays longer than 10 elements). On the contrary, QuickSort and HeapSort are examples of unstable sorting algorithms.

