# Variables

Suppose we are going to use some data in our code like in the following example:

```js
"hello there northcoders!";
```

We could peform several operations on this piece of data (a **string** in this case), like in the following example:

```js
"hello northcoders".toUpperCase();

"hello northcoders".length;

"hello northcoders"[3];
```

However in programming it makes sense for us to store our data in such way that it can be re-used and manipulated throughout our code without us having to do the same operations over and over again. Consider the example below:

```js
"hello northcoders".slice(0, 6);
```

This block of code is designed to access the first word in the string `"hello northcoders"`. However, if we needed to use this piece of data repeatedly throughout our code then we would have to write out this block of code again and again. Instead we can store this data "hello northcoders" in a **variable**

🔑 A variable is used to store a piece of data or information

## Variable declarations

So instead we could create a variable with a name of `firstWord` and this can store the piece of information `"hello northcoders"`

```js
const firstWord = "hello northcoders".slice(0, 6);
```

We can break this piece of code into several parts:

1. `const` this is a **keyword** in JavaScript and indicates we are creating a brand new variable

2. `firstWord` this is the **identifier** or **name** of the variable

3. `=` in JavaScript this symbol has a special meaning and is known as the **assignment operator**
   It is used to assign a value to a particular **variable name**

4. `"hello northcoders".slice(0, 6)` this is an expression which will be assigned to `firstWord`;
