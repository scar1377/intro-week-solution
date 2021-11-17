const { check, runTest, skipTest } = require("../../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function makeAllUpperCase(arr) {
  // This function should take an array of strings as an argument and return an array consisting of the same strings in upper case (retaining the order)
}

runTest("makeAllUpperCase() can convert all strings to upper case", function () {
  check(makeAllUpperCase).whenCalledWith(["a", "b", "c"]).returns(["A", "B", "C"]);
  check(makeAllUpperCase).whenCalledWith(["I", "love", "coding"]).returns(["I", "LOVE", "CODING"]);
});

function collectStrings(arr) {
  // This function should take an array as an argument and return an array containing all string elements from the input (retaining the order)
}

skipTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings).whenCalledWith(["a", "b", "c"]).returns(["a", "b", "c"]);
  check(collectStrings).whenCalledWith(["a", 10, "b", 1000, "c"]).returns(["a", "b", "c"]);
});

function getEvenNumbers(arr) {
  // This function should take an array of numbers as an argument and return an array containing all even numbers from the input (retaining the order)
}

skipTest("getEvenNumbers() can get all the even numbers from an array of numbers", function () {
  check(getEvenNumbers).whenCalledWith([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).returns([2, 4, 6, 8, 10]);
  check(getEvenNumbers).whenCalledWith([9, 100, 13, 20]).returns([100, 20]);
  check(getEvenNumbers).whenCalledWith([78, 5, 9, 11, 24]).returns([78, 24]);
});

function collectPlurals(arr) {
  // This function should take an array of strings as an argument and return an array containing all strings ending with an 's' from the input (retaining the order)
}

skipTest("collectPlurals() can collect all the strings ending in an s", function () {
  check(collectPlurals)
    .whenCalledWith(["dogs", "cat", "apples", "kittens", "kiwi"])
    .returns(["dogs", "apples", "kittens"]);
  check(collectPlurals)
    .whenCalledWith(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])
    .returns(["abcs", "humans", "thoughts", "cups"]);
});

function createArray(length, char) {
  // This function should take a length and a character as arguments and return an array of the given length populated with the given character
}

skipTest("createArray() creates an array of the specified length using a specified character", function () {
  check(createArray).whenCalledWith(3, "!").returns(["!", "!", "!"]);
  check(createArray).whenCalledWith(5, "a").returns(["a", "a", "a", "a", "a"]);
});

function deleteManyPasswords(arr) {
  /*
  This function should take an array of 'user' objects as an argument
  Each user will be an object with a 'name' and 'password' property
  You should return an array of user objects each with the 'password' property removed (retaining the order)
  */
}

skipTest("deleteManyPasswords() deletes the password property for each user", function () {
  check(deleteManyPasswords)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);
});

function collectTheVowels(str) {
  // This function should take a string as its argument and return a string consisting of all vowels found in the input (retaining the order)
}

skipTest(
  "collectTheVowels() takes a string of many letters and returns a string containing those vowels in correct order",
  function () {
    check(collectTheVowels).whenCalledWith("a").returns("a");
    check(collectTheVowels).whenCalledWith("bcd").returns("");
    check(collectTheVowels).whenCalledWith("bcdepiaouk").returns("eiaou");
    check(collectTheVowels).whenCalledWith("hello world").returns("eoo");
  }
);

function containsNoRepeats(str) {
  // This function should take a string as its argument and return true if each character appears only once and false otherwise
}

skipTest(
  "containsNoRepeats() takes a string and returns true if each character only appears once in the string",
  function () {
    check(containsNoRepeats).whenCalledWith("dog").returns(true);
    check(containsNoRepeats).whenCalledWith("oo").returns(false);
    check(containsNoRepeats).whenCalledWith("dooog").returns(false);
    check(containsNoRepeats).whenCalledWith("iHaveRepeats").returns(false);
    check(containsNoRepeats).whenCalledWith("anat").returns(false);
    check(containsNoRepeats).whenCalledWith("cat").returns(true);
    check(containsNoRepeats).whenCalledWith("abcde").returns(true);
    check(containsNoRepeats).whenCalledWith("abcdea").returns(false);
  }
);
