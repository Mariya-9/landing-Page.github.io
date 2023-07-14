/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const mainUl = document.querySelector("#navbar__list");
let landingSection = document.querySelectorAll("section");
let hideNavbar = document.querySelector(".header-ul");
let hide = document.querySelectorAll("nav");
let topButton = document.querySelector(".scrollTop");
const windowsInnerHeight = window.innerHeight;
const selfInnerHight = self.innerHeight;
const windowsInnerWidth = window.innerWidth;
let documentEl = document.documentElement;

// Dropdown Menu Declaration
const mainD = document.querySelector("#dropdown-list");
const toggleBtn = document.querySelector(".btn-toggle");
const toggleBtnIcon = document.querySelector(".btn-toggle i");
const dropDownMenu = document.querySelector(".dropdown-menu");
const toggleB = document.querySelector("#dropDown-btn");
const containerL = document.querySelector(".landing-container");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

for (let i = 1; i <= 4; i++) {
  const newLi = document.createElement("li");
  newLi.setAttribute(
    "style",
    " color:rgb(24, 18, 43); font-size:1em; margin:1.2em;  cursor: pointer; padding:0.6em; list-style: none;   border: 2px solid rgb(24, 18, 43); width:194px; height:70px   background-color: rgb(24, 18, 43);"
  );
  //   newLi.setAttribute("class", " section" + i + " box");
  newLi.setAttribute("class", ` nav-item box`);
  for (let j = 1; j <= 1; j++) {
    const newAnchor = document.createElement("a");
    newAnchor.textContent = "Section" + i;
    newAnchor.href = "#section" + i;
    newAnchor.setAttribute("class", "nav-list box");
    newAnchor.setAttribute(
      "style",
      "color: inherit; font-weight:bold; text-decoration: none ; margin: 0.5em;font-family: 'Quicksand', sans-serif;font-size: 1.6em; padding-left: 2em; padding-right: 2.15em; margin-left: -0.67em; padding-top: 0.67em; padding-bottom: 0.67em;  "
    );

    function respondToTheClick() {}

    newAnchor.addEventListener("click", respondToTheClick);
    newAnchor.removeEventListener("click", respondToTheClick);
    newLi.appendChild(newAnchor);
  }

  mainUl.appendChild(newLi);
}

//Create Dropdownlist

for (let i = 1; i <= 4; i++) {
  const newD = document.createElement("li");
  newD.setAttribute(
    "style",
    " padding:1rem; display:flex; align-item:center; justify-content:center; text-decoration: none; list-style: none; "
  );

  newD.setAttribute("class", "dropdown-nav-list");
  for (let j = 1; j <= 1; j++) {
    const newA = document.createElement("a");
    newA.textContent = "Section" + i;
    newA.href = "#section" + i;

    newA.setAttribute(
      "style",
      " color:#fff; text-decoration: none; padding-left:2.5em;padding=1rem "
    );
    function respondToTheClick() {}

    newA.addEventListener("click", respondToTheClick);
    newA.removeEventListener("click", respondToTheClick);
    newD.appendChild(newA);
  }

  mainD.appendChild(newD);
}

// Dropdown list function for opening the list
document.onclick = function (e) {
  if (
    e.target.id !== "dropDown-btn" &&
    e.target.className !== "header-ul" &&
    e.target.className !== "btn-toggle"
  ) {
    toggleB.classList.remove("open");
    dropDownMenu.classList.remove("open");
  }
};

toggleB.onclick = function () {
  toggleB.classList.toggle("open");
  dropDownMenu.classList.toggle("open");
};

// Add class 'active' to section when near top of viewport
function boundingActivate() {
  landingSection.forEach((sec) => {
    const boundHeight = sec.getBoundingClientRect().height;
    if (boundHeight < windowsInnerHeight) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", boundingActivate);
boundingActivate();

// Scroll to anchor ID using scrollTO event
// Set sections as active
// Build menu
// Scroll to section on link click

window.addEventListener("scroll", () => {
  landingSection.forEach((section) => {
    const sectionId = section.getAttribute("id");
    if (
      window.scrollY > section.offsetTop - 20 &&
      window.scrollY < section.offsetTop + section.offsetHeight - 30
    ) {
      document
        .querySelector(`a[href^="#${section.id}"]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`a[href^="#${section.id}"]`)
        .classList.remove("active");
    }
  });
});

//

// Top Button
function buttonScrolledTop() {
  documentEl.scrollIntoView({
    top: 0,
    behavior: "smooth",
  });
}
topButton.addEventListener("click", buttonScrolledTop);

// smooth Scroll
function smoothScroll() {
  mainUl.querySelectorAll(`a[href^="#"]`).forEach((smooth) => {
    smooth.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
smoothScroll();

/**
 * End Main Functions
 * Begin Events
 *
 */
