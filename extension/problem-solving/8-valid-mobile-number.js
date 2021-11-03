const { check, skipTest, skipTest } = require("../../test-api");

// declare validMobileNumber here

console.log("validMobileNumber");
runTest("returns false when passed a string of the wrong length", function () {
  check(validMobileNumber).whenCalledWith("123").returns(false);
  check(validMobileNumber).whenCalledWith("0750617250638").returns(false);
  check(validMobileNumber).whenCalledWith("+447712368768724988").returns(false);
});
skipTest("returns true when passed a valid plain phone num string", function () {
  check(validMobileNumber).whenCalledWith("07506172506").returns(true);
});
skipTest("returns true when passed a valid string with a + prefix", function () {
  check(validMobileNumber).whenCalledWith("+447506172506").returns(true);
});
skipTest("returns true when passed a valid international phone num", function () {
  check(validMobileNumber).whenCalledWith("00447506172506").returns(true);
});
skipTest("returns false when passed a string with invalid chars", function () {
  check(validMobileNumber).whenCalledWith("07506189foo").returns(false);
});
skipTest("returns true when passed random other valid phone numbers", function () {
  check(validMobileNumber).whenCalledWith("00447555123456").returns(true);
  check(validMobileNumber).whenCalledWith("+447676111222").returns(true);
  check(validMobileNumber).whenCalledWith("07898888643").returns(true);
  check(validMobileNumber).whenCalledWith("07766555432").returns(true);
  check(validMobileNumber).whenCalledWith("07989765490").returns(true);
});
skipTest("returns false when passed random other invalid phone numbers", function () {
  check(validMobileNumber).whenCalledWith("004475551&&&23456").returns(false);
  check(validMobileNumber).whenCalledWith("-447676111222").returns(false);
  check(validMobileNumber).whenCalledWith("09898888643").returns(false);
  check(validMobileNumber).whenCalledWith("+449166555432").returns(false);
  check(validMobileNumber).whenCalledWith("00448989765493").returns(false);
  check(validMobileNumber).whenCalledWith("cats").returns(false);
});
