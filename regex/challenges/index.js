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
  check(extractCode("abcd67yuio")).isEqualTo(67);
  check(extractCode("abcd103yuio")).isEqualTo(103);
  check(extractCode("abcd4567yuio")).isEqualTo(4567);
  check(extractCode("abcd1000289yuio")).isEqualTo(1000289);
});

/*
isValidSortCode()

This function should take a string repesenting a sort code as an argument
A valid sort code should adher to the format: 2 digits hyphen 2 digits hyphen 2 digits
You should return true if the sort code is valid, and false otherwise
*/

skipTest("isValidSortCode() should check is a sort code string is in the correct format", function () {
  check(isValidSortCode("10-34-67")).isEqualTo(true);
  check(isValidSortCode("51-34-58")).isEqualTo(true);
  check(isValidSortCode("85-16-23")).isEqualTo(true);

  check(isValidSortCode("51-349-67")).isEqualTo(false);
  check(isValidSortCode("7980-34-67")).isEqualTo(false);
  check(isValidSortCode("34-12-899")).isEqualTo(false);
  check(isValidSortCode("a8-78-10")).isEqualTo(false);
  check(isValidSortCode("45_78_10")).isEqualTo(false);
});

/*
isProfessionalEmail()

This function should take a string representing an email as an argument
An email is considered to be professional if it does not end with a kiss ("x" or "X")
You should return true if the email is professional, and false otherwise
*/

skipTest("isProfessionalEmail() checks if an email ends with an x", function () {
  check(isProfessionalEmail("x")).isEqualTo(false);
  check(isProfessionalEmail("Dear Sir/Madam")).isEqualTo(true);
  check(isProfessionalEmail("Dear Alex, How are you?")).isEqualTo(true);
  check(isProfessionalEmail("i miss u xx")).isEqualTo(false);
  check(isProfessionalEmail("X_X")).isEqualTo(false);
});

/*
countVowels()

This function should take a string as an argument, and return a count representing the number of vowels it contains
*/

skipTest("countVowels() counts the vowels in a string", function () {
  check(countVowels("")).isEqualTo(0);
  check(countVowels("bcd")).isEqualTo(0);
  check(countVowels("a")).isEqualTo(1);
  check(countVowels("abc")).isEqualTo(1);
  check(countVowels("AEbiO")).isEqualTo(4);
  check(countVowels("aaeee!!!")).isEqualTo(5);
});

/*
sumNums()

This function should take a string as an argument, and return a sum of all the numbers found within
Consecutive digits should be taken as numbers: i.e. "24" = 24, not 6
If there are no numbers, you should return 0
*/

skipTest("sumNums() totals all of the numbers in a string", function () {
  check(sumNums("hello")).isEqualTo(0);
  check(sumNums("1")).isEqualTo(1);
  check(sumNums("12")).isEqualTo(12);
  check(sumNums("1hello2")).isEqualTo(3);
  check(sumNums("12hiya!3")).isEqualTo(15);
});

/*
testValidCountdown()

This function should take a string as an argument
The function must return a boolean depending on if the string is a valid 
collection of letters for the TV show countdown.
In countdown a valid collection contains at least 4 consonants and 3 vowels and have exactly 9 letters
*/

skipTest("testValidCountdown()", function () {
  check(testValidCountdown("aaabbbccc")).isEqualTo(true);
  check(testValidCountdown("eeeedddff")).isEqualTo(true);
  check(testValidCountdown("aeiouwxyz")).isEqualTo(true);
  check(testValidCountdown("aeiouaxyz")).isEqualTo(false);
  check(testValidCountdown("aabbbcccd")).isEqualTo(false);
  check(testValidCountdown("aeiouvwxyz")).isEqualTo(false);
  check(testValidCountdown("aaaaaaaaa")).isEqualTo(false);
  check(testValidCountdown("bbbbbbbbb")).isEqualTo(false);
});

/*
extractRepoName()

This function should take a string representing a github url and return the name of the repo
Github urls are of the form https://github.com/northcoders/intro-week
where "northcoders" is the name of the account and "intro week is the name of the repo"
*/

skipTest("extractRepoName()", function () {
  check(extractRepoName("https://github.com/northcoders/intro-week")).isEqualTo("intro-week");
  check(extractRepoName("https://github.com/northcoders/remote-git-workshop")).isEqualTo("remote-git-workshop");
  check(extractRepoName("https://github.com/myAccount/notes")).isEqualTo("notes");
  check(extractRepoName("https://github.com/myAccount/notes/settings")).isEqualTo("notes");
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
