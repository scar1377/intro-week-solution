try {
  const pattern = /^!+/;

  // your pattern should match more than 1 ! at the **beginning of a string**

  // use .test() to match all of these strings
  check(pattern.test("!!!sdlasjdlajsd")).isEqualTo(true);
  check(pattern.test("!!askjaa")).isEqualTo(true);
  check(pattern.test("!!!!!adjaksljd")).isEqualTo(true);
  check(pattern.test("!!!32749anks")).isEqualTo(true);

  // use .test() to not match all of these strings
  check(pattern.test("adssdk!!!")).isEqualTo(false);
  check(pattern.test("asdk;alk!!!!")).isEqualTo(false);
  check(pattern.test("errui!!!!")).isEqualTo(false);
  check(pattern.test("cjljad!!!!!!")).isEqualTo(false);

  printGreenMessage("Task 1  - Success :)");
} catch (error) {
  printRedMessage(error);
}

try {
  const pattern = /[abc]{6}/;

  // your pattern should match 6 of a,b or c

  // use .test() to match all of these strings
  check(pattern.test("abcabc")).isEqualTo(true);
  check(pattern.test("cbabac")).isEqualTo(true);
  check(pattern.test("cacaca")).isEqualTo(true);
  check(pattern.test("bbbcca")).isEqualTo(true);

  // use .test() to not match all of these strings
  check(pattern.test("xyzxyz")).isEqualTo(false);
  check(pattern.test("pqrsqp")).isEqualTo(false);
  check(pattern.test("pprrss")).isEqualTo(false);
  check(pattern.test("vsxprh")).isEqualTo(false);

  printGreenMessage("Task 2 - Success :)");
} catch (error) {
  printRedMessage(error);
}

try {
  const pattern = /[^l]l{2}[^l]/;

  // your pattern should match any string containing exactly 2 letters ls

  // use .test() to match all of these strings
  check(pattern.test("hello")).isEqualTo(true);
  check(pattern.test("bells")).isEqualTo(true);
  check(pattern.test("bells")).isEqualTo(true);
  check(pattern.test("bells")).isEqualTo(true);

  // use .test() to not match all of these strings
  check(pattern.test("mile")).isEqualTo(false);
  check(pattern.test("fly")).isEqualTo(false);
  check(pattern.test("wellll")).isEqualTo(false);
  check(pattern.test("mitchelllloyd")).isEqualTo(false);

  printGreenMessage("Task 3 - Success :)");
} catch (error) {
  printRedMessage(error);
}

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var YOUR_REGEX_HERE;

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
