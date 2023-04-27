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
Start Side Bar
======================================================================
*/

/*
End Side Bar
======================================================================
*/
