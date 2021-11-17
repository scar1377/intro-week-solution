const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function getLastItem(arr) {
  // This function should take an array as an argument and return the last item from it
}

runTest("getLastItem() returns the last item in an array", function () {
  check(getLastItem).whenCalledWith(["a", "b", "c", "d"]).returns("d");
  check(getLastItem).whenCalledWith(["apple", "banana", "pear", "kiwi"]).returns("kiwi");
});

function getLastNItems(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array containing the last n items of the given array
}

skipTest("getLastNItems() returns the last n items in an array", function () {
  check(getLastNItems).whenCalledWith(["a", "b", "c", "d"], 2).returns(["c", "d"]);
  check(getLastNItems).whenCalledWith(["apple", "banana", "pear", "kiwi"], 0).returns([]);
  check(getLastNItems).whenCalledWith(["apple", "banana", "pear", "kiwi"], 3).returns(["banana", "pear", "kiwi"]);
});

function removeItem(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array without the item at index 'n'
}

skipTest("removeItem() removes an item at a given index", function () {
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 2).returns(["a", "b", "d"]);
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 0).returns(["b", "c", "d"]);
  check(removeItem).whenCalledWith(["a", "b", "c", "d"], 1).returns(["a", "c", "d"]);
});

function mergeArrays(arr1, arr2) {
  // This function should take two arrays as arguments and return a new array containing all of arr1 and arr2's elements (in that order)
}

skipTest("mergeArrays() will concatenate two arrays together", function () {
  check(mergeArrays).whenCalledWith(["a", "b"], ["c", "d"]).returns(["a", "b", "c", "d"]);
  check(mergeArrays).whenCalledWith([1], [3, 5, 7]).returns([1, 3, 5, 7]);
  check(mergeArrays).whenCalledWith(["x", "y", "z"], [1, 2, 3, 4]).returns(["x", "y", "z", 1, 2, 3, 4]);
});

function getSandwichFilling(sandwich) {
  // If an array is like a sandwich, the first and last items are the bread
  // This function should take an array as an argument and return an array containing the filling of the sandwich
}

skipTest("getSandwichFilling() returns the inner elements of an array", function () {
  check(getSandwichFilling).whenCalledWith(["a", "b", "c", "d"]).returns(["b", "c"]);
  check(getSandwichFilling).whenCalledWith([10, 20, 30, 40, 50, 60]).returns([20, 30, 40, 50]);
  check(getSandwichFilling).whenCalledWith(["northcoders", "are", "the", "best"]).returns(["are", "the"]);
});

function isEmptyArray(arr) {
  // This function should take an array as an argument and return true if the array is empty, and false otherwise
}

skipTest("isEmptyArray() checks if an array is empty", function () {
  check(isEmptyArray).whenCalledWith([]).returns(true);
  check(isEmptyArray).whenCalledWith(["a", "b", "c", "d"]).returns(false);
  check(isEmptyArray).whenCalledWith(["a"]).returns(false);
});

function howManyArguments() {
  // This function should take any number of arguments and return the number of arguments passed into the function
  // HINT: For this one you should look up 'rest parameters' online - MDN Web Docs and devdocs are excellent sources of JavaScript documentation
}

skipTest("howManyArguments() returns the number of items passed on a single call", function () {
  check(howManyArguments).whenCalledWith("a", "b", "c").returns(3);
  check(howManyArguments).whenCalledWith().returns(0);
  check(howManyArguments).whenCalledWith(1, 2, 3, 4, 5).returns(5);
  check(howManyArguments).whenCalledWith("the", "meaning", "of", "life", "is", 42).returns(6);
});

function updatePosition(coords, direction) {
  /*
  This function should take an array representing coordinates - an x position and a y position - and a string representing a direction, and it should return a new pair of coordinates, with the coords array updated by moving either x or y 1 unit in a particular direction

  If direction is "up" it should move 1 unit up (+ 1 in the y direction)
  If the direction is "down" it should move 1 unit down (- 1 in the y direction)
  If the direction is "right" it should move 1 unit right (+ 1 in the x direction)
  If the direction is "left" it should move 1 unit left (- 1 in the x direction)
  */
}

skipTest("updatePosition() updates a co-ordinates array", function () {
  check(updatePosition).whenCalledWith([10, 10], "up").returns([10, 11]);
  check(updatePosition).whenCalledWith([0, 0], "down").returns([0, -1]);
  check(updatePosition).whenCalledWith([3, 3], "left").returns([2, 3]);
  check(updatePosition).whenCalledWith([7, 50], "right").returns([8, 50]);
});

function addCoins(collection, coin) {
  /*
  In this function, a "coin collection" is represented by an array containing 4 other nested arrays, each representing a slot in the collection in the following way:
   1p   2p   5p   10p
  [[],  [],  [],  []] <-- coinCollection

  This should take two arguments, a coin collection array and a string representing a coin, and return an updated version of the given array with the coin added at the appropriate position
  */
}

skipTest("addCoins() will update the coins in a given slot", function () {
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
});

function accessItem(arr, index) {
  /* 
  This function should take two arguments, an array and an index, and return the element at that specified index

  The index provided may be equal to or greater than the length of the given array. In this case, rather than counting past the end of the array where there are no values, the indexing should be considered to "loop back around" and continue from the start of the array

  For examples of this behaviour, look at the second group of tests below
  */
}

skipTest("accessItem() can access an item inside in an array with a given index below the array length", function () {
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 2).returns("c");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 0).returns("a");
  check(accessItem).whenCalledWith(["a", "b", "c", "d"], 3).returns("d");
});

skipTest(
  "accessItem() can access an item inside in an array with an index equal to or above the array length",
  function () {
    check(accessItem).whenCalledWith(["a", "b", "c", "d"], 4).returns("a");
    check(accessItem).whenCalledWith(["a", "b", "c", "d"], 6).returns("c");
    check(accessItem).whenCalledWith(["a", "b", "c", "d"], 10).returns("c");
    check(accessItem).whenCalledWith(["a", "b", "c", "d"], 11).returns("d");
  }
);

function findDayOfTheWeek(num) {
  // This function should take a number from 1 to 7 inclusive, and return a string of the corresponding day of the week
}

skipTest("findDayOfTheWeek() returns the day of the week given a passed number", function name(params) {
  check(findDayOfTheWeek).whenCalledWith(2).returns("Tuesday");
  check(findDayOfTheWeek).whenCalledWith(3).returns("Wednesday");
  check(findDayOfTheWeek).whenCalledWith(1).returns("Monday");

  check(findDayOfTheWeek).whenCalledWith(6).returns("Saturday");
  check(findDayOfTheWeek).whenCalledWith(7).returns("Sunday");
});

function extractNumber(str) {
  /* 
  This function should take a string that consists of a series of letters that, somewhere inside of it, has a number embedded between two parentheses ( )

  It should extract that number and return it
  */
}

skipTest("extractNumber() should return the number buried inside a string of random characters", function () {
  check(extractNumber).whenCalledWith("lasjdasasj(123)asljdlajk").returns(123);
  check(extractNumber).whenCalledWith("qwasdaoyer(44687)iuwyeibasdahgsd").returns(44687);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(19827)iusdfsdfsd").returns(19827);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5601)iusdfsdfsd").returns(5601);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(29)iusdfsdfsd").returns(29);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5)iusdfsdfsd").returns(5);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(513)iusdfsdfsd").returns(513);
});
