console.log("isBiggerThan() returns a message indicating if a number is bigger than 10");

function isBiggerThan10() {
  // checks if an number is strictly bigger than 10 and returns a message accordingly
}

console.log("isBiggerThan() returns a message indicating if a number is bigger than 10");
try {
  check(isBiggerThan10).whenCalledWith(3).returns("Number 3 is less than 10");
  check(isBiggerThan10).whenCalledWith(4).returns("Number 4 is less than 10");
  check(isBiggerThan10).whenCalledWith(5).returns("Number 5 is less than 10");
  check(isBiggerThan10).whenCalledWith(10).returns("Number 10 is equal to 10");
  check(isBiggerThan10).whenCalledWith(11).returns("Number 11 is more than 10");
  check(isBiggerThan10).whenCalledWith(100).returns("Number 100 is more than 10");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isFalsy() {
  // checks if a value is falsy and returns true if it is - returns false otherwise
}

console.log("returns true if a value is falsy and false if it is truthy");

try {
  check(isFalsy).whenCalledWith(false).returns(true);
  check(isFalsy).whenCalledWith("").returns(true);
  check(isFalsy).whenCalledWith(0).returns(true);
  check(isFalsy).whenCalledWith(NaN).returns(true);
  check(isFalsy).whenCalledWith(undefined).returns(true);
  check(isFalsy).whenCalledWith(null).returns(true);

  check(isFalsy).whenCalledWith(10).returns(false);
  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

function readTrafficLight() {
  // this function should check if the "traffic light" is red, green or amber and return a corresponding message
}

console.log("readTrafficLight() should print a message according to the different colour passed in");

try {
  check(readTrafficLight).whenCalledWith("green").returns("GO!");
  check(readTrafficLight).whenCalledWith("GREEN").returns("GO!");

  check(readTrafficLight).whenCalledWith("amber").returns("GET READY...");
  check(readTrafficLight).whenCalledWith("AMBER").returns("GET READY...");

  check(readTrafficLight).whenCalledWith("red").returns("STOP!");
  check(readTrafficLight).whenCalledWith("RED").returns("STOP!");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isMultipleOf6() {
  // isMultipleOf6 check if a passed value is a multiple of 6
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

function checkInfinitive() {
  // checkInfinitive() will check if a French word is an infinitive French verb
  // A French infinitive verb is a word that ends with either "re", "ir" or "er"
}

console.log("checkInfinitive() checks if a french word is an infinitive");
try {
  check(checkInfinitive).whenCalledWith("manger").returns(true);
  check(checkInfinitive).whenCalledWith("faire").returns(true);
  check(checkInfinitive).whenCalledWith("aller").returns(true);
  check(checkInfinitive).whenCalledWith("aller").returns(true);
  check(checkInfinitive).whenCalledWith("finir").returns(true);
  check(checkInfinitive).whenCalledWith("rendre").returns(true);
  check(checkInfinitive).whenCalledWith("savoir").returns(true);

  check(checkInfinitive).whenCalledWith("suis").returns(false);
  check(checkInfinitive).whenCalledWith("ai").returns(false);
  check(checkInfinitive).whenCalledWith("ete").returns(false);
  check(checkInfinitive).whenCalledWith("sais").returns(false);
  check(checkInfinitive).whenCalledWith("allons").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function checkGame() {
  // checkGame() should take a value from a diceRoll ( a number from 1 to 6 )
  // and should also take the result from a coinToss (either "H" for heads or "T" for tails)
  // the function should return true if the player wins the game - getting a dice roll of 3 or higher AND a coinToss of 'H'
  // means that you have won the game :)
}

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

function checkBatteryLevel() {
  // if the battery level is less than 5% then should return a string saying:
  // "warning - battery level low: <number-here>%, please charge your device"
  // if the battery level is between 5 and 99% then it should display a string saying:
  // "Battery level: <number-here>%"
  // if the battery level is 100% then the string should say:
  // "Fully charged :)"
}

console.log("should return a message with info about the battery level");

try {
  check(checkBatteryLevel).whenCalledWith("100").returns("Fully charged :)");

  check(checkBatteryLevel).whenCalledWith("99").returns("Battery level: 99%");
  check(checkBatteryLevel).whenCalledWith("80").returns("Battery level: 80%");
  check(checkBatteryLevel).whenCalledWith("30").returns("Battery level: 30%");
  check(checkBatteryLevel).whenCalledWith("10").returns("Battery level: 10%");
  check(checkBatteryLevel).whenCalledWith("6").returns("Battery level: 6%");

  check(checkBatteryLevel).whenCalledWith("5").returns("Warning - battery level low: 5%, please charge your device");
  check(checkBatteryLevel).whenCalledWith("4").returns("Warning - battery level low: 4%, please charge your device");
  check(checkBatteryLevel).whenCalledWith("3").returns("Warning - battery level low: 3%, please charge your device");
  check(checkBatteryLevel).whenCalledWith("1").returns("Warning - battery level low: 1%, please charge your device");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function getOrdinalSuffix() {
  // an ordinal suffix are the letters we put after a number:
  // E.g. "nd" is an ordinal suffix as we'd write 2nd
  // E.g. "st" is an ordinal suffix as we'd write 1st etc
  // getOrdinalSuffix() should take a number and return the corresponding ordinal suffix
  // See here for more details: https://www.grammarly.com/blog/how-to-write-ordinal-numbers-correctly/
}

console.log("should give the correct ordinal suffix for a number");

try {
  check(getOrdinalSuffix).whenCalledWith(1).returns("st");
  check(getOrdinalSuffix).whenCalledWith(2).returns("nd");
  check(getOrdinalSuffix).whenCalledWith(3).returns("rd");
  check(getOrdinalSuffix).whenCalledWith(4).returns("th");
  check(getOrdinalSuffix).whenCalledWith(5).returns("th");
  check(getOrdinalSuffix).whenCalledWith(10).returns("th");
  check(getOrdinalSuffix).whenCalledWith(11).returns("th");
  check(getOrdinalSuffix).whenCalledWith(12).returns("th");
  check(getOrdinalSuffix).whenCalledWith(13).returns("th");
  check(getOrdinalSuffix).whenCalledWith(14).returns("th");
  check(getOrdinalSuffix).whenCalledWith(15).returns("th");
  check(getOrdinalSuffix).whenCalledWith(16).returns("th");
  check(getOrdinalSuffix).whenCalledWith(17).returns("th");
  check(getOrdinalSuffix).whenCalledWith(18).returns("th");
  check(getOrdinalSuffix).whenCalledWith(19).returns("th");
  check(getOrdinalSuffix).whenCalledWith(20).returns("th");
  check(getOrdinalSuffix).whenCalledWith(21).returns("st");
  check(getOrdinalSuffix).whenCalledWith(22).returns("nd");
  check(getOrdinalSuffix).whenCalledWith(23).returns("rd");
  check(getOrdinalSuffix).whenCalledWith(32).returns("nd");

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
  return feedback;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
