const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

try {
  const pattern = /^!+/;

  // your pattern should match more than 1 ! at the **beginning of a string**

  // use .test() to match all of these strings
  check(pattern.test("!!!sdlasjdlajsd")).isEqualTo(true);
  check(pattern.test("!!askjaa")).isEqualTo(true);
  check(pattern.test("!!!!!adjaksljd")).isEqualTo(true);
  check(pattern.test("!!!32749anks")).isEqualTo(true);

  // use .test() to not match all of these strings
  check(pattern.test("adssdk!!!")).isEqualTo(false);
  check(pattern.test("asdk;alk!!!!")).isEqualTo(false);
  check(pattern.test("errui!!!!")).isEqualTo(false);
  check(pattern.test("cjljad!!!!!!")).isEqualTo(false);

  printGreenMessage("Task 1  - Success :)");
} catch (error) {
  printRedMessage(error);
}

try {
  const pattern = /^!+/;

  // your pattern should match more than 1 ! at the **beginning of a string**

  // use .test() to match all of these strings
  check(pattern.test("!!!sdlasjdlajsd")).isEqualTo(true);
  check(pattern.test("!!askjaa")).isEqualTo(true);
  check(pattern.test("!!!!!adjaksljd")).isEqualTo(true);
  check(pattern.test("!!!32749anks")).isEqualTo(true);

  // use .test() to not match all of these strings
  check(pattern.test("adssdk!!!")).isEqualTo(false);
  check(pattern.test("asdk;alk!!!!")).isEqualTo(false);
  check(pattern.test("errui!!!!")).isEqualTo(false);
  check(pattern.test("cjljad!!!!!!")).isEqualTo(false);

  printGreenMessage("Task 1  - Success :)");
} catch (error) {
  printRedMessage(error);
}

try {
  const pattern = /[abc]{6}/;

  // your pattern should match 6 of a,b or c

  // use .test() to match all of these strings
  check(pattern.test("abcabc")).isEqualTo(true);
  check(pattern.test("cbabac")).isEqualTo(true);
  check(pattern.test("cacaca")).isEqualTo(true);
  check(pattern.test("bbbcca")).isEqualTo(true);

  // use .test() to not match all of these strings
  check(pattern.test("xyzxyz")).isEqualTo(false);
  check(pattern.test("pqrsqp")).isEqualTo(false);
  check(pattern.test("pprrss")).isEqualTo(false);
  check(pattern.test("vsxprh")).isEqualTo(false);

  printGreenMessage("Task 2 - Success :)");
} catch (error) {
  printRedMessage(error);
}

try {
  const pattern = /[^l]l{2}[^l]/;

  // your pattern should match any string containing exactly 2 letters ls

  // use .test() to match all of these strings
  check(pattern.test("hello")).isEqualTo(true);
  check(pattern.test("bells")).isEqualTo(true);
  check(pattern.test("bells")).isEqualTo(true);
  check(pattern.test("bells")).isEqualTo(true);

  // use .test() to not match all of these strings
  check(pattern.test("mile")).isEqualTo(false);
  check(pattern.test("fly")).isEqualTo(false);
  check(pattern.test("wellll")).isEqualTo(false);
  check(pattern.test("mitchelllloyd")).isEqualTo(false);

  printGreenMessage("Task 3 - Success :)");
} catch (error) {
  printRedMessage(error);
}

var YOUR_REGEX_HERE;
