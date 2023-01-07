"use strict";

const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

// Higher - order function
const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String : ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer("Champ is the best!", upperFirstWord);
transformer("Champ is the best!", oneWord);

const high5 = function () {
    console.log("✋🏻");
};

document.body.addEventListener("click", high5);
