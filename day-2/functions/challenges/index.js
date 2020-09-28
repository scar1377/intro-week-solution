const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

function modulo() {
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

function squareRoot() {
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

function raiseToPower() {
  // return the result of raising m to the nth power
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

function capitaliseFirstLetter() {}

console.log("capitaliseFirstLetter() can capitalise the first letter in a string");
try {
  check(capitaliseFirstLetter).whenCalledWith("bang").returns("Bang");
  check(capitaliseFirstLetter).whenCalledWith("apple").returns("Apple");
  check(capitaliseFirstLetter).whenCalledWith("coding").returns("Coding");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function areValuesEqual() {
  // return true if the passed arguments are strictly equal
  // you can complete this problem without resorting to if statements
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

function isFromThe60s() {
  // return true if the year is in the 1960's
  // returns false otherwise
  // you can complete this problem without resorting to if statements
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

function isEvenLength() {
  // return true if string has an even length
  // you can complete this problem without resorting to if statements
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

function isAbsolutePath() {
  // checks if a string is an absolute path - does it start with a /
  // HINT: all absolute file paths start with a /
}

console.log("isAbsolutePath() checks if a file path is absolute or relative");

try {
  check(isAbsolutePath).whenCalledWith("/Users/mitch").returns(true);
  check(isAbsolutePath).whenCalledWith("/Users/mitch/northcoders/remote_course/remote_precourse_1").returns(true);
  check(isAbsolutePath).whenCalledWith("../composers").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function getMiddle() {
  // return the middle (or middle two) character(s) of the passed string
  // HINT: You could use the ternary operator for this challenge
}

console.log("getMiddle() returns the middle character in a string of odd length");
try {
  check(getMiddle).whenCalledWith("abc").returns("b");
  check(getMiddle).whenCalledWith("mitch").returns("t");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("getMiddle() returns the middle characters in a string of even length");
try {
  check(getMiddle).whenCalledWith("abcd").returns("bc");
  check(getMiddle).whenCalledWith("blob").returns("lo");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function getCharCode() {
  // returns a sentence stating the character code for a given character
  // Look up ASCII online to get a better idea of what a character code is
}

console.log("getCharCode() will return a message stating the ascci code of a passed char");

try {
  check(getCharCode).whenCalledWith("A").returns("The ASCII character for A is 65");
  check(getCharCode).whenCalledWith("b").returns("The ASCII character for b is 98");
  check(getCharCode).whenCalledWith("z").returns("The ASCII character for z is 122");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function createPercentage() {
  // should take 2 numbers and work out their percentage
}

console.log('createPercentage() creates a percentage string in the form "--%"');

try {
  check(createPercentage).whenCalledWith(1, 2).returns("50%");
  check(createPercentage).whenCalledWith(50, 100).returns("50%");
  check(createPercentage).whenCalledWith(2, 3).returns("67%");
  check(createPercentage).whenCalledWith(3, 4).returns("75%");
  check(createPercentage).whenCalledWith(1, 7).returns("14%");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function extractNumber() {
  // should extract a number embedded in a string surrounded by ( ) parentheses
}

console.log("extractNumber() should return the number buried inside a string");

try {
  check(extractNumber).whenCalledWith("lasjdasasj(123)asljdlajk").returns(123);
  check(extractNumber).whenCalledWith("qwasdaoyer(44687)iuwyeibasdahgsd").returns(44687);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(19827)iusdfsdfsd").returns(19827);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5601)iusdfsdfsd").returns(5601);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(29)iusdfsdfsd").returns(29);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
