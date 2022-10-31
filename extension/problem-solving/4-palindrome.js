const { check, runTest, skipTest } = require("../../test-api");

function palindrome(string) {
  /*
This function should return true if the string is a palindrome and false if not. 
The function should ignore whitespace and be insensitive to capitals.
  */
}

console.log("palindrome()");

runTest("returns false if the string is not a palindrome", function () {
  check(palindrome("cat")).isEqualTo(false);
});

skipTest("returns true for a single letter string", function () {
  check(palindrome("a")).isEqualTo(true);
});

skipTest("returns true for a palindrome", function () {
  check(palindrome("deified")).isEqualTo(true);
});

skipTest("is case insensitive", function () {
  check(palindrome("Anna")).isEqualTo(true);
});

skipTest("ignores white space", function () {
  check(palindrome("I did did I")).isEqualTo(true);
});
