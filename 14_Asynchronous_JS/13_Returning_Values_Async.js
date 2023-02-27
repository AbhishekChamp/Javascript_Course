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

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function () {
    try {
        // Geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse Geocoding
        const resGeo = await fetch(
            `https://geocode.xyz/${lat},${lng}?geoit=json`,
        );
        if (!resGeo.ok) throw new Error("Problem getting location data");
        const dataGeo = await resGeo.json();

        // Country data

        // fetch(`${BASE_URL}name/${country}`).then(res => console.log(res))
        const res = await fetch(`${BASE_URL}name/${dataGeo.country}`);
        if (!resGeo.ok) throw new Error("Problem getting country");
        const data = await res.json();
        renderCountry(data[0]);
        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        renderError(`Something went wrong ${err.message}`);
        throw err;
    }
};

// console.log("1. Will get location");
// // const city = whereAmI();
// // console.log(city);
// whereAmI().then((city) =>
//     console
//         .log(`2: ${city}`)
//         .catch((err) => console.error(`2: ${err.message}`)),
// );
// console.log("3: Finished getting location");

(async function () {
    try {
        const city = await whereAmI();
        console.log(`2. ${city}`);
    } catch (err) {
        console.log(`2. ${err.message}`);
    }
    console.log(`3. Finished getting location`);
});
