it('push the numbers from 1 up to ( and including ) 20 into items', () => {

  const items = [];

  // your loop here...

  expect(items).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
});

it('push the even numbers from 0 up to ( and including ) 14 into items', () => {

  const items = [];

  // your loop here ...

  expect(items).toEqual([0, 2, 4, 6, 8, 10, 12, 14]);
});

it('push the multiples of 5 from 10 to 100 ( inclusive ) in ascending order into items', () => {

  const items = [];

  // your loop here ...

  expect(items).toEqual([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
});

it('push the numbers from 42 down to ( and including ) 3 in descending order into items', () => {

  const items = [];

  // your loop here...

  expect(items).toEqual([42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3]);
});

it('push each item into a new array with ! on the end', () => {

  const sounds = ['fizz', 'buzz', 'bang', 'crash', 'wallop'];
  const exclaimedSounds = [];

  // your loop here...

  expect(exclaimedSounds).toEqual(['fizz!', 'buzz!', 'bang!', 'crash!', 'wallop!'])
});

it('write a for loop that iterates over an array and prints the current array element and its index', () => {

  const tutors = ['Anat', 'Paul C', 'Paul R', 'Jonny', 'Mitch', 'Vel', 'Alex', 'Ant']
  const tutorsAndIndex = [];

  // your loop here...

  expect(tutorsAndIndex).toEqual(["0 : Anat", "1 : Paul C", "2 : Paul R", "3 : Jonny", "4 : Mitch", "5 : Vel", "6 : Alex", "7 : Ant"]);
});

it('write a for loop that logs only the names with length greater than 5', () => {

  const tutors = ['Angela', 'Anne', 'Elizabeth', 'Julie', 'Mo', 'Barbara'];
  const tutorsOverLength5 = [];

  // your loop here...

  expect(tutorsOverLength5).toEqual(['Angela', 'Elizabeth', 'Barbara']);
});

it('update a variable **total** to get the total of adding all the numbers from 1 to 50', () => {

  let total = 0;

  // your loop here...

  expect(total).toEqual(1275);
});

it('iterate over an array to build up a checkList string', () => {

  let checkList = '';
  const items = ['apple', 'banana', 'pear', 'orange'];

  // your loop here...

  expect(checkList).toEqual('apple, banana, pear and orange');
});

it('iterate over list to get the strings only', () => {

  const list = ['hello', 'random', 3, true, false, '!', true, 1990, 'boom'];
  const stringsOnly = [];

  // your loop here...

  expect(stringsOnly).toEqual(['hello', 'random', '!', 'boom']);
});

it('iterate over an array to create an new array of upper case strings', () => {

  const normalWords = ['I', 'am', 'learning', 'how', 'to', 'code'];
  const upperCaseWords = [];

  // your loop here ...

  expect(upperCaseWords).toEqual(['I', 'AM', 'LEARNING', 'HOW', 'TO', 'CODE']);
});

it('find the names of all the staff that are 28 or over', () => {

  const staff = [
    { name: 'Anat', age: 22 },
    { name: 'Paul C', age: 31 },
    { name: 'Paul R', age: 27 },
    { name: 'Vel', age: 29 },
    { name: 'Sam', age: 30 },
    { name: 'Jonny', age: 32 },
    { name: 'Ant', age: 26 },
    { name: 'Mitch', age: 28 },
    { name: 'Tom', age: 24 },
    { name: 'Alex', age: 24 }
  ];

  const staffOverOrAt28 = [];
  // your loop here...

  expect(staffOverOrAt28).toEqual(['Paul C', 'Vel', 'Sam', 'Jonny', 'Mitch']);
});

