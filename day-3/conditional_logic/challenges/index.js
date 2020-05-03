function isBiggerThan10(num) {
  if (num > 10) {
    return "Your number is bigger than 10";
  } else {
    return "Your number is less than or equal to 10";
  }
}

// assert that this function returns the correct message

function checkBatteryLevel(batteryLevel) {}

// if the battery level is less than 5% then should return a string saying:
// "warning - battery level low: <number-here>%, please charge your device"
// if the battery level is between 5 and 99% then it should display a string saying:
// "Battery level: <number-here>%"
// if the battery level is 100% then the string should say:
// "Fully charged :)"

function readTrafficLight(colour) {
  if (colour === "GREEN") {
    return "GO!";
  } else if (colour === "AMBER") {
    return "GET READY...";
  } else {
    return "STOP!";
  }
}

try {
  check(readTrafficLight).whenCalledWith("green").returns("GO!");
  check(readTrafficLight).whenCalledWith("GREEN").returns("GO!");

  check(readTrafficLight).whenCalledWith("amber").returns("GET READY...");
  check(readTrafficLight).whenCalledWith("AMBER").returns("GET READY...");

  check(readTrafficLight).whenCalledWith("red").returns("STOP!");
  check(readTrafficLight).whenCalledWith("RED").returns("STOP!");
} catch (error) {
  printRedMessage(error);
}

try {
  check(checkBatteryLevel).whenCalledWith(100).returns("Fully charged :)");

  check(checkBatteryLevel).whenCalledWith(99).returns("Battery level: 99%");
  check(checkBatteryLevel).whenCalledWith(80).returns("Battery level: 80%");
  check(checkBatteryLevel).whenCalledWith(30).returns("Battery level: 30%");
  check(checkBatteryLevel).whenCalledWith(10).returns("Battery level: 10%");
  check(checkBatteryLevel).whenCalledWith(6).returns("Battery level: 6%");

  check(checkBatteryLevel).whenCalledWith(5).returns("Warning - battery level low: 5%, please charge your device");
  check(checkBatteryLevel).whenCalledWith(4).returns("Warning - battery level low: 4%, please charge your device");
  check(checkBatteryLevel).whenCalledWith(3).returns("Warning - battery level low: 3%, please charge your device");
  check(checkBatteryLevel).whenCalledWith(1).returns("Warning - battery level low: 1%, please charge your device");
} catch (error) {
  printRedMessage(error);
}

function isMultipleOf6(num) {
  return num % 3 === 0 && num % 6 === 0;
}

console.log("isMultipleOf6() should check if a number is divisible by 6");
try {
  check(isMultipleOf6).whenCalledWith(6).returns(true);

  check(isMultipleOf6).whenCalledWith(10).returns(false);
  check(isMultipleOf6).whenCalledWith(15).returns(false);
  check(isMultipleOf6).whenCalledWith(36).returns(true);
  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isMultipleOf6(num) {
  return num % 3 === 0 && num % 6 === 0;
}

console.log("isMultipleOf6() should check if a number is divisible by 6");
try {
  check(isMultipleOf6).whenCalledWith(6).returns(true);

  check(isMultipleOf6).whenCalledWith(10).returns(false);
  check(isMultipleOf6).whenCalledWith(15).returns(false);
  check(isMultipleOf6).whenCalledWith(36).returns(true);
  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function checkGame(diceRoll, coinToss) {}

console.log("checkGame() should check if a number is divisible by 6");
try {
  check(checkGame).whenCalledWith(3, "H").returns(true);
  check(checkGame).whenCalledWith(4, "H").returns(true);
  check(checkGame).whenCalledWith(5, "H").returns(true);
  check(checkGame).whenCalledWith(6, "H").returns(true);
  check(checkGame).whenCalledWith(6, "T").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
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
