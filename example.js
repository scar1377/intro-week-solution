const info = {
  name: "anat",
  age: 24,
  pet: "Schnitzel the cat",
  job: "tutor",
};

// print all the keys in this object
const keys = Object.keys(info);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}
