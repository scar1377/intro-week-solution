function flipBooleans(bools) {
  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */
  return bools.map((bool) => !bool);
}

try {
} catch (error) {}

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

function findFirstDentist(people) {
  /*
    This function takes an array of people objects and returns the first found dentist object from the array.
  */
  return people.find(({ isDentist }) => isDentist) || null;
}

function tallyPeopleInManchester(people) {
  /* This function receives an array of people objects in for format:
    [
      { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]
    The function should return the number of people who live in the city of Manchester
  */
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

function getWordLengths(str) {
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
  return str.split(" ").map((str) => str.length);
}

function getPalindromes(words) {
  /*
    This function takes an array of words and returns an array containing only the palindromes.
    A palindrome is a word that is spelled the same way backwards.
    E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
  */
  return words.filter((word) => word.split("") === word.split("").reverse());
}

function replaceLettersWithXs(str) {
  /* 
    This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('X').
    For example 'I love Greg' should return 'X XXXX XXXX', and 'Hard as 1, 2, 3' should return 'XXXX XX 1, 2, 3'.
  */
}
