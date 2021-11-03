const { check, runTest, skipTest } = require("../../test-api");

console.log("getWilliams");

runTest("returns [] when passed []", function () {
  check(getWilliams).whenCalledWith([]).returns([]);
});
skipTest("returns a Williams from a mixed array", function () {
  check(getWilliams).whenCalledWith(["Harry Williams", "Charlotte Bank"]).returns(["Harry Williams"]);
});
skipTest("returns multiple Williams from a mixed array", function () {
  check(getWilliams)
    .whenCalledWith(["Harry Williams", "Charlotte Williams"])
    .returns(["Harry Williams", "Charlotte Williams"]);
});
skipTest("ignores Williams found in first names", function () {
  check(getWilliams).whenCalledWith(["William Jones", "Harry Williams"]).returns(["Harry Williams"]);
});
skipTest("ignores Williams found in extended last names", function () {
  check(getWilliams).whenCalledWith(["John Williams", "Chris Williamson"]).returns(["John Williams"]);
});
