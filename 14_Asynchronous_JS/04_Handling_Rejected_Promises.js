"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const BASE_URL = "https://restcountries.com/v2/";

const renderCountry = function (data, className = "") {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                ).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${
                    data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                    data.currencies[0].name
                }</p>
            </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText("beforeend", msg);
};

const getCountryData = (country) => {
    // Country 1
    fetch(`${BASE_URL}name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];

            if (!neighbour) return;

            // Country 2
            return fetch(`${BASE_URL}alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => renderCountry(data, "neighbour"))
        .catch((err) => renderError(`Something went wrong ${err.message}`))
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener("click", () => getCountryData("Republic of India"));
