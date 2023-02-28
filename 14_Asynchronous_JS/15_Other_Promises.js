"use strict";

const BASE_URL = "https://restcountries.com/v2/";

(async function () {
    const res = await Promise.race([
        getJSON(`${BASE_URL}name/portugal`),
        getJSON(`${BASE_URL}name/egypt`),
        getJSON(`${BASE_URL}name/germany`),
    ]);
    console.log(res[0]);
    console.log(res);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error("Request took too long!"));
        }, sec * 1000);
    });
};

Promise.race([getJSON(`${BASE_URL}name/Mexico`), timeout(0.01)])
    .then((res) => console.log(res[0]))
    .catch((err) => console.error(err));

Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("ERROR"),
    Promise.resolve("Another Success"),
]).then((res) => console.log(res));

Promise.any([
    Promise.resolve("Success"),
    Promise.reject("ERROR"),
    Promise.resolve("Another Success"),
]).then((res) => console.log(res));
