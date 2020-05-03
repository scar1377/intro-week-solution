function isValidSortCode(sortCode) {
  // checks if a passed string is a valid sort code - this should be 2 digits hyphen 2 digits hyphen 2 digits
  return /^\d{2}-\d{2}-\d{2}$/.test(sortCode);
}

console.log("isValidSortCode() should check is a sort code string is in the correct format");

try {
  check(isValidSortCode).whenCalledWith("10-34-67").returns(true);
  check(isValidSortCode).whenCalledWith("51-34-58").returns(true);
  check(isValidSortCode).whenCalledWith("85-16-23").returns(true);

  check(isValidSortCode).whenCalledWith("51-349-67").returns(false);
  check(isValidSortCode).whenCalledWith("7980-34-67").returns(false);
  check(isValidSortCode).whenCalledWith("34-12-899").returns(false);
  check(isValidSortCode).whenCalledWith("a8-78-10").returns(false);
  check(isValidSortCode).whenCalledWith("45_78_10").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function grabCoefficient(expression) {}

console.log("grabCoefficient() will return the coefficient from an expression");

try {
  check(grabCoefficient).whenCalledWith().returns();
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

  const feedback = `${name}'s output was ${actualString}, but it should be ${expectedString}`;
  return feedback;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
