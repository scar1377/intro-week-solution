/////   SOME MAGICAL FUNCTIONS /////

function print() {
  let i = 3;
  const timer = setInterval(() => {
    if (i === 0) {
      makeRectangle(5, 5);
      return clearInterval(timer);
    }
    console.log(i, "...");
    i--;
  }, 1000);
}

function makeRectangle(height, width) {
  const row = "* ".repeat(width) + "\n";
  console.log("\x1b[31m");
  console.log(row.repeat(height), "\x1b[0m");
}
print();
