const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges you are expected to declare your own function with the name and suggested behaviour provided.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.

You should look up Regex methods to help you in these challenges :)
Try this link -> https://javascript.info/regexp-introduction#regular-expressions
*/

/*
extractCode()

This function should take a string as an argument
Somwhere in the middle of the string, there will be a series of consecutive digits composing a number
You should extract that number from the string and return it
*/

runTest("extractCode() can find the total from a single code string", function () {
  check(extractCode).whenCalledWith("abcd67yuio").returns(67);
  check(extractCode).whenCalledWith("abcd103yuio").returns(103);
  check(extractCode).whenCalledWith("abcd4567yuio").returns(4567);
  check(extractCode).whenCalledWith("abcd1000289yuio").returns(1000289);
});

/*
isValidSortCode()

This function should take a string repesenting a sort code as an argument
A valid sort code should adher to the format: 2 digits hyphen 2 digits hyphen 2 digits
You should return true if the sort code is valid, and false otherwise
*/

skipTest("isValidSortCode() should check is a sort code string is in the correct format", function () {
  check(isValidSortCode).whenCalledWith("10-34-67").returns(true);
  check(isValidSortCode).whenCalledWith("51-34-58").returns(true);
  check(isValidSortCode).whenCalledWith("85-16-23").returns(true);

  check(isValidSortCode).whenCalledWith("51-349-67").returns(false);
  check(isValidSortCode).whenCalledWith("7980-34-67").returns(false);
  check(isValidSortCode).whenCalledWith("34-12-899").returns(false);
  check(isValidSortCode).whenCalledWith("a8-78-10").returns(false);
  check(isValidSortCode).whenCalledWith("45_78_10").returns(false);
});

/*
isProfessionalEmail()

This function should take a string representing an email as an argument
An email is considered to be professional if it does not end with a kiss ("x" or "X")
You should return true if the email is professional, and false otherwise
*/

skipTest("isProfessionalEmail() checks if an email ends with an x", function () {
  check(isProfessionalEmail).whenCalledWith("x").returns(false);
  check(isProfessionalEmail).whenCalledWith("Dear Sir/Madam").returns(true);
  check(isProfessionalEmail).whenCalledWith("Dear Alex, How are you?").returns(true);
  check(isProfessionalEmail).whenCalledWith("i miss u xx").returns(false);
  check(isProfessionalEmail).whenCalledWith("X_X").returns(false);
});

/*
countVowels()

This function should take a string as an argument, and return a count representing the number of vowels it contains
*/

skipTest("countVowels() counts the vowels in a string", function () {
  check(countVowels).whenCalledWith("").returns(0);
  check(countVowels).whenCalledWith("bcd").returns(0);
  check(countVowels).whenCalledWith("a").returns(1);
  check(countVowels).whenCalledWith("abc").returns(1);
  check(countVowels).whenCalledWith("AEbiO").returns(4);
  check(countVowels).whenCalledWith("aaeee!!!").returns(5);
});

/*
sumNums()

This function should take a string as an argument, and return a sum of all the numbers found within
Consecutive digits should be taken as numbers: i.e. "24" = 24, not 6
If there are no numbers, you should return 0
*/

skipTest("sumNums() totals all of the numbers in a string", function () {
  check(sumNums).whenCalledWith("hello").returns(0);
  check(sumNums).whenCalledWith("1").returns(1);
  check(sumNums).whenCalledWith("12").returns(12);
  check(sumNums).whenCalledWith("1hello2").returns(3);
  check(sumNums).whenCalledWith("12hiya!3").returns(15);
});

/*
testExact2ConsecutiveLs()

This function should take a string as an argument
You will need to check whether or not it contains *exactly* 2 consecutive occurrences of the letter "l"
This means that there *must* be exactly 2 "l"s in total and they *must* be consecutive
You should return true if this is the case, and false otherwise
*/

skipTest("testExact2ConsecutiveLs()", function () {
  check(testExact2ConsecutiveLs("ll")).isEqualTo(true);
  check(testExact2ConsecutiveLs("hello")).isEqualTo(true);
  check(testExact2ConsecutiveLs("bells")).isEqualTo(true);
  check(testExact2ConsecutiveLs("bellows")).isEqualTo(true);
  check(testExact2ConsecutiveLs("aaaallasdows")).isEqualTo(true);
  check(testExact2ConsecutiveLs("llama")).isEqualTo(true);
  check(testExact2ConsecutiveLs("well")).isEqualTo(true);

  check(testExact2ConsecutiveLs("mile")).isEqualTo(false);
  check(testExact2ConsecutiveLs("fly")).isEqualTo(false);
  check(testExact2ConsecutiveLs("wellll")).isEqualTo(false);
  check(testExact2ConsecutiveLs("mitchelllloyd")).isEqualTo(false);
  check(testExact2ConsecutiveLs("l")).isEqualTo(false);
});
