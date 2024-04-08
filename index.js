let burger = document.querySelector(".burger");
let pop = document.querySelector(".pop");
let to_close_pop = document.querySelector(".div-close");

console.log(burger);
let handleBurger = function () {
  pop.classList.remove("pop-hidden");
};
let handleToClose = function () {
  pop.classList.add("pop-hidden");
};

burger.addEventListener("click", handleBurger);
to_close_pop.addEventListener("click", handleToClose);
