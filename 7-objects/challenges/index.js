const { check, runTest, skipTest } = require("../../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function accessObject(obj, key) {
  // This function should take an object and a key as its arguments and return the value found at the provided key in the input object
}

runTest("accessObject() can access a property value using a key", function () {
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "name").returns("jonny");
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "age").returns(32);
});

function checkIfPropertyExists(obj, key) {
  // This function should take an object and a key as its arguments and return true if the input object contains the provided key and false otherwise
}

skipTest("checkIfPropertyExists() checks if a property exists inside an object", function () {
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "name").returns(true);
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "age").returns(true);
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "pets").returns(false);
});

function createObject(arr) {
  // This function should take an array consisting of two elements representing a key/ value pair as its argument and return an object with a single property based on the input
}

skipTest("createObject() creates a new object from a key value pair", function () {
  check(createObject).whenCalledWith(["name", "shaq"]).returns({ name: "shaq" });
  check(createObject).whenCalledWith(["fruit", "apple"]).returns({ fruit: "apple" });
  check(createObject).whenCalledWith(["language", "haskell"]).returns({ language: "haskell" });
});

function countProperties(obj) {
  // This function should take an object as its argument and return the total number of properties it contains
}

skipTest("countProperties() counts the number of key-value pairs for a given object", function () {
  check(countProperties).whenCalledWith({}).returns(0);
  check(countProperties).whenCalledWith({ name: "shaq" }).returns(1);
  check(countProperties).whenCalledWith({ name: "shaq", job: "tutor", city: "Manchester" }).returns(3);
});

function createArrow(direction) {
  // This function should take a string representing a direction ("left", "right", "up" or "down") as its argument and return the corresponding arrow ("←", "→", "↑", "↓")
  // You don't need to utilise an object here, but think about how you could do so
}

skipTest("createArrow() will return an arrow pointing in the right direction", function () {
  check(createArrow).whenCalledWith("left").returns("←");
  check(createArrow).whenCalledWith("right").returns("→");
  check(createArrow).whenCalledWith("up").returns("↑");
  check(createArrow).whenCalledWith("down").returns("↓");
});

function updateVoterAddress(voter, correctHouseNumber) {
  /*
  This function should take an object representing a voter's details and a house number as its arguments
  A voter object will take this form:
  {
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 2,
      street: "Old St",
      city: "Chester"
    }
  }
  The voter's house number is incorrect and you should update it to be the one provided
  This function does NOT need to return anything
  */
}

skipTest("updateVoterAddress() updates the voter's houseNumber", function () {
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
});

function createUserString(user) {
  /*
  This function should take an object representing a user's details as its argument
  A user object will take this form:
  {
    name: "Mitch",
    age: 30,
    language: "JavaScript"
  }
  You should return a string consisting of these details in this form:
  "name: Mitch, age: 27, language: Javascript"
  This is a good use case for String Template Literals:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  */
}

skipTest("createUserString() will create a message from an details object", function () {
  check(createUserString)
    .whenCalledWith({ name: "Mitch", age: 30, language: "Javascript" })
    .returns("name: Mitch, age: 30, language: Javascript");

  check(createUserString)
    .whenCalledWith({ name: "Anat", age: 24, language: "Ruby" })
    .returns("name: Anat, age: 24, language: Ruby");
});

function updateCoinMachine(coinMachine, coin) {
  /*
  This function should take an object representing a coin machine and a string representing a coin as its arguments
  A coinMachine object will take this form:
  {
    "1p": 0,
    "2p": 0,
    "5p": 0,
    "10p": 0
  }
  You should 'add the provided coin to the machine' by altering the associated property and return the updated coinMachine
  */
}

skipTest("updateCoinMachine() will create a message from an details object", function () {
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
});
