const { check, runTest, skipTest } = require("../../test-api");

console.log("getFactorials");

runTest("returns [] when passed []", function () {
  check(getFactorials).whenCalledWith([]).returns([]);
});
skipTest("returns one factorial", function () {
  check(getFactorials).whenCalledWith([3]).returns([6]);
});
skipTest("returns multiple factorials", function () {
  check(getFactorials).whenCalledWith([3, 4, 5]).returns([6, 24, 120]);
});
skipTest("returns large factorials", function () {
  check(getFactorials).whenCalledWith([3, 8, 9, 10]).returns([6, 40320, 362880, 3628800]);
});
