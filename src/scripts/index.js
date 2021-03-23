import "../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

let btnMenu = document.querySelector(".btn-menu-1");
let btnArrow = document.querySelector(".down");
let menu1 = document.querySelector(".menu-1");
let menu2 = document.querySelector(".menu-2");
let block1 = document.querySelector(".container-1__item");
let pd20List = document.querySelectorAll(".pd20");
const mediaPhone = window.matchMedia("(max-width: 676px)");

btnMenu.onclick = function () {
  btnArrow.classList.toggle("down");
  btnArrow.classList.toggle("up");
  menu1.classList.toggle("menu-1");
  menu1.classList.toggle("menu-1-mob");
  menu2.classList.toggle("menu-2");
  menu2.classList.toggle("menu-2-mob");
};

function showMenu() {
  if (mediaPhone.matches) {
    block1.classList.add("mg40");
  } else {
    block1.classList.remove("mg40");
    menu1.classList.add("menu-1");
    menu1.classList.remove("menu-1-mob");
    menu2.classList.add("menu-2");
    menu2.classList.remove("menu-2-mob");
  }
}

showMenu();
window.addEventListener("resize", showMenu, false);

$(".fade").slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

console.log("webpack starterkit");
