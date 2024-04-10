let sideDrinks = document.querySelector(".for-drinks");
let content = document.querySelector(".iframes");
let disply_drinks = document.querySelector(".main-items");
let arrow = document.getElementById("arrow");
let nav = document.querySelector("#nav");
let allTypes = document.querySelectorAll("#add-drinks");
let src_water = "../water/water.html";
console.log(allTypes);
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

let handlePage = function (items) {
  if (items.innerHTML === "Water") {
    nav.setAttribute("src", "../water/water.html");
  } else if (items.innerHTML === "Monster") {
    nav.setAttribute("src", "../Monster/monster.html");
  } else if (items.innerHTML === "Lucozade") {
    nav.setAttribute("src", "../Lucozade/lucozade.html");
  } else if (items.innerHTML === "Vit Hit") {
    nav.setAttribute("src", "../Vit hit/vit hit.html");
  }
};

allTypes.forEach((items) => {
  items.addEventListener("click", () => handlePage(items));
});
