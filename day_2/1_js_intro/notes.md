# Introduction to programming

## What is programming ?

Computers require precise instructions in order to perform actions or complete tasks. Humans write programs or software that can then be turned into instructions that computers can understand in order to perform tasks. Programming languages provide a set of rules for writing out instructions that can be used by humans but that will ultimately broken down into precise instructions for a machine

## Programs

A computer program is a set of instructions written for machines to perform. Our program may exist for a whole variety reasons. We can start to think of programs containing instructions that can manipulate update data.

## JavaScript

JavaScript is a dynamic scripted language emerging out of the browser wars in the mid-1990s. Since then over the course of over 2 decades it has rapidly become one of the most popular programming languages in the world.

## Data and functions

A fundamental concept in computer programming is the notion of data and functions. **Data could be anything piece of information** from numbers to strings of text. A function is a **set of instructions** that can be used to do tasks. A large part of programming involves writing functions that will carry out meaningul tasks with data. A more concrete example might be to think of a function called `add`. This function will take in number inputs (some data) and then produce an output. So if we passed in the input values of `10` and `32` into our add function we could expect it to output a value of `42`. It is our task as developers to implement or build functions that will carry out tasks like the one previously mentioned.

---

## Our first program

### `"hello northcoders"`

We can now think about writing our first JavaScript program using some data and a function. We are going to use a file called `example.js` and in it write the following piece of code:

```js
console.log;
```

This is piece of code shows `console.log` an extremely useful function in JavaScript. In order to save time and make it easy for developers to work languages will often come with pre-made functions or tools in order to carry out certain kinds of important work. `console.log` is one such tool or function.

Once we have written the function we can update our code in order to actually **use** the function. Unless we actually write the code to say we are using the function then nothing will happen.
In order to use `console.log` we must then **call** the function which you can think of as meaning "use the function", like below:

```js
console.log("hello northcoders!");
```

The example above consists of 3 different parts:

1. ```js
   console.log;
   ```

- the name of a function, in this case `console.log`

2. ```js
   console.log();
   ```

- parentheses, this notation after the name of a functions means we are **calling the function**

3. ```js
   console.log("hello northcoders");
   ```

---

- an **input**, which is a piece of text called hello northcoders

We can now use our run-time environment NodeJS in order to run this piece of code. We can use the following command:

```bash
$ node example.js
```

Once `example.js` is executed we can see that something has been printed to our console.

🔑 `console.log` is an in-built function we can use in order to print information or data to our console

---

## Strings

The input into our function `console.log` was the following piece of data: `"hello northcoders"`
Any characters enclosed inside quotation marks `"` or `'` is known as a **string**.
We can think of this as type of data used for storing textual information.

```js
"hello northcoders";
```

## Comments

Comments are parts of a program that will be ignored by the computer. Comments in JavaScript are denoted by `//` starting on a line like in the example below:

```js
console.log("hello northcoders");

// this will print the message 'hello northcoders' to the screen
```

We can also create a comment by enclosing text inside `/*` and `*/`. For example,

```js
console.log("hello northcoders");

/*
 this will print the message 'hello northcoders' to the screen
 another comment on here too!
*/
```
