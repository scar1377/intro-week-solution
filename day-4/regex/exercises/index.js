const { check, runTest, skipTest } = require("../../../test-api");

runTest("Exercise 0", function () {
  const pattern = YOUR_REGEX_HERE;
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match a string containing the characters cat

  check(pattern.test("cat")).isEqualTo(true);
  check(pattern.test("asdcatas")).isEqualTo(true);
  check(pattern.test("cat11234")).isEqualTo(true);
  check(pattern.test("asdcat!")).isEqualTo(true);
  check(pattern.test("36237cat")).isEqualTo(true);

  check(pattern.test("ca123")).isEqualTo(false);
  check(pattern.test("atasdads")).isEqualTo(false);
  check(pattern.test("caasdlkj")).isEqualTo(false);
  check(pattern.test("12123ca234")).isEqualTo(false);
});

skipTest("Exercise 1", function () {
  const pattern = YOUR_REGEX_HERE;
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match a string containing at least 5 of the digits from 1 to 9 only

  check(pattern.test("12345")).isEqualTo(true);
  check(pattern.test("56783")).isEqualTo(true);
  check(pattern.test("98764")).isEqualTo(true);
  check(pattern.test("13837")).isEqualTo(true);
  check(pattern.test("45613837")).isEqualTo(true);
  check(pattern.test("abc13837def")).isEqualTo(true);
  check(pattern.test("00abcg77777")).isEqualTo(true);
  check(pattern.test("13837!f")).isEqualTo(true);

  check(pattern.test("123")).isEqualTo(false);
  check(pattern.test("12308")).isEqualTo(false);
  check(pattern.test("1234")).isEqualTo(false);
  check(pattern.test("addc6826asd")).isEqualTo(false);
});

skipTest("Exercise 2", function () {
  const pattern = YOUR_REGEX_HERE;
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match more than 1 ! at the **beginning of a string**
  // You should look up regex anchors for this exercise !

  check(pattern.test("!!!sdlasjdlajsd")).isEqualTo(true);
  check(pattern.test("!!askjaa")).isEqualTo(true);
  check(pattern.test("!!!!!adjaksljd")).isEqualTo(true);
  check(pattern.test("!!!32749anks")).isEqualTo(true);
  check(pattern.test("!abc")).isEqualTo(true);

  check(pattern.test("adssdk!!!")).isEqualTo(false);
  check(pattern.test("asdk;alk!!!!")).isEqualTo(false);
  check(pattern.test("errui!!!!")).isEqualTo(false);
  check(pattern.test("cjljad!!!!!!")).isEqualTo(false);
});

skipTest("Exercise 3", function () {
  const pattern = YOUR_REGEX_HERE;
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match exactly 6 of a, b or c
  // You should look up regex anchors for this exercise !

  check(pattern.test("abcabc")).isEqualTo(true);
  check(pattern.test("cbabac")).isEqualTo(true);
  check(pattern.test("cacaca")).isEqualTo(true);
  check(pattern.test("bbbcca")).isEqualTo(true);

  check(pattern.test("xyzxyz")).isEqualTo(false);
  check(pattern.test("pqrsqp")).isEqualTo(false);
  check(pattern.test("pprrss")).isEqualTo(false);
  check(pattern.test("vsxprh")).isEqualTo(false);
  check(pattern.test("abcabca")).isEqualTo(false);
  check(pattern.test("abca")).isEqualTo(false);
});

skipTest("Exercise 4", function () {
  const pattern = YOUR_REGEX_HERE;
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match any string containing exactly 2 consecutive letter ls

  check(pattern.test("hello")).isEqualTo(true);
  check(pattern.test("bells")).isEqualTo(true);
  check(pattern.test("bellows")).isEqualTo(true);
  check(pattern.test("aaaallasdows")).isEqualTo(true);

  check(pattern.test("mile")).isEqualTo(false);
  check(pattern.test("fly")).isEqualTo(false);
  check(pattern.test("wellll")).isEqualTo(false);
  check(pattern.test("mitchelllloyd")).isEqualTo(false);
});

var YOUR_REGEX_HERE;
