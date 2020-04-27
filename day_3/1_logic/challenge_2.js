function rollTheDice() {
  return Math.ceil(Math.random() * 6);
}

const diceRoll = rollTheDice();

if (diceRoll > 4) {
  console.log("You got a value greater than 4");
} else {
  console.log("Sorry your dice roll was less than or equal to 4");
}
