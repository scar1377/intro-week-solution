// create a function makeRectangle that will print a rectangle of * to the screen

function makeRectangle(height, width) {
  const row = "* ".repeat(width) + "\n";
  return row.repeat(height);
}

console.log(makeRectangle(10, 10));
