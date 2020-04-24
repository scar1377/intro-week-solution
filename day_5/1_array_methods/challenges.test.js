const {
  getEvenNumbers,
  flipBooleans,
  translateKey,
  findFirstDentist,
  tallyPeopleInManchester,
  getPugOwners,
  pluraliseKeys,
  getWordLengths,
  getPalindromes,
  replaceLettersWithXs,
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions,
} = require("./challenges");

describe("getEvenNumbers", () => {
  it("returns [] when passed []", () => {
    expect(getEvenNumbers([])).toEqual([]);
  });
  it("returns even numbers from a mixed array", () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
  it("returns no numbers when only an odd array is passed", () => {
    expect(getEvenNumbers([1, 3, 5, 7, 99])).toEqual([]);
  });
});

describe("flipBooleans", () => {
  it("it returns an empty array when passed []", () => {
    expect(flipBooleans([])).toEqual([]);
  });
  it("inverts all booleans in the array", () => {
    expect(flipBooleans([true, true, true])).toEqual([false, false, false]);
    expect(flipBooleans([false, true, true])).toEqual([true, false, false]);
    expect(flipBooleans([false, false, false])).toEqual([true, true, true]);
  });
});

describe("translateKey", () => {
  it("returns a new object", () => {
    const student = {
      prénom: "Carla",
      surname: "Bruni",
      job: "Artist",
    };
    const actual = translateKey(student, "prénom", "firstName");
    expect(actual).not.toBe(student);
    expect(typeof actual).toBe("object");
  });
  it("replaces the specified key with the provided translated version", () => {
    const student = {
      firstName: "Napoleon",
      surname: "Bonaparte",
      ilsSontMorts: true,
    };
    const actual = translateKey(student, "ilsSontMorts", "isDead");
    const expected = {
      firstName: "Napoleon",
      surname: "Bonaparte",
      isDead: true,
    };
    expect(actual).toEqual(expected);
  });
});

describe("findFirstDentist", () => {
  it("returns null if no dentist is in the array", () => {
    expect(findFirstDentist([])).toBe(null);
  });

  it("returns a person object who is a dentist", () => {
    const dentist = { name: "Orin Scrivello", isDentist: true };
    expect(Object.keys(findFirstDentist([dentist]))).toContain("name", "isDentist");
    expect(findFirstDentist([dentist]).isDentist).toBe(true);
  });

  it("returns the first dentist from the array", () => {
    const dentists = [
      { name: "Johnny Karate", isDentist: false },
      { name: "Lucy Hobbs Taylor", isDentist: true },
      { name: "Pierre Fauchard", isDentist: true },
      { name: "Bert Macklin", isDentist: false },
      { name: "Orin Scrivello", isDentist: true },
      { name: "Kip Hackman", isDentist: false },
    ];
    expect(findFirstDentist(dentists)).toEqual({
      name: "Lucy Hobbs Taylor",
      isDentist: true,
    });
  });
});

describe("tallyPeopleInManchester", () => {
  it("returns 0 when nobody is from Manchester", () => {
    expect(
      tallyPeopleInManchester([
        {
          name: "Maria",
          lives: { country: "Italy", city: "Valencia" },
          age: 32,
        },
        {
          name: "Sandrella",
          lives: { country: "Spain", city: "Bilbao" },
          age: 32.5,
        },
      ])
    ).toBe(0);
  });
  it("returns the length of the array when everyone is from Manchester", () => {
    expect(
      tallyPeopleInManchester([
        {
          name: "Alexis",
          lives: { country: "England", city: "Manchester" },
          age: 32.5,
        },
        {
          name: "Raheem",
          lives: { country: "England", city: "Manchester" },
          age: 35.55,
        },
      ])
    ).toBe(2);
  });
  it("returns the number of people who are actually from the proud, yet fairly miserable, city of Manchester", () => {
    expect(
      tallyPeopleInManchester([
        {
          name: "Melissandra",
          lives: { country: "Spain", city: "Valencia" },
          age: 55.5,
        },
        {
          name: "Melissandrella",
          lives: { country: "Spain", city: "Valencia" },
          age: 55.555,
        },
        {
          name: "Emmeline",
          lives: { country: "England", city: "Manchester" },
          age: 25,
        },
      ])
    ).toEqual(1);
    expect(
      tallyPeopleInManchester([
        {
          name: "Frank",
          lives: { country: "England", city: "Manchester" },
          age: 15.2,
        },
        {
          name: "Bob",
          lives: { country: "Wales", city: "Abertillery" },
          age: 555555555555.555,
        },
        {
          name: "Terry",
          lives: { country: "England", city: "Newport Pagnell" },
          age: 0.00000002,
        },
      ])
    ).toBe(1);
  });
});

describe("getPugOwners", () => {
  it("returns [] when passed []", () => {
    expect(getPugOwners([])).toEqual([]);
  });
  it("returns an array of pug names when passed an array of dog objects", () => {
    const dogs = [
      { name: "Beatrice", breed: "Lurcher", owner: "Tom" },
      { name: "Max", breed: "Pug", owner: "Izzi" },
      { name: "Poppy", breed: "Pug", owner: "Anat" },
    ];
    expect(getPugOwners(dogs)).toEqual(["Izzi", "Anat"]);
    const dogs2 = [
      { name: "Steven", breed: "Lurcher", owner: "Mitch" },
      { name: "Daphne", breed: "Pug", owner: "Paul" },
      { name: "Sandy", breed: "Labrador", owner: "Paul" },
      { name: "Mike", breed: "Pug", owner: "Shaq" },
      { name: "Spike", breed: "Pug", owner: "Alex" },
    ];
    expect(getPugOwners(dogs2)).toEqual(["Paul", "Shaq", "Alex"]);
    const dogs3 = [
      { name: "Kevin", breed: "Labrador", owner: "Sam" },
      { name: "Patch", breed: "Rottweiler", owner: "Ant" },
      { name: "Miles", breed: "Lurcher", owner: "Nicki" },
      { name: "Sandy", breed: "Pug", owner: "Vel" },
      { name: "Spot", breed: "Pug", owner: "Haz" },
      { name: "Josephine", breed: "Terrier", owner: "Jonny" },
      { name: "Eric", breed: "Pug", owner: "David" },
    ];
    expect(getPugOwners(dogs3)).toEqual(["Vel", "Haz", "David"]);
  });
});

describe("pluraliseKeys", () => {
  it("returns a new object", () => {
    const input = {
      name: "Sam's Pet Shop",
      tagLine: "From Aardvarks to Zebras!",
      pet: [
        { name: "mitch", species: "hamster", price: "£9.99" },
        { name: "jonny", species: "canary", price: "£24.99" },
      ],
    };
    const actual = pluraliseKeys(input);
    expect(actual).not.toBe(input);
    expect(typeof actual).toBe("object");
  });
  it("returns an object with identical keys to the input when the input's keys do not need pluralising", () => {
    const input = {
      name: "Shaq's Taxidermy Shack",
      tagLine: "You Love 'em; We Stuff 'em",
    };
    const actual = pluraliseKeys(input);
    const expected = {
      name: "Shaq's Taxidermy Shack",
      tagLine: "You Love 'em; We Stuff 'em",
    };
    expect(actual).to.deep.equal(expected);
  });
  it("returns an object with with its keys pluralised", () => {
    let input = {
      name: "Paul's Donkey University",
      tagLine: "Too Mule For School",
      student: ["Suneet", "Ant", "Haz"],
    };
    let actual = pluraliseKeys(input);
    let expected = {
      name: "Paul's Donkey University",
      tagLine: "Too Mule For School",
      students: ["Suneet", "Ant", "Haz"],
    };
    expect(actual).to.deep.equal(expected);
    input = {
      name: "Tom",
      job: ["writing katas", "marking"],
      favouriteShop: ["Paul's Donkey University", "Shaq's Taxidermy Shack", "Sam's Pet Shop"],
    };
    actual = pluraliseKeys(input);
    expected = {
      name: "Tom",
      jobs: ["writing katas", "marking"],
      favouriteShops: ["Paul's Donkey University", "Shaq's Taxidermy Shack", "Sam's Pet Shop"],
    };
    expect(actual).to.deep.equal(expected);
  });
});

describe("getWordLengths", () => {
  it("returns [] when passed an empty string", () => {
    expect(getWordLengths("")).toEqual([]);
  });
  it("returns an array containing the length of a single word", () => {
    expect(getWordLengths("woooo")).toEqual([5]);
  });
  it("returns the lengths when passed multiple words", () => {
    expect(getWordLengths("hello world")).toEqual([5, 5]);
  });
  it("returns lengths for longer sentences", () => {
    expect(getWordLengths("like a bridge over troubled water")).toEqual([4, 1, 6, 4, 8, 5]);
  });
});

describe("getPalindromes", () => {
  it("returns [] when passed []", () => {
    expect(getPalindromes([])).toEqual([]);
  });
  it("identifies palindromes", () => {
    expect(getPalindromes(["racecar"])).toEqual(["racecar"]);
    expect(getPalindromes(["racecar", "racecar"])).toEqual(["racecar", "racecar"]);
  });
  it("ignores non-palindromes", () => {
    expect(getPalindromes(["racecar", "kayak", "tacocat"])).toEqual(["racecar", "kayak", "tacocat"]);
    expect(getPalindromes(["pineapple", "pony", "racecar"])).toEqual(["racecar"]);
  });
  it("returns [] when passed no palindromes", () => {
    expect(getPalindromes(["pineapple", "watermelon", "pony"])).toEqual([]);
  });
});

describe("replaceLettersWithXs", () => {
  it("replaces a single letter with a X", () => {
    expect(replaceLettersWithXs("Z")).toBe("X");
  });
  it("does not replace a non-letter character", () => {
    expect(replaceLettersWithXs("~")).toBe("~");
    expect(replaceLettersWithXs("-")).toBe("-");
  });
  it("replaces sentences with Xs as appropriate", () => {
    expect(replaceLettersWithXs("I like Alan")).toBe("X XXXX XXXX");
    expect(replaceLettersWithXs("Don't you?")).toBe("XXX'X XXX?");
  });
});

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
