const multiTypeArray = ["I am a string", 42, true, [1, 2, 3]];

console.log("checking multiTypeArray");
checkThat(typeof alphaSample[0]).isEqualTo(FILL_ME_IN);
checkThat(typeof alphaSample[1]).isEqualTo(FILL_ME_IN);
checkThat(typeof alphaSample[2]).isEqualTo(FILL_ME_IN);
checkThat(typeof alphaSample[3]).isEqualTo(FILL_ME_IN);

console.log("checking alphaSample");

const alphaSample = ["a", "b", "c"];

alphaSample.push("d");
alphaSample.push("g");

checkThat(alphaSample).isEqualTo(FILL_ME_IN);

const lastItem = alphaSample.pop();

checkThat(alphaSample).isEqualTo(FILL_ME_IN);
checkThat(lastItem).isEqualTo(FILL_ME_IN);
