const { check, runTest, skipTest } = require("../../test-api");

/*
collectLikeTerms()

Implement a function collectLikeTerms which takes an expression in a string like 'a + a + a'
and then returns a string with a simplified algebraic expression, which in the previous case would be 3a.
The characters should be in alphabetical order by default. 
You can assume that the only operation connecting the terms is addition.
*/

// Once you have passed the current test, change skipTest on the following test to runTest so you are able to run it with Node

function collectLikeTerms(str) {
  const ref = {};
  const newArr = [];
  const arr = str.split(" + ");
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let key;
    if (arr[i].startsWith("1")) key = arr[i].slice(1);
    else key = arr[i];

    if (ref[key]) ref[key]++;
    else ref[key] = 1;
  }

  for (let key in ref) {
    let str = "";
    if (ref[key] === 1) str = key;
    else str += ref[key] + key;
    newArr.push(str);
  }
  return newArr.join(" + ");
}

runTest("returns a letter when passed an expression with a single letter", function () {
  check(collectLikeTerms("a")).isEqualTo("a");
  check(collectLikeTerms("b")).isEqualTo("b");
});

runTest("returns the expression if it is already simplified (not starting with a 1)", function () {
  check(collectLikeTerms("2a")).isEqualTo("2a");
  check(collectLikeTerms("3a")).isEqualTo("3a");
});

runTest("if it starts with 1 then it just returns the number", function () {
  check(collectLikeTerms("1a")).isEqualTo("a");
  check(collectLikeTerms("1y")).isEqualTo("y");
});

runTest("can simply the two duplicated letters added together", function () {
  check(collectLikeTerms("a + a")).isEqualTo("2a");
  check(collectLikeTerms("c + c")).isEqualTo("2c");
});

runTest("can simplify multiple duplicate letters being added together", function () {
  check(collectLikeTerms("a + a + a")).isEqualTo("3a");
  check(collectLikeTerms("z + z + z + z")).isEqualTo("4z");
});

runTest("can simplify two distinct letters (in alphabetical order)", function () {
  check(collectLikeTerms("a + b")).isEqualTo("a + b");
  check(collectLikeTerms("b + a")).isEqualTo("a + b");
});

runTest("can simplify multiple distinct (with some duplicate) letters being added together", function () {
  check(collectLikeTerms("a + b + b")).isEqualTo("a + 2b");
  check(collectLikeTerms("a + a + a + b")).isEqualTo("3a + b");
});
runTest("can simplify multiple distinct terms, terms consist of multiple letters together", function () {
  check(collectLikeTerms("ab + ab")).isEqualTo("2ab");
  check(collectLikeTerms("ab + ab + ab")).isEqualTo("3ab");
});
