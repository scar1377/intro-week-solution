const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

try {
  const pattern = YOUR_REGEX_HERE;
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match more than 1 ! at the **beginning of a string**

  check(pattern.test("!!!sdlasjdlajsd")).isEqualTo(true);
  check(pattern.test("!!askjaa")).isEqualTo(true);
  check(pattern.test("!!!!!adjaksljd")).isEqualTo(true);
  check(pattern.test("!!!32749anks")).isEqualTo(true);

  check(pattern.test("adssdk!!!")).isEqualTo(false);
  check(pattern.test("asdk;alk!!!!")).isEqualTo(false);
  check(pattern.test("errui!!!!")).isEqualTo(false);
  check(pattern.test("cjljad!!!!!!")).isEqualTo(false);

  printGreenMessage("Task 1 - Success :)");
} catch (error) {
  printRedMessage(error);
}

try {
  const pattern = YOUR_REGEX_HERE;
  // Replace YOUR_REGEX_HERE with a regular expression

  // your pattern should match exactly 6 of a,b or c

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

  printGreenMessage("Task 2 - Success :)");
} catch (error) {
  printRedMessage(error);
}

try {
  const pattern = YOUR_REGEX_HERE;
  // Replace YOUR_REGEX_HERE with a regular expression

  // your pattern should match any string containing exactly 2 consecutive letter ls

  check(pattern.test("hello")).isEqualTo(true);
  check(pattern.test("bells")).isEqualTo(true);
  check(pattern.test("bellows")).isEqualTo(true);
  check(pattern.test("mitchell")).isEqualTo(true);

  check(pattern.test("mile")).isEqualTo(false);
  check(pattern.test("fly")).isEqualTo(false);
  check(pattern.test("wellll")).isEqualTo(false);
  check(pattern.test("mitchelllloyd")).isEqualTo(false);

  printGreenMessage("Task 3 - Success :)");
} catch (error) {
  printRedMessage(error);
}

var YOUR_REGEX_HERE;
