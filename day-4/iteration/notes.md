# Iteration

## For Loops
​
A `for loop` can work on a string
```js
const name = "Harry"
```
or an array
​
```js
const vowels = ['a', 'e', 'i', 'o', 'u']
​
```
​
It can work on numbers that are held in arrays too
​
```js
const numbers = [1, 2, 3, 4, 5]
```
​
And just on numbers themselves
​
```js
const myFaveNumber = 6
```
​
It's a powerful tool that allows you to iterate (go through) an array, number or string and do something at each current index (position) of the element.
​
Here's an example..
​
Imagine, I'd like to capitalise each letter in the `name` variable.
​
```js
const name = 'Harry'
for (let i = 0; i < name.length; i++) {
  ....
}
​
```
The first part of the `for loop`
​
```js
let i = 0;
```
is saying start counting from the very beginning of my string. Strings and arrays are 0 indexed in Javascript which means that we start counting from 0 (_the initial expression_).
​
```js
i < name.length;
```
This is saying keep going until you've reached the end of the string (the _condition expression_).

```js
i++
```
This part is making sure that we go through each element of the string one by one (the _increment expression_).

If I wanted to access the very first index in the name variable, outside of using a for loop, I would use square brackets to do this.

```js
const name = 'Harry'

name[0] // 'H'
name[1] // 'a'
name[4] // 'y'

```

Inside of the for loop we can do the same thing but instead of going through an having to access each individual index, we can use the `i` index to access every element we need as we have already made sure that we can do that with the for loop.
```js
const name = 'Harry';
let capitalName = [];

for (let i = 0; i < name.length; i++) {
  const capitalLetter = name[i].toUpperCase();
  capitalName.push(capitalLetter);
}
return capitalName;
```
​
### For loops can also work with numbers.
​
Imagine I wanted to `console.log()` every number up until 5
​
```js
const numberFive = 5

for (let i = 0; i < 5; i++) {
  console.log(i)
}

//output 
// 1
// 2
// 3
// 4
// 5

```
We can't use the `.length` property here because that only exists on arrays and strings. 

## for ... of Loops

For of loops are similar, but expose the items inside an array or string in order, rather than giving you an integer that increments.

```js
const name = 'Harry';
// would also work with ['H', 'a', 'r', 'r', 'y']
let capitalName = [];

for (letter of name) {
  const capitalLetter = letter.toUpperCase();
  capitalName.push(capitalLetter);
}
return capitalName;
```

If you don't need the flexibility of the for loop's conditions, initial statement and manner of incrementing, the `for ... of` loop can simplify the code.

