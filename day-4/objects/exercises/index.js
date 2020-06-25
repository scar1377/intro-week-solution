console.log("Task 1");

try {
  const myObject = {};

  check(FILL_ME_IN).isEqualTo(typeof myObject);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

console.log("Task 2");
try {
  const father = {
    firstName: "Michael",
    lastName: "Bluth",
    age: 33,
  };

  check(FILL_ME_IN).isEqualTo(father.firstName);
  check(FILL_ME_IN).isEqualTo(father.lastName);
  check(FILL_ME_IN).isEqualTo(father.firstname);
  check(FILL_ME_IN).isEqualTo(father.age);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

console.log("Task 3");
try {
  const son = {};
  son.name = "George Michael";
  son.lastname = "Bluth";
  son.age = 16;
  son.jobs = ["Frozen Banana Salesman", "CEO of Fakeblock"];

  check(FILL_ME_IN).isEqualTo(son.name);
  check(FILL_ME_IN).isEqualTo(typeof son.jobs);
  check(FILL_ME_IN).isEqualTo(son.jobs[1][5]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

console.log("Task 4");

try {
  const starWars = {
    episode4: "A New Hope",
    episode5: "Empire Strikes Back",
    episode6: "Return of the Jedi",
    episode7: "The Force Awakens",
  };
  const worstOne = starWars["episode" + (10 - 4)];

  check(FILL_ME_IN).isEqualTo(worstOne);
  check(starWars["episode7"]).isEqualTo(FILL_ME_IN);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

console.log("Task 5");

try {
  const brotherInLaw = {
    name: "Tobias",
    lastname: "Funke",
    job: "therapist",
  };

  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);
  brotherInLaw.job = "actor";
  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);

  delete brotherInLaw.job;
  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

console.log("Task 6");

try {
  const bluthFamily = {
    father: {
      name: "George",
    },
    mother: {
      name: "Lucille",
    },
    sons: [{ name: "GOB" }, { name: "Michael" }, { name: "Buster" }],
    daughters: [{ name: "Lindsay" }],
  };

  check(FILL_ME_IN).isEqualTo(bluthFamily.father.name);
  check(bluthFamily.mother.name).isEqualTo(FILL_ME_IN);
  check(bluthFamily.daughters[FILL_ME_IN].FILL_ME_IN).isEqualTo("Lindsay");

  printGreenMessage("Pass ✔");
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
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
