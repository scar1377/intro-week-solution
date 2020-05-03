console.log("checking multiTypeArray");

try {
  const multiTypeArray = ["I am a string", 42, true, [1, 2, 3]];

  check(FILL_ME_IN).isEqualTo(typeof multiTypeArray[0]);
  check(FILL_ME_IN).isEqualTo(typeof multiTypeArray[1]);
  check(FILL_ME_IN).isEqualTo(typeof multiTypeArray[2]);
  check(FILL_ME_IN).isEqualTo(typeof multiTypeArray[3]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("checking alphaSample");

try {
  const alphaSample = ["a", "b", "c"];
  alphaSample.push("d");
  alphaSample.push("g");

  check(FILL_ME_IN).isEqualTo(alphaSample);

  const lastItem = alphaSample.pop();

  check(FILL_ME_IN).isEqualTo(lastItem);
  check(FILL_ME_IN).isEqualTo(alphaSample);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("working with nested arrays");
try {
  const rows = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  check(FILL_ME_IN).isEqualTo(rows[0]);
  check(FILL_ME_IN).isEqualTo(rows[1]);
  check(FILL_ME_IN).isEqualTo(rows[2]);

  const firstRow = rows[0];
  check(firstRow[0]).isEqualTo("a");
  check(firstRow[FILL_ME_IN]).isEqualTo("b");

  check(rows[1][FILL_ME_IN]).isEqualTo("e");
  check(rows[2][FILL_ME_IN]).isEqualTo("g");
  check(rows[0][FILL_ME_IN]).isEqualTo("c");

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("get the slice of an array");

try {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

  check(FILL_ME_IN).isEqualTo(letters.slice(1, 4));
  check(FILL_ME_IN).isEqualTo(letters.slice(2, 3));
  check(FILL_ME_IN).isEqualTo(letters.slice(3, 5));
  check(FILL_ME_IN).isEqualTo(letters.slice(-1));
  check(FILL_ME_IN).isEqualTo(letters.slice(-2));
  check(FILL_ME_IN).isEqualTo(letters.slice(0, -4));

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;

function check(func) {
  const methods = {
    whenCalledWith(...args) {
      this.args = args;
      return this;
    },
    isEqualTo(expected) {
      const { actual } = this;

      if (typeof actual === "object" || typeof expected === "object") {
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
