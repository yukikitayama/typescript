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

