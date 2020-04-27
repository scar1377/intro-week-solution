function checkColour(colour) {
  if (colour === "GREEN") {
    printGreenMessage("GO!");
  } else if (colour === "AMBER") {
    printAmberMessage("GET READY...");
  } else {
    printRedMessage("STOP!");
  }
}

/// DO NOT PEEK HERE :) //

function printGreenMessage(message) {
  const p = document.createElement("p");
  p.innerText = message;
  p.style.color = "green";
  document.body.appendChild(p);
}

function printRedMessage(message) {
  const p = document.createElement("p");
  p.innerText = message;
  p.style.color = "red";
  document.body.appendChild(p);
}

function printAmberMessage(message) {
  const p = document.createElement("p");
  p.innerText = message;
  p.style.color = "yellow";
  document.body.appendChild(p);
}
