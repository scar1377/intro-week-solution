const userAge = +prompt("Hello there, what is your age at the moment ?");
const pocketMoney = +prompt("Hello there, what is your pocket money");

const filmCertificate = 18;
const ticketPrice = 4.5;

console.log("userAge is", userAge);
console.log("pocketMoney is", pocketMoney);

if (userAge >= filmCertificate && ticketPrice <= pocketMoney) {
  console.log("you can watch the film");
} else {
  console.log("You can't watch the film");
}
