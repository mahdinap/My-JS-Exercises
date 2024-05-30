// document.querySelector(".h h3").textContent='I changed it'
// document.querySelector(".btn-check")='I changed it'
// event listener:
document.querySelector("body").style.cursor = "url('1.png'),auto";
document.querySelector(".btn-again").addEventListener("click", function () {
  window.location.reload(true);
});
const myAge = 33;
// alert("you have just 60s to guess my Age!");
let timer = setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  document.querySelector("h1").textContent = "YOU LOSE!!!";
  document.querySelector(".btn-check").disabled = true;
  document.querySelector(".inputtxt").disabled = true;
}, 40000);
document.querySelector(".btn-check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".inputtxt").value);
  if (guess === myAge) {
    clearTimeout(timer);
    document.querySelector(".h h3").textContent = `BINGO that's Correct`;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".btn-check").disabled = true;
    document.querySelector(".inputtxt").disabled = true;
    document.querySelector("h1").textContent = "I am 33!";
  } else if (guess > myAge) {
    document.querySelector(".h h3").textContent = `enter smaler number`;
  } else if (guess < myAge) {
    document.querySelector(".h h3").textContent = `enter greater number`;
  }
  let cnt = Number(document.querySelector(".counter").textContent);
  document.querySelector(".counter").textContent--;
  if (cnt === 1) {
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector("h1").textContent = "YOU LOSE!!!";
    document.querySelector(".btn-check").disabled = true;
    document.querySelector(".inputtxt").disabled = true;
  }
});
