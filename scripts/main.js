new WOW().init();

//onepagenav

$(".nav__list").onePageNav({
  currentClass: "active",
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: "",
  easing: "swing",
});

//sticky nav
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//появление соцсетей у команды + слайдер
$(document).ready(function () {
  $(".team__user-button-ricardo").click(function () {
    $(".team__user-button-ricardo").hide();
    $(".team__socials-ricardo").fadeIn();
  });
  $(".team__user-button-thomas").click(function () {
    $(".team__user-button-thomas").hide();
    $(".team__socials-thomas").fadeIn();
  });
  $(".team__user-button-alberto").click(function () {
    $(".team__user-button-alberto").hide();
    $(".team__socials-alberto").fadeIn();
  });

  //slider
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: 3,
    loop: true,

    //   // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});

//hamburger menu

const closed = "hamburger_active";
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav");
const anchors = document.querySelectorAll('a[href*="#"]');

function openHamburgerMenu() {
  // document.body.style.overflow = 'hidden';
  hamburger.classList.add(closed);
  menu.classList.add("nav_active");
}

function closeHamburgerMenu() {
  // document.body.style.overflow = 'auto';
  hamburger.classList.remove(closed);
  menu.classList.remove("nav_active");
}

function isMenuOpened() {
  return hamburger.classList.contains(closed);
}

hamburger.addEventListener("click", function (e) {
  e.stopPropagation();
  if (isMenuOpened()) {
    closeHamburgerMenu();
  } else {
    openHamburgerMenu();
  }
});

document.addEventListener("click", (event) => {
  const isClickInside = menu.contains(event.target);
  if (isMenuOpened() && !isClickInside) {
    closeHamburgerMenu();
  }
});

for (let anchor of anchors) {
  anchor.addEventListener("click", closeHamburgerMenu);
}

//плавное появление изображений

// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// const sliderImages = document.querySelectorAll(".slide-in");

// function checkSlide() {
//   sliderImages.forEach((sliderImage) => {
//     //половина изображения
//     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//     //низ изображения
//     const imageBottom = sliderImage.offsetTop + sliderImage.height;
//     const isHalfShown = slideInAt > sliderImage.offsetTop;
//     const isNotScrolledPast = window.scrollY < imageBottom;
//     if (isHalfShown && isNotScrolledPast) {
//       sliderImage.classList.add("slide-in_active");
//     } else {
//       sliderImage.classList.remove("slide-in_active");
//     }
//   });
// }

// window.addEventListener("scroll", debounce(checkSlide));
