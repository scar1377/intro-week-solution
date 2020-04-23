# Functions

We have already seen that functions contain instructions that can perform tasks:

```js
console.log("hello northcoders");
```

The above example is **call** or an **invocation** of a function.
However, `console.log` is an in-built function. We will want to create our functions so that we can carry out tasks in our code.

## Calling functions

Suppose we have a function called `add` that takes **2 inputs**, in this example `10` and `32` and produces an **output** of `42`:

```js
add(10, 32);
```

## Function declarations

We can **declare a function** that will contain the instructions we need in order to fulfil the behaviour of this function.

```js
function add(a, b) {
  return a + b;
}
```

## Anatomy of a function

We can break down the following block of code into different sections:

1. `function` - this is a **keyword** and indicates we are creating a new function

2. `add` - this is the name of the function

3. `(a,b)` - `a` and `b` are said to be **function parameters**, these are placeholders are variable names that refer to the inputs that were passed into the function when it was called.

4. `{}` - we write some curly braces and everything contained inside the curly braces is said to the **body of the function**
   The body of the function contains the set of instructions that will executed when the function `add` is called.

5. `return a + b;` - `return` is a keyword in JavaScript. It used to indicate what our function will **output**.
   The expression `a + b` is the **return value** of the function. The **return value** is essentially the **output** of a function.

## Working with numbers

A function can could perform a check to see if a number has a certain property, for example if a number is even.

```js
function isBiggerThan10(num) {}
```

The **return value** of this function should convey an important piece of information - whether or not a given number is even or odd. We can use a **boolean** as it has a value of either `true` or `false`.

---

## Comparison operators

A comparison operator allows us to compare two numerical values to check a particular relationship:

- statement: "10 is bigger than 11"

This statement can either be **true** or **false**. If we wanted to carry out this check with JavaScript we could write an expression like this:

- JavaScript expression: `10 < 11`, here we are using comparison operator: `<`. The 2 values on either side of the `<` operator will be checked in order to produce a **boolean value**.

```js
10 < 11;
// < is the "less than" comparison operator
// this expression evaluates to or "works out to have the value of" true
```

anat - > define evaluate!
Tricky "work out the value of"
