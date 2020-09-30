const { check, runTest, skipTest } = require("../../../test-api");

// You should look up Regex methods to help you in these challenges :)
// Try this link -> https://javascript.info/regexp-introduction#regular-expressions

// Declare a function extractCode that extracts a number from a string
// Use the assertions below to help guide you in your logic

runTest("extractCode() can find the total from a single code string", function () {
  check(extractCode).whenCalledWith("abcd67yuio").returns(67);
  check(extractCode).whenCalledWith("abcd103yuio").returns(103);
  check(extractCode).whenCalledWith("abcd4567yuio").returns(4567);
  check(extractCode).whenCalledWith("abcd1000289yuio").returns(1000289);
});

// Declare and implement a function isValidSortCode
// Checks if a passed string is a valid sort code - this should be in the form 2 digits hyphen 2 digits hyphen 2 digits

runTest("isValidSortCode() should check is a sort code string is in the correct format", function () {
  check(isValidSortCode).whenCalledWith("10-34-67").returns(true);
  check(isValidSortCode).whenCalledWith("51-34-58").returns(true);
  check(isValidSortCode).whenCalledWith("85-16-23").returns(true);

  check(isValidSortCode).whenCalledWith("51-349-67").returns(false);
  check(isValidSortCode).whenCalledWith("7980-34-67").returns(false);
  check(isValidSortCode).whenCalledWith("34-12-899").returns(false);
  check(isValidSortCode).whenCalledWith("a8-78-10").returns(false);
  check(isValidSortCode).whenCalledWith("45_78_10").returns(false);
});
