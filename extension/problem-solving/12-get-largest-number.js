const { check, runTest, skipTest } = require("../../test-api");

console.log("getLargestNumber");

runTest("if passed a single-digit number then returns that number", () => {
  check(getLargestNumber).whenCalledWith(9).returns(9);
  check(getLargestNumber).whenCalledWith(0).returns(0);
  check(getLargestNumber).whenCalledWith(1).returns(1);
});
skipTest("if passed a 2-digit number then does nothing if they are in descending order", () => {
  check(getLargestNumber).whenCalledWith(43).returns(43);
  check(getLargestNumber).whenCalledWith(81).returns(81);
  check(getLargestNumber).whenCalledWith(21).returns(21);
  check(getLargestNumber).whenCalledWith(20).returns(20);
});
skipTest("if passed a 2-digit number then swaps the numbers if they are are in ascending order", () => {
  check(getLargestNumber).whenCalledWith(19).returns(91);
  check(getLargestNumber).whenCalledWith(23).returns(32);
  check(getLargestNumber).whenCalledWith(35).returns(53);
});
skipTest("if passed a 3-digit number then returns the correctly ordered number", () => {
  check(getLargestNumber).whenCalledWith(473).returns(743);
  check(getLargestNumber).whenCalledWith(850).returns(850);
  check(getLargestNumber).whenCalledWith(801).returns(810);
  check(getLargestNumber).whenCalledWith(100).returns(100);
  check(getLargestNumber).whenCalledWith(219).returns(921);
  check(getLargestNumber).whenCalledWith(581).returns(851);
});
skipTest("returns correctly ordered number for large numbers including those with many trailing zeros", () => {
  check(getLargestNumber).whenCalledWith(12345).returns(54321);
  check(getLargestNumber).whenCalledWith(12345000).returns(54321000);
  check(getLargestNumber).whenCalledWith(1010100).returns(1110000);
  check(getLargestNumber).whenCalledWith(89382291).returns(99883221);
  check(getLargestNumber).whenCalledWith(8001009100).returns(9811000000);
});
