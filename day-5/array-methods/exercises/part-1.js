const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

console.log("get the multiples of 10 from 10 to 100");
try {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const multiplesOf10 = items.map((n) => n * 10);

  check(multiplesOf10).isEqualTo([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("adds ? to the words in order to form queries");
try {
  const words = ["who", "what", "why", "how", "huh"];

  const queries = words.map((word) => word + "?");

  check(queries).isEqualTo(["who?", "what?", "why?", "how?", "huh?"]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("will get the name and ages of each person in an array");
try {
  const people = [
    { name: "mitch", age: 30 },
    { name: "anat", age: 24 },
    { name: "howard", age: 58 },
  ];

  const namesAndAges = people.map(({ name, age }) => `${name} - ${age}`);

  check(namesAndAges).isEqualTo(["mitch - 30", "anat - 24", "howard - 58"]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can get the multiples of 3");
try {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const multiplesOf3 = nums.filter((n) => n % 3 === 0);

  check(multiplesOf3).isEqualTo([3, 6, 9, 12, 15, 18]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can get all the words ending in er");
try {
  const words = ["boulder", "wonder", "hello", "hi", "super", "something", "whoa", "booo"];

  const wordsEndingInEr = words.filter((word) => word.endsWith("er"));

  check(wordsEndingInEr).isEqualTo(["boulder", "wonder", "super"]);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can get the names of staff over 28");
try {
  const staff = [
    { name: "Anat", age: 22 },
    { name: "Paul C", age: 31 },
    { name: "Paul R", age: 27 },
    { name: "Vel", age: 29 },
    { name: "Sam", age: 30 },
    { name: "Jonny", age: 32 },
    { name: "Ant", age: 26 },
    { name: "Mitch", age: 28 },
    { name: "Tom", age: 24 },
    { name: "Alex", age: 24 },
  ];

  const staffOver28 = staff.filter(({ age }) => age > 28);

  const namesOfStaffOver28 = staffOver28.map(({ name }) => name);

  check(namesOfStaffOver28).isEqualTo(["Paul C", "Vel", "Sam", "Jonny"]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can sum numbers up to 100 using forEach()");
try {
  let sumUpTo100 = 0; // <- don't change this line
  // Try using .forEach() for this task

  Array.from({ length: 101 }, (_, i) => {
    sumUpTo100 += i;
  });

  check(sumUpTo100).isEqualTo(5050);
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("can find the index position of X");
try {
  const treasureMap = "adhfashasoasduyoaisyioyadiyfoXsasdiyoiaysidyoiaysfi";

  const positionOfX = treasureMap.split("").findIndex((char) => char === "Y");
  // Look at different array methods on MDN and try finding the best one for the job
  check(positionOfX).isEqualTo(29);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var USE_ARRAY_METHOD;
