# Arrays

## Primitives

JavaScript has 6 primitive data-types : number, string, boolean, undefined, null and Symbol. These data types are the fundamental categories we use in the programming language. We can use variables to store values with different data types in the following way:

```js
const item = "apple";
```

---

## Storing multiple items

Consider a situation where we want to create mulltiple variables that represents a **list of data**:

```js
const item0 = "apple";
const item1 = "banana";
const item2 = "strawberry";
```

We could continue to create variables in this way: however, we would have to keep declaring new variables every time we wanted to add something to this list. Instead we can think of storing this data in a single **data structure**

---

## Declaring arrays

🔑 A JavaScript array is an **ordered collection of data**.

We could create an array in the following way:

```js
const items = ["apple", "banana", "strawberry"];
```

`items` is an array containing 3 items - the strings, `"apple"`,`"banana"` and `"strawberry"`

---

## Zero indexing
