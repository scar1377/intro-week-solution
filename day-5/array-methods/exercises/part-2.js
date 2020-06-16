const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

console.log("makeAllUpperCase() can get all the strings from an array");

try {
  check(makeAllUpperCase).whenCalledWith(["a", "b", "c"]).returns(["A", "B", "C"]);
  check(makeAllUpperCase).whenCalledWith(["I", "love", "coding"]).returns(["I", "LOVE", "CODING"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("collectStrings() can get all the strings from an array");
try {
  check(collectStrings).whenCalledWith(["a", "b", "c"]).returns(["a", "b", "c"]);
  check(collectStrings).whenCalledWith(["a", 10, "b", 1000, "c"]).returns(["a", "b", "c"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("getEvenNumbers() can get all the even numbers from an array of numbers");
try {
  check(getEvenNumbers).whenCalledWith([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).returns([2, 4, 6, 8, 10]);
  check(getEvenNumbers).whenCalledWith([9, 100, 13, 20]).returns([100, 20]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("collectPlurals() can collect all the strings ending in an s");
try {
  check(collectPlurals)
    .whenCalledWith(["dogs", "cat", "apples", "kittens", "kiwi"])
    .returns(["dogs", "apples", "kittens"]);

  check(collectPlurals)
    .whenCalledWith(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])
    .returns(["abcs", "humans", "thoughts", "cups"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// creates an array of the given length populated with the given char

console.log("createArray() creates an array of the specified length using a specified character");
try {
  check(createArray).whenCalledWith(3, "!").returns(["!", "!", "!"]);
  check(createArray).whenCalledWith(5, "a").returns(["a", "a", "a", "a", "a"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("deleteManyPasswords() deletes the password property for each user");
try {
  check(deleteManyPasswords)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("countTheObjects() counts all the objects in an array of multi-type items");
try {
  check(countTheObjects)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns(3);
  check(countTheObjects).whenCalledWith([{}, {}, {}, {}, {}]).returns(5);
  check(countTheObjects).whenCalledWith([1, {}, true, {}, {}, false, {}, {}]).returns(5);
  check(countTheObjects)
    .whenCalledWith([1, { cat: "Schnitzel" }, true, {}, {}, false, 42, {}, {}])
    .returns(5);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function getEmptyTills(tills) {
  // tills is the array of shopper objects
  const emptyTills = tills.filter(function (shopper) {
    // each individual shopper is an object in the array
    if (shopper.checkout.length === 0) return true;
    else return false;
  });
  return emptyTills;
}

console.log("getEmptyTills() gets all the tills that are empty");

try {
  const tills = [
    {
      name: "John",
      checkout: ["bread", "eggs", "milk", "sauagaes"],
    },
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "Anat",
      checkout: ["chocolate"],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ];
  check(getEmptyTills(tills)).isEqualTo([
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ]);
  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}
