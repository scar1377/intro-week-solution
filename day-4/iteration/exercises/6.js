const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

const alternatingChars = [];

// your loop here ...

console.log("can push alternating characters into an array");

try {
  check(alternatingChars).isEqualTo(["x", "o", "x", "o", "x", "o", "x", "o"]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
