function validMobileNumber(num) {
  /*
    This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
    A valid mobile number may begin with '07' followed by 9 more digits.
    It may also begin with '+447' followed by 9 more digits.
    It may also begin with '00447' followed by 9 more digits.
    Anything else is invalid.
  */
  return /^(\+447|07|00447)[0-9]{9,9}$/.test(num);
}

function sumDigitsFromString(str) {
  /*
    This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
    E.g. 'foo5bar6cat1' => 12
    'foo99cat' => 18
    Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
  */
  return str.split("").reduce((total, char) => (+char ? total + +char : total), 0);
}

function getWilliams(arr) {
  return arr.filter((name) => name.endsWith("Williams"));
  /*
    This function takes an array of full names and returns an array containing only the people whose last name is Williams.
    E.g. ['Charlotte Jones', 'Rebecca Williams', 'Harry Williams', 'John Williamson', 'William Jones'] => ['Rebecca Williams', 'Harry Williams']
  */
}

function getFactorials(nums) {
  /*
    This function takes an array of positive integers and returns an array of the factorials of these numbers.
    E.g. [4, 3, 2] => [24, 6, 2]
    The factorial of a number is the product of that number and all the integers below it.
    E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */
  const getFact = (num, total = 1) => (num === 1 ? total : getFact(num - 1, total * num));
  return nums.map((num) => getFact(num));
}

function largestNumber(num) {
  /*
    This function takes a number and returns the largest number that can be made with the same digits.
    E.g. if num is 23, the function should return 32.
    E.g. if num is 9, the function should return 9.
    E.g. if num is 581 the function should return 851.
  */
  return +num.toString().split("").map(Number).sort().reverse().map(String).join("");
}

function generateMatrix(n) {
  /*
    This function takes a number, n, and returns an n*n nested array populated with the value null.
    E.g. if n is 3, we want:
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  */
  return Array.from({ length: n }, () => Array.from({ length: n }, () => null));
}

function findWrongWayFruit(orchard) {
  /*
    This array takes an array of fruit in the format:
    ['apple', 'apple', 'apple', 'apple', 'elppa', 'apple']
    The fruit will all be the 'right way round' apart from 1 fruit!
    Your function should return its index position. E.g. in this example, 4.
    NB The fruit will not always be apple but it will always be an orchard of the same kind of fruit.
  */
  return orchard.findIndex((item, index) => {
    return index < orchard.length - 1
      ? item !== orchard[index - 1] && item !== orchard[index + 1]
      : orchard[index - 1] !== item;
  });
}

function pairDNA(dna) {
  /*
    This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
    E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']
    If any nonsensical letters are passed as DNA they should be ignored.
    E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */
  const dnaLookup = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna
    .split("")
    .filter((char) => /[GCTA]/.test(char.toUpperCase))
    .map((letter) => `${letter.toUpperCase()}${dnaLookup[letter.toUpperCase()]}`);
}

function tallyHashtagsAndMentions(str) {
  /* 
    This function receives a string that will contain a number of mentions and hashtags as on Twitter.
    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"
    The function should return an object describing the number of hashtags and mentions found:
    { hashtags: 2, mentions: 1 }
  */
  return str.split(" ").reduce(
    ({ hashtags, mentions }, word) => {
      if (/#/.test(word)) return { hashtags: hashtags + 1, mentions };
      if (/@/.test(word)) return { hashtags: hashtags, mentions: mentions + 1 };
      return { hashtags, mentions };
    },
    { hashtags: 0, mentions: 0 }
  );
}

// ---------- Do not change the code below this line --------------
module.exports = {
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions,
};
