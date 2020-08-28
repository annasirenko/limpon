new WOW().init();


//sticky nav
// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".hero");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function (
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//     console.log(entry.target);
//   });
// },
//   sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})


//появление соцсетей у команды
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
});

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

//hamburger

// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('.nav');
// const links = document.querySelectorAll('.nav__item a');

// function openHamburgerMenu() {
//   hamburger.classList.add('hamburger_active');
//   nav.classList.add('nav_active');

// }

// function closeHamburgerMenu() {
//   hamburger.classList.remove('hamburger_active');
//   nav.classList.remove('nav_active');

// }

// hamburger.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (hamburger.classList.contains('hamburger_active')) {
//     //  fullscreen.classList.add('fadeOut');
//     //  setTimeout(() => {
//     closeHamburgerMenu();
//     // fullscreen.classList.remove('fadeOut');
//     //  }, 400);

//   } else {
//     openHamburgerMenu();

//   }

// });

// nav.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains('nav__item-link')) {
//     closeHamburgerMenu();
//   }

// });

const closed = 'hamburger_active';
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');
const anchors = document.querySelectorAll('a[href*="#"]');

function openHamburgerMenu() {
  // document.body.style.overflow = 'hidden';
  hamburger.classList.add(closed);
  menu.classList.add('nav_active');

}

function closeHamburgerMenu() {
  // document.body.style.overflow = 'auto';
  hamburger.classList.remove(closed);
  menu.classList.remove('nav_active');


}

function isMenuOpened() {
  return hamburger.classList.contains(closed);
}

hamburger.addEventListener('click', function (e) {
  e.stopPropagation();
  if (isMenuOpened()) {
    closeHamburgerMenu();

  } else {
    openHamburgerMenu();

  }

});

document.addEventListener('click', (event) => {
  const isClickInside = menu.contains(event.target);
  if (isMenuOpened() && !isClickInside) {
    closeHamburgerMenu();
  }
});

for (let anchor of anchors) {
  anchor.addEventListener('click', closeHamburgerMenu);
}