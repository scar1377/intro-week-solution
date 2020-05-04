// accessObject() should take an object and a key and return the object's property value

console.log("accessObject() can access a property value using a key");
try {
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "name").returns("jonny");
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "age").returns(32);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// checkIfPropertyExists() should take an object and a key and return a boolean that indicates whether or not the object has the given keys

console.log("checkIfPropertyExists() checks if a property exists inside an object");
try {
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "name").returns(true);
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "age").returns(true);
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "pets").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// createObject() should take a key-value pair (stored in an array) and use it to create an object with a key and a value

console.log("createObject() creates a new object from a key value pair");
try {
  check(createObject).whenCalledWith(["name", "shaq"]).returns({ name: "shaq" });
  check(createObject).whenCalledWith(["fruit", "apple"]).returns({ fruit: "apple" });
  check(createObject).whenCalledWith(["language", "haskell"]).returns({ language: "haskell" });

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// countProperties() should take an object and count the number of properties it has

console.log("countProperties() counts the number of key-value pairs for a given object");
try {
  check(countProperties).whenCalledWith({}).returns(0);
  check(countProperties).whenCalledWith({ name: "shaq" }).returns(1);
  check(countProperties).whenCalledWith({ name: "shaq", job: "tutor", city: "Manchester" }).returns(3);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// createArrow() will take a direction string: "left", "right", "up" and "down" and return a corresponding arrow
// Think of how you can use an object to solve this problem

console.log("createArrow() will return an arrow pointing in the right direction");
try {
  check(createArrow).whenCalledWith("right").returns("→");
  check(createArrow).whenCalledWith("left").returns("←");
  check(createArrow).whenCalledWith("up").returns("↑");
  check(createArrow).whenCalledWith("down").returns("↓");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// Uh-Oh! We've got some silly voters who've registered their addresses incorrectly.
//   Lets help them fix those typos by changing their houseNumber to the correctHouseNumber.
//   The user object looks like this:
//    {
//      name: "Alex",
//      age: 39,
//      address: {
//        houseNumber: 2,
//        street: "Old St",
//        city: "Chester"
//      }
//    };
//    Note - The function does NOT need to return anything.
//

console.log("updateVoterAddress() updates the voter's houseNumber");
try {
  const voter = {
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 2,
      street: "Old St",
      city: "Chester",
    },
  };

  updateVoterAddress(voter, 10);

  check(voter).isEqualTo({
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 10,
      street: "Old St",
      city: "Chester",
    },
  });

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// createUserString() should take as an argument an object with the format from createNorthcoder
// returns a string with the user's details in the form:
// "name: Mitch, age: 27, language: Javascript";

// Note - this is a good use case of template literals:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

console.log("createUserString() will create a message from an details object");
try {
  check(createUserString)
    .whenCalledWith({ name: "Mitch", age: 30, language: "Javascript" })
    .returns("name: Mitch, age: 30, language: Javascript");

  check(createUserString)
    .whenCalledWith({ name: "Anat", age: 24, language: "Ruby" })
    .returns("name: Anat, age: 24, language: Ruby");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// updateCoinMachine() should take a coinMachine object with the following form:
//  {
//    '1p': 0,
//    '2p': 0,
//    '5p': 0,
//    '10p: 0
//  }
// and should update the coinMachine to reflect any change that is added into the machine

console.log("updateCoinMachine() will create a message from an details object");

try {
  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "1p")
    .returns({ "1p": 1, "2p": 0, "5p": 0, "10p": 0 });

  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "2p")
    .returns({ "1p": 0, "2p": 1, "5p": 0, "10p": 0 });

  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 3, "5p": 0, "10p": 0 }, "2p")
    .returns({ "1p": 0, "2p": 4, "5p": 0, "10p": 0 });

  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "5p")
    .returns({ "1p": 0, "2p": 3, "5p": 11, "10p": 0 });

  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "10p")
    .returns({ "1p": 0, "2p": 3, "5p": 10, "10p": 1 }, "5p");

  printGreenMessage("Pass ✔");
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
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
