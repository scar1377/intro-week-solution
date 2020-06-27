const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

// getLastItem() should return the last item from an array

console.log("getLastItem() returns the last item in an array");

function getLastItem(arr) {
  return arr[arr.length - 1];
}

try {
  check(getLastItem).whenCalledWith(["a", "b", "c", "d"]).returns("d");
  check(getLastItem).whenCalledWith(["apple", "banana", "pear", "kiwi"]).returns("kiwi");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// getLastNItems() return an array with the last n items of the array

console.log("getLastNItems() returns the last n items in an array");
try {
  check(getLastNItems).whenCalledWith(["a", "b", "c", "d"], 2).returns(["c", "d"]);
  check(getLastNItems).whenCalledWith(["apple", "banana", "pear", "kiwi"], 0).returns([]);
  check(getLastNItems).whenCalledWith(["apple", "banana", "pear", "kiwi"], 3).returns(["banana", "pear", "kiwi"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// removeItem() returns a new array without the item on position 'n', effectively removing it from the array

console.log("removeItem() removes an item at a given index");
try {
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 2).returns(["a", "b", "d"]);
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 0).returns(["b", "c", "d"]);
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 1).returns(["a", "c", "d"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// mergeArrays() returns a new array containing all of arr1 and arr2's elements

console.log("mergeArrays() will concatenate two arrays together");

try {
  check(mergeArrays).whenCalledWith(["a", "b"], ["c", "d"]).returns(["a", "b", "c", "d"]);
  check(mergeArrays).whenCalledWith([1], [3, 5, 7]).returns([1, 3, 5, 7]);
  check(mergeArrays).whenCalledWith(["x", "y", "z"], [1, 2, 3, 4]).returns(["x", "y", "z", 1, 2, 3, 4]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// if an array is like a sandwich, the first and last items are the bread
// getSandwichFilling() should return an array with the filling of the sandwich

console.log("getSandwichFilling() returns the inner elements of an array");
try {
  check(getSandwichFilling).whenCalledWith(["a", "b", "c", "d"]).returns(["b", "c"]);
  check(getSandwichFilling).whenCalledWith([10, 20, 30, 40, 50, 60]).returns([20, 30, 40, 50]);
  check(getSandwichFilling).whenCalledWith(["northcoders", "are", "the", "best"]).returns(["are", "the"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// isEmptyArray() should return a boolean checking if an array is empty

console.log("isEmptyArray() checks if an array is empty");
try {
  check(isEmptyArray).whenCalledWith([]).returns(true);
  check(isEmptyArray).whenCalledWith(["a", "b", "c", "d"]).returns(false);
  check(isEmptyArray).whenCalledWith(["a"]).returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// howManyArguments() should return the number of arguments passed into the function
// HINT: For this one you should look at notes.md

console.log("howManyArguments() returns the number of items passed on a single call");
try {
  check(howManyArguments).whenCalledWith("a", "b", "c").returns(3);
  check(howManyArguments).whenCalledWith().returns(0);
  check(howManyArguments).whenCalledWith(1, 2, 3, 4, 5).returns(5);
  check(howManyArguments).whenCalledWith("the", "meaning", "of", "life", "is", 42).returns(6);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// updatePosition() takes an array representing coordinates - an x position and a y position - and a direction. It shouuld return a new pair of coordinates with the coordinates array updated by moving either 1 unit in a particular direction.

// If direction is up it should move 1 unit up (+ 1 in the y direction)
// If the direction is down it should move 1 unit down (- 1 in the y direction)
// If the direction is right it should move 1 unit right (+ 1 in the x direction)
// If the direction is left it should move 1 unit left (- 1 in the x direction)

console.log("updatePosition() updates a co-ordinates array");
try {
  check(updatePosition).whenCalledWith([10, 10], "up").returns([10, 11]);
  check(updatePosition).whenCalledWith([0, 0], "down").returns([0, -1]);
  check(updatePosition).whenCalledWith([3, 3], "left").returns([2, 3]);
  check(updatePosition).whenCalledWith([7, 50], "right").returns([8, 50]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// in this task, addCoins() will take a "coin collection" which is an array consisting of 4 other nested arrays
// each nested array represents a slot in the coin collection in the following way:
//  1p   2p   5p   10p
// [[],  [],  [],  []] <-- coinCollection
// addCoins() will take the coinCollection and some money and will need to update a slot with some of the coins at a given // position

console.log("addCoins() will update the coins in a given slot");

try {
  check(addCoins)
    .whenCalledWith([[], [], [], []], "1p")
    .returns([["1p"], [], [], []]);

  check(addCoins)
    .whenCalledWith([[], [], [], []], "2p")
    .returns([[], ["2p"], [], []]);

  check(addCoins)
    .whenCalledWith([[], ["2p"], [], []], "2p")
    .returns([[], ["2p", "2p"], [], []]);

  check(addCoins)
    .whenCalledWith([[], [], [], []], "5p")
    .returns([[], [], ["5p"], []]);

  check(addCoins)
    .whenCalledWith([["1p"], [], [], ["10p", "10p"]], "2p")
    .returns([["1p"], ["2p"], [], ["10p", "10p"]]);

  check(addCoins)
    .whenCalledWith([[], [], ["5p", "5p"], []], "5p")
    .returns([[], [], ["5p", "5p", "5p"], []]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// accessItem() should access an array element at a specified index position

console.log("accessItem()");
console.log("  can access an item inside in an array with a given index below the array length");
try {
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 2).returns("c");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 0).returns("a");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 3).returns("d");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

console.log("  can access an item inside in an array with an index equal to or above the array length");
try {
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 4).returns("a");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 6).returns("c");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 10).returns("c");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 11).returns("d");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// findDayOfTheWeek() will need to return the day of the week
// in this task,
// 1 -> Monday, 2 -> Tuesday, 3 -> Wednesday, 4 -> Thursday, 5 -> Friday, 6 -> Saturday, 7 -> Sunday

console.log("findDayOfTheWeek() returns the day of the week given a passed number");
try {
  check(findDayOfTheWeek).whenCalledWith(2).returns("Tuesday");
  check(findDayOfTheWeek).whenCalledWith(3).returns("Wednesday");
  check(findDayOfTheWeek).whenCalledWith(1).returns("Monday");

  check(findDayOfTheWeek).whenCalledWith(6).returns("Saturday");
  check(findDayOfTheWeek).whenCalledWith(7).returns("Sunday");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

// extractNumber() should return the number embedded between the ( ) parentheses.
// In this challenge, research the .match() method and use your knowledge of regular expressions

console.log("extractNumber() should return the number buried inside a string of random characters");

try {
  check(extractNumber).whenCalledWith("lasjdasasj(123)asljdlajk").returns(123);
  check(extractNumber).whenCalledWith("qwasdaoyer(44687)iuwyeibasdahgsd").returns(44687);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(19827)iusdfsdfsd").returns(19827);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5601)iusdfsdfsd").returns(5601);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(29)iusdfsdfsd").returns(29);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5)iusdfsdfsd").returns(5);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(513)iusdfsdfsd").returns(513);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
