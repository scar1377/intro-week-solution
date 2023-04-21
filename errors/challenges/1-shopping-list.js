const { check, printGreenMessage, printRedMessage } = require("../../test-api");

const item0 = "apples";
const item1 = "bananas";
const item2 = "pears";

// Use the additional item variables from above to create a variable called shoppingList
let shoppingList = "apples, bananas and pears";

console.log("shoppingList is declared and initialised as a list with values from items 0,1 and 2");

try {
  check(shoppingList).isEqualTo("apples, bananas and pears");
  printGreenMessage("Success :)");
} catch (e) {
  printRedMessage(e);
}

// Don't change anything below this line :)

var EXPRESSION_HERE;
