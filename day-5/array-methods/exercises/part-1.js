console.log("get the multiples of 10 from 10 to 100");
try {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const multiplesOf10 = USE_ARRAY_METHOD;

  check(multiplesOf10).isEqualTo([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("adds ? to the words in order to form queries");
try {
  const words = ["who", "what", "why", "how", "huh"];

  const queries = USE_ARRAY_METHOD;

  check(queries).isEqualTo(["who?", "what?", "why?", "how?", "huh?"]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("will get the name and ages of each person in an array");
try {
  const people = [
    { name: "mitch", age: 30 },
    { name: "anat", age: 24 },
    { name: "howard", age: 58 },
  ];

  const namesAndAges = USE_ARRAY_METHOD;

  check(namesAndAges).isEqualTo(["mitch - 30", "anat - 24", "howard - 58"]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can get the multiples of 3");
try {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const multiplesOf3 = USE_ARRAY_METHOD;

  check(multiplesOf3).isEqualTo([3, 6, 9, 12, 15, 18]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can get all the words ending in er");
try {
  const words = ["boulder", "wonder", "hello", "hi", "super", "something", "whoa", "booo"];

  const wordsEndingInEr = USE_ARRAY_METHOD;

  check(wordsEndingInEr).isEqualTo(["boulder", "wonder", "super"]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can get the names of staff over or at 28");
try {
  const staff = [
    { name: "Anat", age: 22 },
    { name: "Paul C", age: 31 },
    { name: "Paul R", age: 27 },
    { name: "Vel", age: 29 },
    { name: "Sam", age: 30 },
    { name: "Jonny", age: 32 },
    { name: "Ant", age: 26 },
    { name: "Mitch", age: 28 },
    { name: "Tom", age: 24 },
    { name: "Alex", age: 24 },
  ];

  const staffOverOrAt28 = USE_ARRAY_METHOD;

  check(staffOverOrAt28).isEqualTo(["Paul C", "Vel", "Sam", "Jonny", "Mitch"]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can sum numbers up to 100 using forEach()");
try {
  let sumUpTo100 = 0; // <- don't change this line
  // Try using .forEach() for this task

  check(sumUpTo100).isEqualTo(5050);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can find the index position of X");
try {
  const treasureMap = "adhfashasoasduyoaisyioyadiyfoXsasdiyoiaysidyoiaysfi";

  const positionOfX = USE_ARRAY_METHOD;
  // Look at different array methods on MDN and try finding the best one for the job
  check(positionOfX).isEqualTo(29);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var USE_ARRAY_METHOD;

function check(func) {
  const methods = {
    whenCalledWith(...args) {
      this.args = args;
      return this;
    },
    isEqualTo(expected) {
      const { actual } = this;

      if (isNonNullObject(actual) && isNonNullObject(expected)) {
        if (!checkDeeplyEqual(actual, expected)) {
          throw new Error(
            `${JSON.stringify(actual)}\n is not equal to the expected value of \n${JSON.stringify(expected)}`
          );
        }
      } else if (actual !== expected)
        throw new Error(
          `${createFeedBackString(actual)} is not equal to the expected value of ${createFeedBackString(expected)}`
        );
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

function isNonNullObject(item) {
  return item !== null && typeof item === "object";
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

function printRedMessage(...message) {
  console.log("\x1b[31m", ...message, "\x1b[0m");
}

function printGreenMessage(...message) {
  console.log("\x1b[32m", ...message, "\x1b[0m");
}
