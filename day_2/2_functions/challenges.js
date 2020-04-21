function modulo(a, b) {
  // return the remainder of the division a / b
}

// try {
//   check(raiseToPower(10,3)).isEqualTo(1000);
//   check(raiseToPower(25,2)).isEqualTo(625);
//   check(raiseToPower(10,0)).isEqualTo(1);
// } catch(error) {
//   printRedMessage(error);
// }

function squareRoot(n) {
  // return the square root of n
}

function raiseToPower(m, n) {
  // return the result of raising m to the nth power
}

try {
  // check(raiseToPower(10,3)).isEqualTo(1000);
  // check(raiseToPower(25,2)).isEqualTo(625);
  // check(raiseToPower(10,0)).isEqualTo(1);
} catch (error) {
  printRedMessage(error);
}

function getLength(str) {
  // return the length of the passed string
  return str.length;
}

console.log("getLength() returns the correct string length");

try {
  check(getLength).whenCalledWith("jonny").returns(5);
  check(getLength).whenCalledWith("jd").returns(2);
  check(getLength).whenCalledWith("rosa").returns(4);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function putNamesTogether(firstName, lastName) {
  // return the first and last names with a space between them
  return firstName + " " + lastName;
}

try {
  check(putNamesTogether)
    .whenCalledWith("izzi", "maccabee")
    .returns("izzi maccabee");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function capitaliseString(str) {
  // return the passed string with its first letter capitalised
}

function areValuesEqual(left, right) {
  // return true if the passed arguments are strictly equal
}

function isFromThe60s(year) {
  // return true if the year is in the 1960's
}

function isEvenLength(string) {
  // return true if string has an even length
}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string
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
      if (this.func(...this.args) !== expected)
        throw new Error(createFeedback(this.func.name, actual, expected));
    },
  };
  const obj = Object.create(methods);
  obj.func = func;
  return obj;
}

function addQuotes(string) {
  return `"${string}"`;
}

function createFeedback(name, actual, expected) {
  const feedback = `${name}'s output was ${
    typeof actual === "string" ? addQuotes(actual) : actual
  }, but it should be ${
    typeof expected === "string" ? addQuotes(expected) : actual
  }`;
  return feedback;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
