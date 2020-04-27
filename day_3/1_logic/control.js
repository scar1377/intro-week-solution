function nextChallenge(e) {
  console.log(e.target.innerText.slice(4));
  const scriptElement = document.querySelectorAll("script")[1];
  console.log(scriptElement, "<---");
  scriptElement.src = e.target.innerText.slice(4).replace(" ", "_") + ".js";
}
