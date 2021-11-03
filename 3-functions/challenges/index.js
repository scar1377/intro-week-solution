const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

/*
Instructions

For each of these tests, you are expected to declare your own function with the name and suggested behaviour provided. 

Take a look at the tests to see what each function should be returning given various arguments. 
*/

/*
modulo()

This function should take two arguments a and b, and return the remainder of the division of a / b
*/

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

/*
squareRoot()

This function should take a single argument and return its square root
*/

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

/*
raiseToPower()

This function should take two arguments, m and n, and return m raised to the power of n
*/

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

/*
capitaliseFirstLetter()

This function should take a string as an argument and return the same string with the first letter capitalised
*/

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

/*
areValuesEqual()

This function should take two arguments and return true if they are strictly equal, and false otherwise

NOTE: you can complete this problem without resorting to if statements!
*/

console.log("areValuesEqual() checks if two values are the same");
try {
  check(areValuesEqual).whenCalledWith(10, 10).returns(true);
  check(areValuesEqual).whenCalledWith("good", "bad").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

/*
isFromThe60s()

This function should take a number as an argument representing a year, and return true if that year is in the 1960s and false otherwise

NOTE: you can complete this problem without resorting to if statements!
*/

console.log("isFromThe60s() checks if a number is within 1960 to 1969 (inclusive)");
try {
  check(isFromThe60s).whenCalledWith(1962).returns(true);
  check(isFromThe60s).whenCalledWith(1965).returns(true);
  check(isFromThe60s).whenCalledWith(1970).returns(false);
  check(isFromThe60s).whenCalledWith(1960).returns(true);
  check(isFromThe60s).whenCalledWith(1959).returns(false);
  check(isFromThe60s).whenCalledWith(1901).returns(false);
  check(isFromThe60s).whenCalledWith(1990).returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

/*
isEvenLength()

This function should take a string as an argument and return true if its length is even, and false otherwise
*/

console.log("isEvenLength() checks if string has even number of characters");
try {
  check(isEvenLength).whenCalledWith("hello").returns(false);
  check(isEvenLength).whenCalledWith("abcd").returns(true);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

/*
isAbsolutePath()

This function should take a string as an argument representing a file path and return true if it is an absolute path, and false otherwise

HINT: all absolute file paths start with a /
*/

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

/*
getMiddle()

This function should take a string as an argument and return the middle (or middle two) character(s) of that string

NOTE: you could use the ternary operator for this challenge
*/

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

/*
getCharCode()

This function should take a string as an argument and return a string which describes the ASCII code of that character

The returned string should be in the following format:

"The ASCII character for <character> is <character-code>"
*/

console.log("getCharCode() will return a message stating the ascii code of a passed char");

try {
  check(getCharCode).whenCalledWith("A").returns("The ASCII character for A is 65");
  check(getCharCode).whenCalledWith("b").returns("The ASCII character for b is 98");
  check(getCharCode).whenCalledWith("z").returns("The ASCII character for z is 122");
  check(getCharCode).whenCalledWith("k").returns("The ASCII character for k is 107");
  check(getCharCode).whenCalledWith("!").returns("The ASCII character for ! is 33");
  check(getCharCode).whenCalledWith("M").returns("The ASCII character for M is 77");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

/*
createPercentage()

This function should take two numbers, a and b, and return a string representing the value of a as a percentage of b
*/

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

/*
extractNumber()

This function should take a string containing a number wrapped in a pair of round brackets  and return said number
*/

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
