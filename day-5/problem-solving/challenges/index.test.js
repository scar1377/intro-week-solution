const {
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions,
} = require("./index.js");

describe("validMobileNumber", () => {
  it("returns false when passed a string of the wrong length", () => {
    expect(validMobileNumber("123")).toBe(false);
    expect(validMobileNumber("0750617250638")).toBe(false);
    expect(validMobileNumber("+447712368768724988")).toBe(false);
  });
  it("returns true when passed a valid plain phone num string", () => {
    expect(validMobileNumber("07506172506")).toBe(true);
  });
  it("returns true when passed a valid string with a + prefix", () => {
    expect(validMobileNumber("+447506172506")).toBe(true);
  });
  it("returns true when passed a valid international phone num", () => {
    expect(validMobileNumber("00447506172506")).toBe(true);
  });
  it("returns false when passed a string with invalid chars", () => {
    expect(validMobileNumber("07506189foo")).toBe(false);
  });
  it("returns true when passed random other valid phone numbers", () => {
    expect(validMobileNumber("00447555123456")).toBe(true);
    expect(validMobileNumber("+447676111222")).toBe(true);
    expect(validMobileNumber("07898888643")).toBe(true);
    expect(validMobileNumber("07766555432")).toBe(true);
    expect(validMobileNumber("07989765490")).toBe(true);
  });
  it("returns false when passed random other invalid phone numbers", () => {
    expect(validMobileNumber("004475551&&&23456")).toBe(false);
    expect(validMobileNumber("-447676111222")).toBe(false);
    expect(validMobileNumber("09898888643")).toBe(false);
    expect(validMobileNumber("+449166555432")).toBe(false);
    expect(validMobileNumber("00448989765493")).toBe(false);
    expect(validMobileNumber("cats")).toBe(false);
  });
});

describe("sumDigitsFromString", () => {
  it("picks out a digit from a string and returns", () => {
    expect(sumDigitsFromString("foo5foo")).toBe(5);
  });
  it("sums multiple digits from a string", () => {
    expect(sumDigitsFromString("5foo5foo")).toBe(10);
  });
  it("returns a sum of several digits in a string", () => {
    expect(sumDigitsFromString("hello1world5this3is2a2string")).toBe(13);
  });
  it("treats consecutive digits as individual numbers", () => {
    expect(sumDigitsFromString("he110world")).toBe(2);
  });
});

describe("getWilliams", () => {
  it("returns [] when passed []", () => {
    expect(getWilliams([])).toEqual([]);
  });
  it("returns a Williams from a mixed array", () => {
    expect(getWilliams(["Harry Williams", "Charlotte Bank"])).toEqual(["Harry Williams"]);
  });
  it("returns multiple Williams from a mixed array", () => {
    expect(getWilliams(["Harry Williams", "Charlotte Williams"])).toEqual(["Harry Williams", "Charlotte Williams"]);
  });
  it("ignores Williams found in first names", () => {
    expect(getWilliams(["William Jones", "Harry Williams"])).toEqual(["Harry Williams"]);
  });
  it("ignores Williams found in extended last names", () => {
    expect(getWilliams(["John Williams", "Chris Williamson"])).toEqual(["John Williams"]);
  });
});

describe("getFactorials", () => {
  it("returns [] when passed []", () => {
    expect(getFactorials([])).toEqual([]);
  });
  it("returns one factorial", () => {
    expect(getFactorials([3])).toEqual([6]);
  });
  it("returns multiple factorials", () => {
    expect(getFactorials([3, 4, 5])).toEqual([6, 24, 120]);
  });
  it("returns largest factorials", () => {
    expect(getFactorials([3, 8, 9, 10])).toEqual([6, 40320, 362880, 3628800]);
  });
});

describe("largestNumber", () => {
  it("if passed a single-digit number then returns that number", () => {
    expect(largestNumber(9)).toBe(9);
    expect(largestNumber(0)).toBe(0);
    expect(largestNumber(1)).toBe(1);
  });
  it("if passed a 2-digit number then does nothing if they are in descending order", () => {
    expect(largestNumber(43)).toBe(43);
    expect(largestNumber(81)).toBe(81);
    expect(largestNumber(21)).toBe(21);
    expect(largestNumber(20)).toBe(20);
  });
  it("if passed a 2-digit number then swaps the numbers if they are are in ascending order", () => {
    expect(largestNumber(19)).toBe(91);
    expect(largestNumber(23)).toBe(32);
    expect(largestNumber(35)).toBe(53);
  });
  it("if passed a 3-digit number then returns the correctly ordered number", () => {
    expect(largestNumber(473)).toBe(743);
    expect(largestNumber(850)).toBe(850);
    expect(largestNumber(801)).toBe(810);
    expect(largestNumber(100)).toBe(100);
    expect(largestNumber(219)).toBe(921);
    expect(largestNumber(581)).toBe(851);
  });
  it("returns correctly ordered number for large numbers including those with many trailiing zeros", () => {
    expect(largestNumber(12345)).toBe(54321);
    expect(largestNumber(12345000)).toBe(54321000);
    expect(largestNumber(1010100)).toBe(1110000);
    expect(largestNumber(89382291)).toBe(99883221);
    expect(largestNumber(8001009100)).toBe(9811000000);
  });
});

