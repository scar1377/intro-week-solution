# Conditional logic

## Truthy values

In JavaScript, type coercion is when one value is implicitly converted from one data type into another data type. For example, when using `+` operator if one of the operands is a string then the other operand will be coerced (automatically converted) into a string data type before the concatenation operation is carried out.

```js
10 + "5";
// evaluates to "105"
```

In the above example, `10` is coerced into the string `"10"` before being concatenated with the `"5"`. A similar process can take place where value are coerced into `true` or `false`. A **truthy** value is one that will be coerced into `true` in a situation where a condition is being checked.

---

## `if` statement

It is natural in programming that we will need to make decisions. Given some condition that holds to be true we will want to execute a set of instructions, otherwise we'll do something else. An `if` statement will check if a condition is **truthy** and if so then some code will be executed:

🔑 `if` statement syntax:

```js
if (/* condition here */) {
  // code in this block will be executed if condition is truthy
}
```

For example,

```js
if (true) {
  console.log("hello northcoders");
}
```

The condition in this example is `true` so the code within the following block will be executed and the `console.log` will be executed, printing something to the terminal. However, anybody expression that evaluates to a **truthy** value can be used as condition in an `if` statement.

```js
const a = 10;
const b = 20;

if (a + b > 0) {
  console.log(`The sum of ${a + b} is bigger than zero`);
}
```

In the above example, the expression `a + b > 0` will evaluate to `true` and the code in the block will be executed.

## Falsy values

**Falsy** values in JavaScript are values that will be coerced (automatically converted) into `false` when used in contexts like an `if` statement. There are 6 **falsy** values in JavaScript: `false`, `null`, `undefined`, `""`, `NaN` and `0`. Consider the following example:

```js
const str = "";
if (str) {
  console.log("hello northcoders!");
}
```

In this context, the `console.log` will not be executed as `str` is assigned a value of `""` and this is **falsy**. When used in the `if` statement here, the empty string will be coereced into `false` and therefore the code inside the block will not be executed.

---

## Logical operators

Sometimes a condition in a program will consist of multiple conditions. For example the condition that "a number is a positive integer" could be said to consist of two conditions: _"a number is positive"_ **and** _"a number is an integer"_. In this example, the word **and** is critical as it means that both conditions must hold true in order for the whole condition to be true.

### `&&`

In JavaScript `&&` is a logical operator, known as the **and** operator. Suppose we have two expressions that check something about a variable `a`:

```js
// condition 1 - check if a number is an integer
Number.isInteger(a);
```

```js
// condition 2 - check if a number is positive ( bigger than or equal to 0 )
a > 0;
```

Suppose now we want to create a new condition that depends on both condition 1 being `s` **and** condition 2 being `true`. This is condition can be created in JavaScript using the `&&` operator written in the following way:

```js
Number.isInteger(a) && a >= 0;
```

The condition above will only evaluate to `true` when both conditions, `Number.isInteger(a) > 0` and `a >= 0` are true.
