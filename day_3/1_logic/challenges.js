const userAge = getUserAge("Hello there, what is your age at the moment ?");
const pocketMoney = getUserPocketMoney("Hello there, what is your pocket money");

console.log(userAge);
// log a message saying the "the userAge is <value-of-user-age>"

console.log(pocketMoney);
// log a message saying the "the pocketMoney is <value-of-pocket-money>"

const filmCertificate = 18;
const ticketPrice = 4.5;

if (userAge >= filmCertificate && ticketPrice <= pocketMoney) {
  console.log("you can watch the film");
} else {
  console.log("You can't watch the film");
}

// MAGIC UTILITY FUNCTIONSs

function getUserAge() {
  const userAge = +process.argv[2];
  if (!userAge) {
    throw new Error("You need to enter a user age");
  } else return userAge;
}

function getUserPocketMoney() {
  const pocketMoney = +process.argv[3];
  if (!pocketMoney) {
    throw new Error("You need to enter a value for some pocket money");
  } else return pocketMoney;
}
