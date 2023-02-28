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
    countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
};

const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`${BASE_URL}name/${c1}`);
        // const [data2] = await getJSON(`${BASE_URL}name/${c2}`);
        // const [data3] = await getJSON(`${BASE_URL}name/${c3}`);
        const data = await Promise.all([
            getJSON(`${BASE_URL}name/${c1}`),
            getJSON(`${BASE_URL}name/${c2}`),
            getJSON(`${BASE_URL}name/${c3}`),
        ]);
        console.log(data.map((d) => d[0].capital));
    } catch (err) {
        console.log(err);
    }
};

get3Countries("portugal", "canada", "republic of India");
