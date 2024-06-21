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

**Closure** is the combination of the function and it's environment. Functions have a reference to all variables declared in the same scope as well as any outer scopes. These scopes are function's **lexical environment**. You can declare functions withiin other functions and return them. The inner function has access to any variables declared by outer function.

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

