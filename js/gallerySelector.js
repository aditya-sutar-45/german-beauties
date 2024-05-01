const porscheBtn = document.querySelector(".porscheBtn");
const audiBtn = document.querySelector(".audiBtn");
const mercBtn = document.querySelector(".mercBtn");
const bmwBtn = document.querySelector(".bmwBtn");

const porsche = document.querySelector(".porsche");
const audi = document.querySelector(".audi");
const merc = document.querySelector(".merc");
const bmw = document.querySelector(".bmw");

porscheBtn.addEventListener("click", function () {
  porsche.classList.remove("hide");
  audi.classList.add("hide");
  merc.classList.add("hide");
  bmw.classList.add("hide");
});

audiBtn.addEventListener("click", function () {
  audi.classList.remove("hide");
  porsche.classList.add("hide");
  merc.classList.add("hide");
  bmw.classList.add("hide");
});

mercBtn.addEventListener("click", function () {
  merc.classList.remove("hide");
  porsche.classList.add("hide");
  audi.classList.add("hide");
  bmw.classList.add("hide");
});

bmwBtn.addEventListener("click", function () {
  bmw.classList.remove("hide");
  porsche.classList.add("hide");
  audi.classList.add("hide");
  merc.classList.add("hide");
});
