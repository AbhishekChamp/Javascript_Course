"use strict";

///////////////////////////////////////
const BASE_URL = "https://restcountries.com/v2/";

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
