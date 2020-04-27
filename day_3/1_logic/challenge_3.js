if (num > 10) {
  console.log("Your number is bigger than 10");
} else {
  console.log("Your number is less than or equal to 10");
}

function spyOn(func) {
  const info = { funcToSpyOn: func, callCount: 0 };
  const eventEmitter = event.on("log", func);
  return function (...args) {
    info.funcToSpyOn(...args);
    info.callCount++;
  };
}

const logSpy = spyOn(console.log);

var EXPRESSION_HERE;
