const { check, runTest, skipTest } = require("../../test-api");

/*
collectLikeTerms()

Implement a function collectLikeTerms which takes an expression in a string like 'a + a + a'
and then returns a string with a simplified algebraic expression, which in the previous case would be 3a.
The characters should be in alphabetical order by default. 
You can assume that the only operation connecting the terms is addition.
*/

function collectLikeTerms(expression) {
  const terms = expression.split(" + ");

  const tally = {};
  terms.forEach((term) => {
    const [_, coeff, letter] = term.match(/(\d*)([a-z]+)/);
    if (tally[letter]) tally[letter] += coeff === "" ? 1 : +coeff;
    else tally[letter] = coeff === "" ? 1 : +coeff;
  });

  return Object.entries(tally)
    .sort(([letterA], [letterB]) => (letterA <= letterB ? -1 : 1))
    .map(([letter, quantity]) => (quantity === 1 ? letter : `${quantity}${letter}`))
    .join(" + ");
}

runTest("returns a letter when passed an expression with a single letter", function () {
  check(collectLikeTerms).whenCalledWith("a").returns("a");
  check(collectLikeTerms).whenCalledWith("b").returns("b");
});

runTest("returns the expression if it is already simplified (not starting with a 1)", function () {
  check(collectLikeTerms).whenCalledWith("2a").returns("2a");
  check(collectLikeTerms).whenCalledWith("3a").returns("3a");
});

runTest("if it starts with 1 then it just returns the number", function () {
  check(collectLikeTerms).whenCalledWith("1a").returns("a");
  check(collectLikeTerms).whenCalledWith("1y").returns("y");
});

runTest("can simply the two duplicated letters added together", function () {
  check(collectLikeTerms).whenCalledWith("a + a").returns("2a");
  check(collectLikeTerms).whenCalledWith("c + c").returns("2c");
});

runTest("can simplify multiple duplicate letters being added together", function () {
  check(collectLikeTerms).whenCalledWith("a + a + a").returns("3a");
  check(collectLikeTerms).whenCalledWith("z + z + z + z").returns("4z");
});

runTest("can simplify two distinct letters (in alphabetical order)", function () {
  check(collectLikeTerms).whenCalledWith("a + b").returns("a + b");
  check(collectLikeTerms).whenCalledWith("b + a").returns("a + b");
});

runTest("can simplify multiple distinct (with some duplicate) letters being added together", function () {
  check(collectLikeTerms).whenCalledWith("a + b + b").returns("a + 2b");
  check(collectLikeTerms).whenCalledWith("a + a + a + b").returns("3a + b");
});
runTest("can simplify multiple distinct terms, terms consist of multiple letters together", function () {
  check(collectLikeTerms).whenCalledWith("ab + ab").returns("2ab");
  check(collectLikeTerms).whenCalledWith("ab + ab + ab").returns("3ab");
});
