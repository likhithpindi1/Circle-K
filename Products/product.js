let sideDrinks = document.querySelector(".for-drinks");
let content = document.querySelector(".iframes");
let disply_drinks = document.querySelector(".main-items");
let arrow = document.getElementById("arrow");
let s = "deg";
let flag = true;

let handleContent = function (e) {
  if (flag) {
    disply_drinks.classList.remove("main-item-hidden");
    arrow.style.transform = `rotate(90${s})`;
    flag = !flag;
  } else {
    disply_drinks.classList.add("main-item-hidden");
    arrow.style.transform = `rotate(0${s})`;
    flag = !flag;
  }
};

sideDrinks.addEventListener("click", handleContent);
