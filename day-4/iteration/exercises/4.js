const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

const sounds = ["fizz", "buzz", "bang", "crash", "wallop"];
const exclaimedSounds = [];

// your loop here...

console.log("check strings with added ! are pushed into exclaimedSounds");

try {
  check(exclaimedSounds).isEqualTo(["fizz!", "buzz!", "bang!", "crash!", "wallop!"]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
