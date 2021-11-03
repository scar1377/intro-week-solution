const { check, runTest, skipTest } = require("../../test-api");

console.log("pairDNA");

runTest('returns [] when passed ""', function () {
  check(pairDNA).whenCalledWith("").returns([]);
});
skipTest("returns a single pair in an array when passed one", function () {
  check(pairDNA).whenCalledWith("G").returns(["GC"]);
});
skipTest("returns multiple pairs when passed multiple chars", function () {
  check(pairDNA).whenCalledWith("GGC").returns(["GC", "GC", "CG"]);
});
skipTest("returns correctly when passed lowercase letters", function () {
  check(pairDNA).whenCalledWith("gat").returns(["GC", "AT", "TA"]);
});
skipTest("ignores invalid chars but still returns valid ones within the string", function () {
  check(pairDNA).whenCalledWith("PGYYYHVB").returns(["GC"]);
});
