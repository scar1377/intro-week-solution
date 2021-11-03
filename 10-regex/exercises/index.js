const { check, runTest, skipTest } = require("../../../test-api");

/*
Instructions

For each of these tests replace the variable YOUR_REGEX_HERE with a regular expression in order to make each function pass the tests.

e.g.  return YOUR_REGEX_HERE.test(str); becomes -> return /abc/.test(str);
*/

function testCat(str) {
  // Your pattern should match a string containing the characters cat
  return YOUR_REGEX_HERE.test(str);
}

runTest("testCat()", function () {
  check(testCat).whenCalledWith("cat").returns(true);
  check(testCat).whenCalledWith("asdcatas").returns(true);
  check(testCat).whenCalledWith("cat11234").returns(true);
  check(testCat).whenCalledWith("asdcat!").returns(true);
  check(testCat).whenCalledWith("36237cat").returns(true);

  check(testCat).whenCalledWith("ca123").returns(false);
  check(testCat).whenCalledWith("atasdads").returns(false);
  check(testCat).whenCalledWith("caasdlkj").returns(false);
  check(testCat).whenCalledWith("12123ca234").returns(false);
});

function testAtLeast5Digits(str) {
  // Your pattern should match a string containing at least 5 of the digits from 1 to 9 only
  return YOUR_REGEX_HERE.test(str);
}

skipTest("testAtLeast5Digits()", function () {
  check(testAtLeast5Digits).whenCalledWith("12345").returns(true);
  check(testAtLeast5Digits).whenCalledWith("56783").returns(true);
  check(testAtLeast5Digits).whenCalledWith("98764").returns(true);
  check(testAtLeast5Digits).whenCalledWith("13837").returns(true);
  check(testAtLeast5Digits).whenCalledWith("45613837").returns(true);
  check(testAtLeast5Digits).whenCalledWith("abc13837def").returns(true);
  check(testAtLeast5Digits).whenCalledWith("00abcg77777").returns(true);
  check(testAtLeast5Digits).whenCalledWith("13837!f").returns(true);

  check(testAtLeast5Digits).whenCalledWith("123").returns(false);
  check(testAtLeast5Digits).whenCalledWith("12308").returns(false);
  check(testAtLeast5Digits).whenCalledWith("1234").returns(false);
  check(testAtLeast5Digits).whenCalledWith("addc6826asd").returns(false);
});

function testStartsWithExclamationMarks(str) {
  // Your pattern should match one or more exclamation marks at the **beginning of a string**
  // You should look up regex anchors for this exercise
  return YOUR_REGEX_HERE.test(str);
}

skipTest("testStartsWithExclamationMarks()", function () {
  check(testStartsWithExclamationMarks).whenCalledWith("!!!sdlasjdlajsd").returns(true);
  check(testStartsWithExclamationMarks).whenCalledWith("!!askjaa").returns(true);
  check(testStartsWithExclamationMarks).whenCalledWith("!!!!!adjaksljd").returns(true);
  check(testStartsWithExclamationMarks).whenCalledWith("!!!32749anks").returns(true);
  check(testStartsWithExclamationMarks).whenCalledWith("!abc").returns(true);

  check(testStartsWithExclamationMarks).whenCalledWith("adssdk!!!").returns(false);
  check(testStartsWithExclamationMarks).whenCalledWith("asdk;alk!!!!").returns(false);
  check(testStartsWithExclamationMarks).whenCalledWith("errui!!!!").returns(false);
  check(testStartsWithExclamationMarks).whenCalledWith("cjljad!!!!!!").returns(false);
});

function testExact6ABCs(str) {
  // Your pattern should match exactly 6 of a, b or c
  // You should look up regex anchors for this exercise
  return YOUR_REGEX_HERE.test(str);
}

skipTest("testExact6ABCs()", function () {
  check(testExact6ABCs).whenCalledWith("abcabc").returns(true);
  check(testExact6ABCs).whenCalledWith("cbabac").returns(true);
  check(testExact6ABCs).whenCalledWith("cacaca").returns(true);
  check(testExact6ABCs).whenCalledWith("bbbcca").returns(true);

  check(testExact6ABCs).whenCalledWith("xyzxyz").returns(false);
  check(testExact6ABCs).whenCalledWith("pqrsqp").returns(false);
  check(testExact6ABCs).whenCalledWith("pprrss").returns(false);
  check(testExact6ABCs).whenCalledWith("vsxprh").returns(false);
  check(testExact6ABCs).whenCalledWith("abcabca").returns(false);
  check(testExact6ABCs).whenCalledWith("abca").returns(false);
});

function testExact2ConsecutiveLs(str) {
  // Your pattern should match any string containing *exactly* 2 consecutive letter l's
  // n.b. exactly 2 means that 3 or more consecutive l's are not allowed.
  return YOUR_REGEX_HERE.test(str);
}

skipTest("testExact2ConsecutiveLs()", function () {
  check(testExact2ConsecutiveLs).whenCalledWith("hello").returns(true);
  check(testExact2ConsecutiveLs).whenCalledWith("bells").returns(true);
  check(testExact2ConsecutiveLs).whenCalledWith("bellows").returns(true);
  check(testExact2ConsecutiveLs).whenCalledWith("aaaallasdows").returns(true);

  check(testExact2ConsecutiveLs).whenCalledWith("mile").returns(false);
  check(testExact2ConsecutiveLs).whenCalledWith("fly").returns(false);
  check(testExact2ConsecutiveLs).whenCalledWith("wellll").returns(false);
  check(testExact2ConsecutiveLs).whenCalledWith("mitchelllloyd").returns(false);
});

var YOUR_REGEX_HERE;
