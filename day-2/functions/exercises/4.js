const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

function capitaliseString() {
  // return the passed string with its first letter capitalised
}

console.log("capitaliseString() can capitalise a single word");
try {
  check(capitaliseString).whenCalledWith("bang").returns("BANG");
  check(capitaliseString).whenCalledWith("apple").returns("APPLE");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
