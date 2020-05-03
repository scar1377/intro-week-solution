// getLastItem() should return the last item from an array

console.log("getLastItem() returns the last item in an array");
try {
  check(getLastItem).whenCalledWith(["a", "b", "c", "d"]).returns("d");
  check(getLastItem).whenCalledWith(["apple", "banana", "pear", "kiwi"]).returns("kiwi");

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// getLastNItems() return an array with the last n items of the array

console.log("getLastNItems() returns the last n items in an array");
try {
  check(getLastNItems).whenCalledWith(["a", "b", "c", "d"], 2).returns(["c", "d"]);
  check(getLastNItems).whenCalledWith(["apple", "banana", "pear", "kiwi"], 0).returns([]);
  check(getLastNItems).whenCalledWith(["apple", "banana", "pear", "kiwi"], 3).returns(["banana", "pear", "kiwi"]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// removeItem() returns a new array without the item on position 'n', effectively removing it from the array

console.log("removeItem() removes an item at a given index");
try {
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 2).returns(["a", "b", "d"]);
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 0).returns(["b", "c", "d"]);
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 1).returns(["a", "c", "d"]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// mergeArrays() returns a new array containing all of arr1 and arr2's elements

console.log("mergeArrays() will concatenate two arrays together");

try {
  check(mergeArrays).whenCalledWith(["a", "b"], ["c", "d"]).returns(["a", "b", "c", "d"]);
  check(mergeArrays).whenCalledWith([1], [3, 5, 7]).returns([1, 3, 5, 7]);
  check(mergeArrays).whenCalledWith(["x", "y", "z"], [1, 2, 3, 4]).returns(["x", "y", "z", 1, 2, 3, 4]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// if an array is like a sandwich, the first and last items are the bread
// getSandwichFilling() should return an array with the filling of the sandwich

console.log("getSandwichFilling() returns the inner elements of an array");
try {
  check(getSandwichFilling).whenCalledWith(["a", "b", "c", "d"]).returns(["b", "c"]);
  check(getSandwichFilling).whenCalledWith([10, 20, 30, 40, 50, 60]).returns([20, 30, 40, 50]);
  check(getSandwichFilling).whenCalledWith(["northcoders", "are", "the", "best"]).returns(["are", "the"]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// isEmptyArray() should return a boolean checking if an array is empty

console.log("isEmptyArray() checks if an array is empty");
try {
  check(isEmptyArray).whenCalledWith([]).returns(true);
  check(isEmptyArray).whenCalledWith(["a", "b", "c", "d"]).returns(false);
  check(isEmptyArray).whenCalledWith(["a"]).returns(false);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// howManyArguments() should return the number of arguments passed into the function
// HINT: For this one you should look at notes.md

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

// updatePosition() takes an array representing coordinates - an x position and a y position - and a direction. It shouuld return a new pair of coordinates with the coordinates array updated by moving either 1 unit in a particular direction.

// If direction is up it should move 1 unit up (+ 1 in the y direction)
// If the direction is down it should move 1 unit down (- 1 in the y direction)
// If the direction is right it should move 1 unit right (+ 1 in the x direction)
// If the direction is left it should move 1 unit left (- 1 in the x direction)

console.log("updatePosition() updates a co-ordinates array");
try {
  check(updatePosition).whenCalledWith([10, 10], "up").returns([10, 11]);
  check(updatePosition).whenCalledWith([0, 0], "down").returns([0, -1]);
  check(updatePosition).whenCalledWith([3, 3], "left").returns([2, 3]);
  check(updatePosition).whenCalledWith([7, 50], "right").returns([8, 50]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// in this task, addCoins() will take a "coin collection" which is an array consisting of 4 other nested arrays
// each nested array represents a slot in the coin collection in the following way:
//  1p   2p   5p   10p
// [[],  [],  [],  []] <-- coinCollection
// addCoins() will take the coinCollection and some money and will need to update a slot with some of the coins at a given // position

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

  check(addCoins)
    .whenCalledWith([["1p"], [], [], ["10p", "10p"]], "2p")
    .returns([["1p"], ["2p"], [], ["10p", "10p"]]);

  check(addCoins)
    .whenCalledWith([[], [], ["5p", "5p"], []], "5p")
    .returns([[], [], ["5p", "5p", "5p"], []]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// accessItem() should access an array element at a specified index position

console.log("accessItem()");
console.log("  can access an item inside in an array with a given index below the array length");
try {
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 2).returns("c");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 0).returns("a");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 3).returns("d");

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

console.log("  can access an item inside in an array with an index equal to or above the array length");
try {
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 4).returns("a");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 6).returns("c");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 10).returns("c");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 11).returns("d");

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

// findDayOfTheWeek() will need to return the day of the week
// in this task,
// 1 -> Monday, 2 -> Tuesday, 3 -> Wednesday, 4 -> Thursday, 5 -> Friday, 6 -> Saturday, 7 -> Sunday

console.log("findDayOfTheWeek() returns the day of the week given a passed number");
try {
  check(findDayOfTheWeek).whenCalledWith(2).returns("Tuesday");
  check(findDayOfTheWeek).whenCalledWith(3).returns("Wednesday");
  check(findDayOfTheWeek).whenCalledWith(1).returns("Monday");

  check(findDayOfTheWeek).whenCalledWith(6).returns("Saturday");
  check(findDayOfTheWeek).whenCalledWith(7).returns("Sunday");

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function extractNumber(code) {
  return +code.match(/\d+/)[0];
}

console.log("extractNumber() should return the number buried inside a string of random characters");

try {
  check(extractNumber).whenCalledWith("lasjdasasj(123)asljdlajk").returns(123);
  check(extractNumber).whenCalledWith("qwasdaoyer(44687)iuwyeibasdahgsd").returns(44687);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(19827)iusdfsdfsd").returns(19827);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5601)iusdfsdfsd").returns(5601);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(29)iusdfsdfsd").returns(29);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5)iusdfsdfsd").returns(5);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(513)iusdfsdfsd").returns(513);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
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
