const { check, runTest, skipTest } = require("../../test-api");

console.log("generateMatrix");

runTest("returns [[null]] when passed 1", function () {
  check(generateMatrix)
    .whenCalledWith(1)
    .returns([[null]]);
});
skipTest("returns a 2*2 matrix of null entries when passed 2", function () {
  check(generateMatrix)
    .whenCalledWith(2)
    .returns([
      [null, null],
      [null, null],
    ]);
});
skipTest("returns a 3*3 matrix of null entries when passed 3", function () {
  check(generateMatrix)
    .whenCalledWith(3)
    .returns([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
});
