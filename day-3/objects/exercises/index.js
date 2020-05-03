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
    firstname: "Michael",
    lastname: "Bluth",
    age: 33,
  };

  check(father.firstname).isEqualTo(FILL_ME_IN);
  check(father.lastname).isEqualTo(FILL_ME_IN);
  check(father.firstName).isEqualTo(FILL_ME_IN);
  check(father.car).isEqualTo(FILL_ME_IN);

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

  check(son.name).isEqualTo(FILL_ME_IN);
  check(typeof son.jobs).isEqualTo(FILL_ME_IN);
  check(son.jobs[1]).isEqualTo(FILL_ME_IN);

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

  check(worstOne).isEqualTo(FILL_ME_IN);
  check(starWars[FILL_ME_IN]).isEqualTo("The Force Awakens");

  printGreenMessage("Pass ✔");
} catch (error) {}

try {
  const brotherInLaw = {
    name: "Tobias",
    lastname: "Funke",
    job: "therapist",
  };

  check(brotherInLaw.job).isEqualTo(FILL_ME_IN);
  brotherInLaw.job = "actor";
  check(brotherInLaw.job).isEqualTo(FILL_ME_IN);

  delete brotherInLaw.job;
  check(brotherInLaw.job).isEqualTo(FILL_ME_IN);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

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

  check(bluthFamily.father.name).isEqualTo(FILL_ME_IN);
  check(bluthFamily.mother["name"]).isEqualTo(FILL_ME_IN);
  check(bluthFamily["sons"][2].name).isEqualTo(FILL_ME_IN);

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
