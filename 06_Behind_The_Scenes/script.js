"use strict";

// SCOPING

function clacAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);

    function printAge() {
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);
    }

    if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);

        function add(a, b) {
            return a + b;
        }
        console.log(add(2, 3));
    }

    console.log(millenial);
    // console.log(add(2, 3));
    printAge();

    return age;
}

const firstName = "Champ";

clacAge(1996);
