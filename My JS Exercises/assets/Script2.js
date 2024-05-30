const g = 10;
let bmi;
document.querySelector("body").style.cursor =
  "url('/absolute/path/to/1.png'),auto";
document.querySelector(".btn-check").addEventListener("click", function () {
  bmi =
    document.querySelector(".Weight .in-Weight").value /
    document.querySelector(".height .in-height").value ** 2;
  console.log(parseInt(bmi));
  document.querySelector(".h .bmi").textContent = parseInt(bmi);
});
document.querySelector(".btn-again").addEventListener("click", function () {
  window.location.reload(true);
});
