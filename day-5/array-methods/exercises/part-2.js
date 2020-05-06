console.log("makeAllUpperCase() can get all the strings from an array");

try {
  check(makeAllUpperCase).whenCalledWith(["a", "b", "c"]).returns(["A", "B", "C"]);
  check(makeAllUpperCase).whenCalledWith(["I", "love", "coding"]).returns(["I", "LOVE", "CODING"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("collectStrings() can get all the strings from an array");
try {
  check(collectStrings).whenCalledWith(["a", "b", "c"]).returns(["a", "b", "c"]);
  check(collectStrings).whenCalledWith(["a", 10, "b", 1000, "c"]).returns(["a", "b", "c"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("getEvenNumbers() can get all the even numbers from an array of numbers");
try {
  check(getEvenNumbers).whenCalledWith([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).returns([2, 4, 6, 8, 10]);
  check(getEvenNumbers).whenCalledWith([9, 100, 13, 20]).returns([100, 20]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("collectPlurals() can collect all the strings ending in an s");
try {
  check(collectPlurals)
    .whenCalledWith(["dogs", "cat", "apples", "kittens", "kiwi"])
    .returns(["dogs", "apples", "kittens"]);

  check(collectPlurals)
    .whenCalledWith(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])
    .returns(["abcs", "humans", "thoughts", "cups"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// creates an array of the given length populated with the given char

console.log("createArray() creates an array of the specified length using a specified character");
try {
  check(createArray).whenCalledWith(3, "!").returns(["!", "!", "!"]);
  check(createArray).whenCalledWith(5, "a").returns(["a", "a", "a", "a", "a"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("deleteManyPasswords() deletes the password property for each user");
try {
  check(deleteManyPasswords)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("countTheObjects() counts all the objects in an array of multi-type items");
try {
  check(countTheObjects)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns(3);
  check(countTheObjects).whenCalledWith([{}, {}, {}, {}, {}]).returns(5);
  check(countTheObjects).whenCalledWith([1, {}, true, {}, {}, false, {}, {}]).returns(5);
  check(countTheObjects)
    .whenCalledWith([1, { cat: "Schnitzel" }, true, {}, {}, false, 42, {}, {}])
    .returns(5);

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

  const feedback = `${name}'s output was ${actualString}, but it should be ${expectedString}`;
  return feedback;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
