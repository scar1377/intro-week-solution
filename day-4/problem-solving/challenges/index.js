function flipBooleans(bools) {
  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */
  return bools.map((bool) => !bool);
}

console.log("flipBooleans()");
console.log("returns an empty array when passed []");
try {
  check(flipBooleans([])).isEqualTo([]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}
console.log("inverts all booleans in the array");
try {
  check(flipBooleans([true, true, true])).isEqualTo([false, false, false]);
  check(flipBooleans([false, true, true])).isEqualTo([true, false, false]);
  check(flipBooleans([false, false, false])).isEqualTo([true, true, true]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

function translateKey(student, keyToChange, translation) {
  /*
    Northcoders is expanding to France 🎉🥖. 
    Unfortunately, our team on the ground in Paris doesn't speak the best English and has been providing us with student data partly in French. 
    This function will take an object representing a student's data, a key that needs changing, and its English translation.  
    E.g. 
    const student = {
      prénom: 'Carla',
      surname: 'Bruni',
      job: 'Artist'
    }
    const keyToChange = 'prénom'
    const translation = 'firstName'
    It returns a **new object** with the key successfully translated into English.
    E.g. 
    {
      firstName: 'Carla',
      surname: 'Bruni,
      job: 'Artist'
    }
  */
}
console.log("\n");
console.log("translateKey()");
console.log("  returns a new object");
try {
  const student = {
    prénom: "Carla",
    surname: "Bruni",
    job: "Artist",
  };
  const actual = translateKey(student, "prénom", "firstName");

  check(typeof actual).isEqualTo("object");

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

try {
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

  check(actual).isEqualTo(expected);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

//// next challenge - findFirstDentist ////

function findFirstDentist(people) {
  /*
    This function takes an array of people objects and returns the first found dentist object from the array.
  */
  return people.find(({ isDentist }) => isDentist) || null;
}

console.log("\n");
console.log("findFirstDentist()");

console.log("  returns null if no dentist is in the array");
try {
  check(findFirstDentist([])).isEqualTo(null);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns a person object who is a dentist");
try {
  const dentist = { name: "Orin Scrivello", isDentist: true };
  check(Object.keys(findFirstDentist([dentist]))).toContain("name", "isDentist");
  check(findFirstDentist([dentist]).isDentist).toBe(true);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns the first dentist from the array");
try {
  const dentists = [
    { name: "Johnny Karate", isDentist: false },
    { name: "Lucy Hobbs Taylor", isDentist: true },
    { name: "Pierre Fauchard", isDentist: true },
    { name: "Bert Macklin", isDentist: false },
    { name: "Orin Scrivello", isDentist: true },
    { name: "Kip Hackman", isDentist: false },
  ];
  check(findFirstDentist(dentists)).isEqualTo({
    name: "Lucy Hobbs Taylor",
    isDentist: true,
  });

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

function tallyPeopleInManchester(people) {
  /* This function receives an array of people objects in for format:
    [
      { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]
    The function should return the number of people who live in the city of Manchester
  */
}
console.log("\n");
console.log("tallyPeopleInManchester()");

console.log("  returns 0 when nobody is from Manchester");
try {
  check(
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
  ).isEqualTo(0);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns the length of the array when everyone is from Manchester");
try {
  check(
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
  ).isEqualTo(2);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns the number of people who are actually from the proud, yet fairly miserable, city of Manchester");

try {
  check(
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
  ).isEqualTo(1);
  check(
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
  ).isEqualTo(1);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

function getPugOwners(dogs) {
  /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
  */
  return dogs.reduce((names, { breed, owner }) => (breed === "Pug" ? [...names, owner] : [...names]), []);
}
console.log("\n");
console.log("getPugOwners()");

console.log("  returns [] when passed []");
try {
  check(getPugOwners([])).isEqualTo([]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns an array of pug names when passed an array of dog objects");
try {
  const dogs = [
    { name: "Beatrice", breed: "Lurcher", owner: "Tom" },
    { name: "Max", breed: "Pug", owner: "Izzi" },
    { name: "Poppy", breed: "Pug", owner: "Anat" },
  ];
  check(getPugOwners(dogs)).isEqualTo(["Izzi", "Anat"]);

  const dogs2 = [
    { name: "Steven", breed: "Lurcher", owner: "Mitch" },
    { name: "Daphne", breed: "Pug", owner: "Paul" },
    { name: "Sandy", breed: "Labrador", owner: "Paul" },
    { name: "Mike", breed: "Pug", owner: "Shaq" },
    { name: "Spike", breed: "Pug", owner: "Alex" },
  ];
  check(getPugOwners(dogs2)).isEqualTo(["Paul", "Shaq", "Alex"]);

  const dogs3 = [
    { name: "Kevin", breed: "Labrador", owner: "Sam" },
    { name: "Patch", breed: "Rottweiler", owner: "Ant" },
    { name: "Miles", breed: "Lurcher", owner: "Nicki" },
    { name: "Sandy", breed: "Pug", owner: "Vel" },
    { name: "Spot", breed: "Pug", owner: "Haz" },
    { name: "Josephine", breed: "Terrier", owner: "Jonny" },
    { name: "Eric", breed: "Pug", owner: "David" },
  ];
  check(getPugOwners(dogs3)).isEqualTo(["Vel", "Haz", "David"]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

function pluraliseKeys(obj) {
  /*
    In this function you will be provided with an object. That object is storing information on keys. 
    E.g. {
      name: 'Tom',
      job: ['writing katas', 'marking'],
      favouriteShop: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    };
    In some cases, however, the keys have been very badly named. Good naming convention tells us that the keys containing arrays should be named as plurals. 
    This function should return a **new object** that is a copy of the input but with any keys that contain arrays pluralised (an 's' added to the end.)
  
    
    E.g. {
      name: 'Tom',
      jobs: ['writing katas', 'marking'],
      favouriteShops: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    }
  */
}
console.log("\n");
console.log("pluraliseKeys()");
console.log("  returns a new object");
try {
  const input = {
    name: "Sam's Pet Shop",
    tagLine: "From Aardvarks to Zebras!",
    pet: [
      { name: "mitch", species: "hamster", price: "£9.99" },
      { name: "jonny", species: "canary", price: "£24.99" },
    ],
  };
  const actual = pluraliseKeys(input);

  check(actual).not.toBe(input);
  check(typeof actual).isEqualTo("object");

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns an object with identical keys to the input when the input's keys do not need pluralising");
try {
  const input = {
    name: "Shaq's Taxidermy Shack",
    tagLine: "You Love 'em; We Stuff 'em",
  };
  const actual = pluraliseKeys(input);
  const expected = {
    name: "Shaq's Taxidermy Shack",
    tagLine: "You Love 'em; We Stuff 'em",
  };

  check(actual).isEqualTo(expected);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns an object with with its keys pluralised");
try {
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
  check(actual).isEqualTo(expected);

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
  check(actual).isEqualTo(expected);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}
console.log("\n");
function getWordLengths(str) {
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
  return str.split(" ").map((str) => str.length);
}

console.log("getWordLengths()");

console.log("  returns [] when passed an empty string");
try {
  check(getWordLengths("")).isEqualTo([]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns an array containing the length of a single word");
try {
  check(getWordLengths("woooo")).isEqualTo([5]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns the lengths when passed multiple words");
try {
  check(getWordLengths("hello world")).isEqualTo([5, 5]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns lengths for longer sentences");
try {
  check(getWordLengths("like a bridge over troubled water")).isEqualTo([4, 1, 6, 4, 8, 5]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

function getPalindromes(words) {
  /*
    This function takes an array of words and returns an array containing only the palindromes.
    A palindrome is a word that is spelled the same way backwards.
    E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
  */
  return words.filter((word) => word.split("") === word.split("").reverse());
}
console.log("\n");
console.log("getPalindromes()");

console.log("  returns [] when passed []");
try {
  check(getPalindromes([])).isEqualTo([]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  identifies palindromes");
try {
  check(getPalindromes(["racecar"])).isEqualTo(["racecar"]);
  check(getPalindromes(["racecar", "racecar"])).isEqualTo(["racecar", "racecar"]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  ignores non-palindromes");

try {
  check(getPalindromes(["racecar", "kayak", "tacocat"])).isEqualTo(["racecar", "kayak", "tacocat"]);
  check(getPalindromes(["pineapple", "pony", "racecar"])).isEqualTo(["racecar"]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

console.log("  returns [] when passed no palindromes");
try {
  check(getPalindromes(["pineapple", "watermelon", "pony"])).isEqualTo([]);

  printGreenMessage("  Pass :)");
} catch (error) {
  printRedMessage("  ", error);
}

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

function check(func) {
  const methods = {
    whenCalledWith(...args) {
      this.args = args;
      return this;
    },
    isEqualTo(expected) {
      const { actual } = this;

      if (typeof actual === "object" && typeof expected === "object") {
        if (!checkDeeplyEqual(actual, expected)) {
          throw new Error(
            `${JSON.stringify(actual)}\n is not equal to the expected value of \n${JSON.stringify(expected)}`
          );
        }
      } else if (actual !== expected) throw new Error(`${actual} is not equal to the expected value of ${expected}`);
    },
    returns(expected) {
      const actual = this.func(...this.args);
      if (typeof actual === "object" && typeof expected === "object") {
        if (!checkDeeplyEqual(actual, expected)) {
          throw new Error(createFeedback(this.func.name, actual, expected));
        }
      } else if (actual !== expected) throw new Error(createFeedback(this.func.name, actual, expected));
    },
  };
  const obj = Object.create(methods);
  if (typeof func === "function") obj.func = func;
  else obj.actual = func;
  return obj;
}

function checkDeeplyEqual(coll1, coll2) {
  if (typeof coll1 !== "object" || typeof coll2 !== "object") return coll1 === coll2;

  if (Object.keys(coll1).length !== Object.keys(coll2).length) return false;

  if (Array.isArray(coll1) !== Array.isArray(coll2)) return false;

  for (let key1 in coll1) {
    if (!(key1 in coll2)) return false;
    if (!checkDeeplyEqual(coll1[key1], coll2[key1])) return false;
  }
  return true;
}

function createFeedBackString(item) {
  const lookup = {
    string: (item) => `"${item}"`,
    object: (item) => JSON.stringify(item),
    undefined: (x) => x,
    boolean: (x) => x,
    number: (x) => x,
  };
  return lookup[typeof item](item);
}

function createFeedback(name, actual, expected) {
  const actualString = createFeedBackString(actual);
  const expectedString = createFeedBackString(expected);

  const feedback = `${name}'s output was ${actualString}, but it should be ${expectedString}`;
}

function printRedMessage(...messages) {
  console.log("\x1b[31m", ...messages, "\x1b[0m");
}

function printGreenMessage(...messages) {
  console.log("\x1b[32m", ...messages, "\x1b[0m");
}
