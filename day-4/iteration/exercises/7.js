const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

const tutors = ["Anat", "Paul C", "Paul R", "Jonny", "Mitch", "Vel", "Alex", "Ant"];
const tutorsAndIndex = [];

// your loop here...

console.log("can add an index and a tutors'name into an array");

try {
  check(tutorsAndIndex).isEqualTo([
    "0 : Anat",
    "1 : Paul C",
    "2 : Paul R",
    "3 : Jonny",
    "4 : Mitch",
    "5 : Vel",
    "6 : Alex",
    "7 : Ant",
  ]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