describe("generateMatrix", () => {
  it("returns [[null]] when passed 1", () => {
    expect(generateMatrix(1)).toEqual([[null]]);
  });
  it("returns a 2*2 matrix of null entries when passed 2", () => {
    expect(generateMatrix(2)).toEqual([
      [null, null],
      [null, null],
    ]);
  });
  it("returns a 3*3 matrix of null entries when passed 3", () => {
    expect(generateMatrix(3)).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  });
});

describe("findWrongWayFruit", () => {
  it("returns 0 when passed an array length smaller than 3", () => {
    expect(findWrongWayFruit(["apple"])).toBe(0);
    expect(findWrongWayFruit(["elppa", "apple"])).toBe(0);
  });
  it("returns the correct index when the wrong-way fruit is in the middle of the array", () => {
    expect(findWrongWayFruit(["apple", "apple", "apple", "apple", "elppa", "apple"])).toBe(4);
  });
  it("returns the correct index when the wrong-way fruit is at start", () => {
    expect(findWrongWayFruit(["elppa", "apple", "apple", "apple", "apple", "apple"])).toBe(0);
  });
  it("returns the correct index when the wrong-way fruit is at the end", () => {
    expect(findWrongWayFruit(["apple", "apple", "apple", "apple", "apple", "elppa"])).toBe(5);
  });
  it("returns the correct index when the wrong-way fruit is at any other random position", () => {
    expect(findWrongWayFruit(["orange", "orange", "orange", "orange", "orange", "egnaro"])).toBe(5);
    expect(findWrongWayFruit(["banana", "ananab", "banana", "banana", "banana", "banana"])).toBe(1);
    expect(findWrongWayFruit(["eparg", "grape", "grape", "grape", "grape", "grape"])).toBe(0);
    expect(findWrongWayFruit(["tomato", "tomato", "tomato", "tomato", "otamot", "tomato"])).toBe(4);
    expect(findWrongWayFruit(["cucumber", "cucumber", "rebmucuc", "cucumber", "cucumber", "cucumber"])).toBe(2);
  });
});

describe("pairDNA", () => {
  it('returns [] when passed ""', () => {
    expect(pairDNA("")).toEqual([]);
  });
  it("returns a single pair in an array when passed one", () => {
    expect(pairDNA("G")).toEqual(["GC"]);
  });
  it("returns multiple pairs when passed multiple chars", () => {
    expect(pairDNA("GGC")).toEqual(["GC", "GC", "CG"]);
  });
  it("returns correctly when passed lowercase letters", () => {
    expect(pairDNA("gat")).toEqual(["GC", "AT", "TA"]);
  });
  it("ignores invalid chars but still returns valid ones within the string", () => {
    expect(pairDNA("PGYYYHVB")).toEqual(["GC"]);
  });
});

describe("tallyHashtagsAndMentions", () => {
  it("returns an object", () => {
    expect(typeof tallyHashtagsAndMentions("")).toBe("object");
  });
  it("returns {hashtags: 0, mentions: 0} if it finds none", () => {
    expect(tallyHashtagsAndMentions("hello this is a tweet guaranteed to get very little engagement")).toEqual({
      hashtags: 0,
      mentions: 0,
    });
  });
  it("recognises no mentions", () => {
    expect(tallyHashtagsAndMentions("#yolo")).toEqual({
      hashtags: 1,
      mentions: 0,
    });
  });
  it("recognises no hashtags", () => {
    expect(tallyHashtagsAndMentions("@yobo")).toEqual({
      hashtags: 0,
      mentions: 1,
    });
  });
  it("finds multiple hashtags and mentions and returns that number", () => {
    expect(tallyHashtagsAndMentions("#yolo @bolo #golo")).toEqual({
      hashtags: 2,
      mentions: 1,
    });
    expect(tallyHashtagsAndMentions("@boyo #goyo @loyo #zoyo")).toEqual({
      hashtags: 2,
      mentions: 2,
    });
    expect(
      tallyHashtagsAndMentions('"So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"')
    ).toEqual({ hashtags: 2, mentions: 1 });
  });
});
