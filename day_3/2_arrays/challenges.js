function getLastItem(array) {
  const [lastItem] = array.slice(-1);
  return lastItem;
}
// should return the last item from an array

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

try {
  check(getLastNItems).whenCalledWith(["a", "b", "c", "d"], 2).returns(["c", "d"]);
  check(getLastNItems).whenCalledWith(["apple", "banana", "pear", "kiwi"], 0).returns([]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function removeItem(array, n) {
  array.splice(n, 1);
  return array;
  // return a new array without the item on position 'n', effectively removing it from the array
}

try {
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 2).returns(["a", "b", "d"]);
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 0).returns(["b", "c", "d"]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function mergeArrays(arr1, arr2) {
  // return a new array with all the elements of arr1 followed by all the elements of arr2
}

try {
  check(mergeArrays).whenCalledWith(["a", "b"], ["c", "d"]).returns(["a", "b", "c", "d"]);
  check(mergeArrays).whenCalledWith([1], [3, 5, 7]).returns([1, 3, 5, 7]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function getSandwichFilling(sandwich) {
  // if an array is like a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
}

try {
  check(getSandwichFilling).whenCalledWith(["a", "b", "c", "d"]).returns(["b", "c"]);
  check(getSandwichFilling).whenCalledWith([10, 20, 30, 40, 50, 60]).returns([20, 30, 40, 50]);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function accessItem(array, index) {
  // should access an array element at a specified index position
}

try {
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 2).returns("c");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 0).returns("a");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 4).returns("d");

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
  obj.func = func;
  return obj;
}

function checkDeeplyEqual(actualList, expectedList) {
  if (typeof actualList !== typeof expectedList) return false;
  if (actualList.length !== expectedList.length) return false;

  for (let i = 0; i < actualList.length; i++) {
    if (Array.isArray(actualList[i]) && Array.isArray(expectedList[i])) {
      if (!checkDeeplyEqual(actualList[i], expectedList[i])) return false;
    } else {
      if (actualList[i] !== expectedList[i]) return false;
    }
  }

  return true;
}

function createFeedBackString(item) {
  const lookup = {
    string: (item) => `"${item}"`,
    object: (item) => JSON.stringify(item),
    undefined: (x) => x,
  };
  return lookup[typeof item](item);
}

function createFeedback(name, actual, expected) {
  const actualString = createFeedBackString(actual);
  const expectedString = createFeedBackString(expected);

  const feedback = `${name}'s output was ${actualString}, but it should be ${expectedString}`;
  return feedback;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
