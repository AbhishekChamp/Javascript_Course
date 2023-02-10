///////////////////////////////////////
// Lectures

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// Creating and Inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cokkie for improved functionality and analytics";
message.innerHTML = `We use cokkie for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message)
// header.after(message)

// Delete Elements
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
    message.remove();
});

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";
logo.setAttribute("company", "Bankist");

// Non-standard attributes
console.log(logo.designer); // <img src='' alt='' designer='' />

// Data attributes
console.log(logo.dataset.versionNumber); // <img src='' alt='' data-version-number='' />

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");

// Don't use
logo.className = "nav"; // Overwrite all the existing classes

// Types of Events and Event Handlers
const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", (e) => alert(`You're reading heading`));
h1.onmouseenter = (e) => alert(`You're reading heading`);
setTimeout(() =>
    h1.removeEventListener("mouseenter", alert(`You're reading heading`), 3000),
);

// Event Propagation
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
    console.log("LINK", e.target, e.currentTarget);
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
    console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener(
    "click",
    function (e) {
        this.style.backgroundColor = randomColor();
        console.log("NAV", e.target, e.currentTarget);
    },
    true,
);

// Stop Propagation
e.stopPropagation();

// DOM Traversing
const h1 = document.querySelector("h1");

// Going downwards child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) {
        el.style.transform = "scale(0.5)";
    }
});

// IntersectionObserver API
const obsCallback = function (entries, observer) {
    entries.forEach((entry) => {
        console.log(entry);
    });
};

const obsOption = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOption);
observer.observe(section1);
