const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

let total = 0;

// use iteration to get the total of all the numbers from 1 to 50

console.log("calculate the sum of several numbers using a loop");

try {
  check(total).isEqualTo(1275);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
