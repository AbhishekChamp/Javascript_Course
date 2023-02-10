"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// Button Scrolling
btnScrollTo.addEventListener("click", function (e) {
    // OLD WAY
    /*
  const s1cords = section1.getBoundingClientRect();
    console.log(s1cords);
    console.log(e.target.getBoundingClientRect());

    console.log(
        `Current scroll (X/Y) ${(window.pageXOffset, window.pageYOffset)}`,
    );

    console.log(
        `height/width viewport ${document.documentElement.clientHeight} ${document.documentElement.clientWidth}`,
    );

    // Scrolling
    // window.scrollTo(
    //     s1cords.left + window.pageXOffset,
    //     s1cords.top + window.pageYOffset,
    // );
    window.scrollTo({
        left: s1cords.left + window.pageXOffset,
        top: s1cords.top + window.pageYOffset,
        behavior: "smooth",
    });
  */
    section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation
// NON EFFICIENT WAY (Since we use for loop)
/*
document.querySelectorAll(".nav__link").forEach((el) => {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
});
*/

// 1. Add event listerner to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});

// Tabbed Component
tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");
    console.log(clicked);
    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    tabsContent.forEach((c) =>
        c.classList.remove("operations__content--active"),
    );

    // Active tab
    clicked.classList.add("operations__tab--active");

    // Active content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
});

// Menu fade animation
const handleHover = function (e) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky Navigation
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);