function modulo(a, b) {
  // return the remainder of the division a / b
}

console.log("modulo() gives the correct output");
try {
  check(modulo).whenCalledWith(10, 2).returns(0);
  check(modulo).whenCalledWith(119, 10).returns(9);
  check(modulo).whenCalledWith(50, 6).returns(2);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function squareRoot(n) {
  // return the square root of n
}

console.log("squareRoot() works for positive integers");

try {
  check(squareRoot).whenCalledWith(100).returns(10);
  check(squareRoot).whenCalledWith(25).returns(5);
  check(squareRoot).whenCalledWith(121).returns(11);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function raiseToPower(m, n) {
  // return the result of raising m to the nth power
  return m ** n;
}

console.log("raiseToPower() raises given number to a power");
try {
  check(raiseToPower).whenCalledWith(10, 3).returns(1000);
  check(raiseToPower).whenCalledWith(25, 2).returns(625);
  check(raiseToPower).whenCalledWith(10, 0).returns(1);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
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

console.log("putNamesTogether() can join two strings with a space");
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
  return str.toUpperCase();
  // return the passed string with its first letter capitalised
}

console.log("capitaliseString() can capitalise a single word");
try {
  check(capitaliseString).whenCalledWith("bang").returns("BANG");
  check(capitaliseString).whenCalledWith("apple").returns("APPLE");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function areValuesEqual(left, right) {
  // return true if the passed arguments are strictly equal
  return left === right;
}

console.log("areValuesEqual() checks if two values are the same");
try {
  check(areValuesEqual).whenCalledWith(10, 10).returns(true);
  check(areValuesEqual).whenCalledWith("good", "bad").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isFromThe60s(year) {
  return 1960 <= year && year <= 1970;
  // return true if the year is in the 1960's
  // returns false otherwise
}

console.log("isFromThe60s() checks if two values are the same");
try {
  check(isFromThe60s).whenCalledWith(1962).returns(true);
  check(isFromThe60s).whenCalledWith(1965).returns(true);
  check(isFromThe60s).whenCalledWith(1990).returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isEvenLength(string) {
  // return true if string has an even length
  return string.length % 2 === 0;
}

console.log("isEvenLength() checks if string has even number of characters");
try {
  check(isEvenLength).whenCalledWith("hello").returns(false);
  check(isEvenLength).whenCalledWith("abcd").returns(true);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function getMiddle(str) {
  return str[Math.floor(str.length / 2)];
  // return the middle (or middle two) character(s) of the passed string
}

console.log("getMiddle() returns the middle character(s) in a string");

try {
  check(getMiddle).whenCalledWith("abc").returns("b");
  check(getMiddle).whenCalledWith("mitch").returns("t");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

try {
  check(getMiddle).whenCalledWith("abcd").returns("bc");
  check(getMiddle).whenCalledWith("blob").returns("lo");

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
    returns(expected) {
      const actual = this.func(...this.args);
      if (actual !== expected)
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
    typeof expected === "string" ? addQuotes(expected) : expected
  }`;
  return feedback;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
