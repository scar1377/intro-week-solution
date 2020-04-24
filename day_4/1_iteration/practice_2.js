const items = [];

// your loop here ...
for (let i = 10; i < 101; i += 5) {
  items.push(i);
}

try {
  check(items).isEqualTo([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);

  printGreenMessage("Success :)");
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
            `${JSON.stringify(actual, null, 2)}\n is not equal to the expected value of \n${JSON.stringify(
              expected,
              null,
              2
            )}`
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
  let areEqual = true;
  if (typeof coll1 === "object" && typeof coll2 === "object") {
    if (Object.keys(coll1).length !== Object.keys(coll2).length) return false;
    if (Array.isArray(coll1) === Array.isArray(coll2)) {
      for (let key1 in coll1) {
        if (!coll2[key1]) return false;
        else areEqual = checkDeeplyEqual(coll1[key1], coll2[key1]);
        if (!areEqual) return false;
      }
    } else return false;
  } else return coll1 === coll2;
  return areEqual;
}

function createFeedBackString(item) {
  const lookup = {
    string: (item) => `"${item}"`,
    object: (item) => JSON.stringify(item, null, 3),
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
