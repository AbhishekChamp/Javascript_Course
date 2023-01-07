"use strict";

const flight = "LH234";
const champ = {
    name: "Coderdeck Champ",
    passport: 23457829,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passport === 23457829) {
        alert("Checked In");
    } else {
        alert("Wrong Passport");
    }
};

// checkIn(flight, champ);
// console.log(flight);
// console.log(champ);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(champ);
checkIn(flight, champ);
