"use strict";

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet("Hey");
greeterHey("Champ");
greeterHey("Coderdeck");

greet("Hello")("Champ");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hello")("Coderdeck");
