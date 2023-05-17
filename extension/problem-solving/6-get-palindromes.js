const { check, runTest, skipTest } = require("../../test-api");

/*
  This function takes an array of words and returns an array containing only the palindromes.
  A palindrome is a word that is spelled the same way backwards.
  E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
*/
function getPalindromes(words) {
  const palindromesArr = [];
  words.filter((word) => {
    const midIndex = Math.floor(word.length / 2);
    let firstHalf = word.slice(0, midIndex);
    let secondHalf = firstHalf.split("").reverse().join("");
    let wordStr = "";
    if (word.length % 2 === 0) wordStr = firstHalf + secondHalf;
    else wordStr = firstHalf + word[midIndex] + secondHalf;

    if (word === wordStr) palindromesArr.push(word);
  });
  return palindromesArr;
}

console.log("getPalindromes()");

runTest("returns [] when passed []", function () {
  check(getPalindromes([])).isEqualTo([]);
});

runTest("identifies palindromes", function () {
  check(getPalindromes(["racecar"])).isEqualTo(["racecar"]);
  check(getPalindromes(["racecar", "racecar"])).isEqualTo(["racecar", "racecar"]);
});

runTest("ignores non-palindromes", function () {
  check(getPalindromes(["racecar", "kayak", "tacocat"])).isEqualTo(["racecar", "kayak", "tacocat"]);
  check(getPalindromes(["pineapple", "pony", "racecar"])).isEqualTo(["racecar"]);
});

runTest("returns [] when passed no palindromes", function () {
  check(getPalindromes(["pineapple", "watermelon", "pony"])).isEqualTo([]);
});
