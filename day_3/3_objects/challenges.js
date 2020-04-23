function makeCard(value, suit) {}
// This function should return a new object with a value property and a suit property - the function will be passed a value and a suit for the property values

function isFaceCard(card) {}
// This function should take a card object with a value and suit property and

function accessObject(object, key) {}
// This function should take an object and a key and return the object's property value;

try {
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "name").returns("jonny");
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "age").returns(32);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function checkIfPropertyExists(object, key) {}
// This function should take an object and a key and return boolean that indicates whether or not the object has the given keys

function createObject(keyValuePair) {}
// This function should take a key value pair (stored in an array) and use it to create an object with a key and a value

function countProperties(obj) {}
// This function should take an object and count the number of properties it has

function updateVoterAddress(voter, correctHouseNumber) {
  /* Uh-Oh! We've got some silly voters who've registered their addresses incorrectly. Lets help them fix those typos by changing their houseNumber to the correctHouseNumber. The user object looks like this:
    {
      name: "Alex",
      age: 39,
      address: { 
        houseNumber: 2, 
        street: "Old St", 
        city: "Chester" 
      }
    };
    Note - The function does NOT need to return anything.
  */
}

function createUserString(userObj) {
  // should take as an argument an object with the format from createNorthcoder
  // returns a string with the user's details in the form:
  // 'name: Mitch, age: 27, language: Javascript';
  // Note - this is a good use case of string template literals.
}

function updateCoinMachine(coinMachine, money) {
  // should take a coinMachine object with the following properties
  //    {
  //      '1p' : [],
  //      '2p': [],
  //    }
  // should update the
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
