"use strict";

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // )
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
    getPosition()
        .then((pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        })
        .then((res) => {
            if (!res.ok)
                throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);
            return fetch(`${BASE_URL}name/${data.country}`);
        })
        .then((res) => {
            if (!res.ok) throw new Error(`Country not found ${res.status}`);
            return res.json();
        })
        .then((data) => renderCountry(data[0]))
        .catch((err) => console.log(`${err.message}`))
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener("click", whereAmI);
