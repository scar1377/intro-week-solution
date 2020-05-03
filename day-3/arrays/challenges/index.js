function getLastItem(array) {
  return array[array.length - 1];
}
// should return the last item from an array

console.log("getLastItem() returns the last item in an array");
try {
  check(getLastItem).whenCalledWith(["a", "b", "c", "d"]).returns("d");
  check(getLastItem).whenCalledWith(["apple", "banana", "pear", "kiwi"]).returns("kiwi");

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function getLastNItems(array, n) {
  // return an array with the last n items of the array
  if (n === 0) return [];
  return array.slice(-n);
}

console.log("getLastNItems() returns the last n items in an array");
try {
  check(getLastNItems).whenCalledWith(["a", "b", "c", "d"], 2).returns(["c", "d"]);
  check(getLastNItems).whenCalledWith(["apple", "banana", "pear", "kiwi"], 0).returns([]);
  check(getLastNItems).whenCalledWith(["apple", "banana", "pear", "kiwi"], 3).returns(["banana", "pear", "kiwi"]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function removeItem(array, n) {
  array.splice(n, 1);
  return array;
  // return a new array without the item on position 'n', effectively removing it from the array
}

console.log("removeItem() removes an item at a given index");
try {
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 2).returns(["a", "b", "d"]);
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 0).returns(["b", "c", "d"]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
  // return a new array with all the elements of arr1 followed by all the elements of arr2
}

console.log("mergeArrays() will concatenate two arrays together");
try {
  check(mergeArrays).whenCalledWith(["a", "b"], ["c", "d"]).returns(["a", "b", "c", "d"]);
  check(mergeArrays).whenCalledWith([1], [3, 5, 7]).returns([1, 3, 5, 7]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function getSandwichFilling(sandwich) {
  return sandwich.slice(1, -1);
  // if an array is like a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
}

console.log("getSandwichFilling() returns the inner elements of an array");
try {
  check(getSandwichFilling).whenCalledWith(["a", "b", "c", "d"]).returns(["b", "c"]);
  check(getSandwichFilling).whenCalledWith([10, 20, 30, 40, 50, 60]).returns([20, 30, 40, 50]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function accessItem(array, index) {
  return array[index % array.length];
  // should access an array element at a specified index position
}

console.log("accessItem() can retrieve an item inside in an array with a given index");
try {
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 2).returns("c");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 0).returns("a");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 4).returns("a");

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function isEmptyArray(array) {
  return array.length === 0;
}

console.log("isEmptyArray() checks if an array is empty");
try {
  check(isEmptyArray).whenCalledWith([]).returns(true);
  check(isEmptyArray).whenCalledWith(["a", "b", "c", "d"]).returns(false);
  check(isEmptyArray).whenCalledWith(["a"]).returns(false);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function howManyArguments(...args) {
  return args.length;
}

console.log("howManyArguments() returns the number of items passed on a single call");
try {
  check(howManyArguments).whenCalledWith("a", "b", "c").returns(3);
  check(howManyArguments).whenCalledWith().returns(0);
  check(howManyArguments).whenCalledWith(1, 2, 3, 4, 5).returns(5);
  check(howManyArguments).whenCalledWith("the", "meaning", "of", "life", "is", 42).returns(6);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function updatePosition(coordinates, direction) {
  const [x, y] = coordinates;
  if (direction === "up") return [x, y + 1];
  if (direction === "down") return [x, y - 1];
  if (direction === "left") return [x - 1, y];
  if (direction === "right") return [x + 1, y];
}

console.log("updatePosition() checks if an array is empty");
try {
  check(updatePosition).whenCalledWith([10, 10], "up").returns([10, 11]);
  check(updatePosition).whenCalledWith([0, 0], "down").returns([0, -1]);
  check(updatePosition).whenCalledWith([3, 3], "left").returns([2, 3]);
  check(updatePosition).whenCalledWith([7, 50], "right").returns([8, 50]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function addCoins(coinCollection, money) {
  const [slot1p, slot2p, slot5p, slot10p] = coinCollection;
  if (money === "1p") slot1p.push(money);
  if (money === "2p") slot2p.push(money);
  if (money === "5p") slot5p.push(money);
  if (money === "10p") slot10p.push(money);
  return coinCollection;
}
console.log("addCoins() will update the coins in a given slot");

try {
  check(addCoins)
    .whenCalledWith([[], [], [], []], "1p")
    .returns([["1p"], [], [], []]);

  check(addCoins)
    .whenCalledWith([[], [], [], []], "2p")
    .returns([[], ["2p"], [], []]);

  check(addCoins)
    .whenCalledWith([[], ["2p"], [], []], "2p")
    .returns([[], ["2p", "2p"], [], []]);

  check(addCoins)
    .whenCalledWith([[], [], [], []], "5p")
    .returns([[], [], ["5p"], []]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

function check(func) {
  const methods = {
    whenCalledWith(...args) {
      this.args = args;
      return this;
    },
    isEqualTo(expected) {
      const { actual } = this;

      if (typeof actual === "object" && typeof expected === "object") {
        if (!checkDeeplyEqual(actual, expected)) {
          throw new Error(
            `${JSON.stringify(actual)}\n is not equal to the expected value of \n${JSON.stringify(expected)}`
          );
        }
      } else if (actual !== expected) throw new Error(`${actual} is not equal to the expected value of ${expected}`);
    },
    returns(expected) {
      const actual = this.func(...this.args);
      if (typeof actual === "object" && typeof expected === "object") {
        if (!checkDeeplyEqual(actual, expected)) {
          throw new Error(createFeedback(this.func.name, actual, expected));
        }
      } else if (actual !== expected) throw new Error(createFeedback(this.func.name, actual, expected));
    },
  };
  const obj = Object.create(methods);
  if (typeof func === "function") obj.func = func;
  else obj.actual = func;
  return obj;
}

function checkDeeplyEqual(coll1, coll2) {
  if (typeof coll1 !== "object" || typeof coll2 !== "object") return coll1 === coll2;

  if (Object.keys(coll1).length !== Object.keys(coll2).length) return false;

  if (Array.isArray(coll1) !== Array.isArray(coll2)) return false;

  for (let key1 in coll1) {
    if (!(key1 in coll2)) return false;
    if (!checkDeeplyEqual(coll1[key1], coll2[key1])) return false;
  }
  return true;
}

function createFeedBackString(item) {
  const lookup = {
    string: (item) => `"${item}"`,
    object: (item) => JSON.stringify(item),
    undefined: (x) => x,
    boolean: (x) => x,
    number: (x) => x,
  };
  return lookup[typeof item](item);
}

function createFeedback(name, actual, expected) {
  const actualString = createFeedBackString(actual);
  const expectedString = createFeedBackString(expected);

  const feedback = `${name}'s return value was ${actualString}, but it should be ${expectedString}`;
  return feedback;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
