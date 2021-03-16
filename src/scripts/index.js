import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

let btnMenu = document.querySelector(".btn-menu");
let btnArrow = document.querySelector(".down");
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav__menu");
let block1 = document.querySelector(".main__content1__block");
let pd20List = document.querySelectorAll(".pd20");
const mediaPhone = window.matchMedia("(max-width: 676px)");

btnMenu.onclick = function () {
  btnArrow.classList.toggle("down");
  btnArrow.classList.toggle("up");
  menu.classList.toggle("menu");
  menu.classList.toggle("menu-mob");
  nav.classList.toggle("nav__menu");
  nav.classList.toggle("nav-mob");
};

function showMenu() {
  if (mediaPhone.matches) {
    for (let element of pd20List) {
      element.classList.remove("pd20");
    }
    block1.classList.add("mg40");
  } else {
    for (let element of pd20List) {
      element.classList.add("pd20");
    }
    block1.classList.remove("mg40");
    menu.classList.add("menu");
    menu.classList.remove("menu-mob");
    nav.classList.add("nav__menu");
    nav.classList.remove("nav-mob");
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
  cssEase: "linear"
});

console.log('webpack starterkit');
