const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

const items = [];

// your loop here ...

console.log("check the even numbers 0 to 14 are pushed into items");

try {
  check(items).isEqualTo([0, 2, 4, 6, 8, 10, 12, 14]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
