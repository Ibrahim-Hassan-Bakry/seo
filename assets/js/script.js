/* 
Start toggleMenu
======================================================================
*/
let navMenue = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("toggle-menu");

toggleMenu.addEventListener("click", function () {
  navMenue.classList.toggle("show");
  toggleMenu.classList.toggle("active");
});

/* 
End toggleMenu
======================================================================
*/

/* 
Start Fixed Nav Bar 
======================================================================
*/

let nav = document.querySelector(".main");

window.addEventListener("scroll", fixNav);
function fixNav() {
  if (window.scrollY > nav.offsetHeight + 170) {
    nav.classList.add("top-nav");
  } else {
    nav.classList.remove("top-nav");
  }
}

/* 
End Fixed Nav Bar 
======================================================================
*/

/*
Start Cirular progress
======================================================================
*/

// main
let cirularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndValue = 98,
  speed = 50;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;

  cirularProgress.style.background = `conic-gradient(#db4a3f ${
    progressStartValue * 3.6
  }deg, #0d7bc0 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

// number 1

let cirularProgress1 = document.querySelector(".circular-progress1"),
  progressValue1 = document.querySelector(".progress-value1");

let progressStartValue1 = 0,
  progressEndValue1 = 89,
  speed1 = 50;

let progress1 = setInterval(() => {
  progressStartValue1++;

  progressValue1.textContent = `${progressStartValue1}%`;

  cirularProgress1.style.background = `conic-gradient(#db4a3f ${
    progressStartValue1 * 3.6
  }deg, #0d7bc0 0deg)`;

  if (progressStartValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);

// number 2

let cirularProgress2 = document.querySelector(".circular-progress2"),
  progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,
  progressEndValue2 = 90,
  speed2 = 50;

let progress2 = setInterval(() => {
  progressStartValue2++;

  progressValue2.textContent = `${progressStartValue2}%`;

  cirularProgress2.style.background = `conic-gradient(#db4a3f ${
    progressStartValue2 * 3.6
  }deg, #0d7bc0 0deg)`;

  if (progressStartValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

// number 3

let cirularProgress3 = document.querySelector(".circular-progress3"),
  progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,
  progressEndValue3 = 90,
  speed3 = 50;

let progress3 = setInterval(() => {
  progressStartValue3++;

  progressValue3.textContent = `${progressStartValue3}%`;

  cirularProgress3.style.background = `conic-gradient(#db4a3f ${
    progressStartValue3 * 3.6
  }deg, #0d7bc0 0deg)`;

  if (progressStartValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);

// number 4

let cirularProgress4 = document.querySelector(".circular-progress4"),
  progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0,
  progressEndValue4 = 93,
  speed4 = 50;

let progress4 = setInterval(() => {
  progressStartValue4++;

  progressValue4.textContent = `${progressStartValue4}%`;

  cirularProgress4.style.background = `conic-gradient(#db4a3f ${
    progressStartValue4 * 3.6
  }deg, #0d7bc0 0deg)`;

  if (progressStartValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);

/*
End Cirular progress
======================================================================
*/

/*
Start clients
======================================================================
*/

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 5,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

/*
End clients
======================================================================
*/


