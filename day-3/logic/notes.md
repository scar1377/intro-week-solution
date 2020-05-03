# Conditional logic

## Truthy values

In JavaScript, type coercion is when one value is implicitly converted from one data type into another data type. For example, when using `+` operator is one of the operands is a string then the other value will be coerced (automatically converted) into a string data type before the concatenation operation is carried out.

```js
10 + "5";
// evaluates to "105"
```

In the above example, `10` is coerced into `"10"` before being concatenated with the `"5"`. A similar process can take place where value are coerced into `true` or `false`. A **truthy** value is one that will be coerced into `true` in a situation where a condition is being checked.

It is natural in programming that we will need to make decisions. Given some condition that holds to be true we will want to execute a set of instructions, otherwise we'll do something else. An `if` statement will check a condition to see if a value is **truthy**.

```js
if () {
  // code block
}
```
