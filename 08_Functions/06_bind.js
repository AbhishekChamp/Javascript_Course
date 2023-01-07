"use strict";

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, "Champ");
lufthansa.book(635, "Coderdeck");

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(234, 'Coding')

book.call(eurowings, 234, "Coding");
book.call(lufthansa, 340, "Toxic");

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
};

book.call(swiss, 575, "Champ");

const flightData = [543, "Coderdeck"];
// Apply method
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(24, "Steve");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Champ");
bookEW23("Coderdeck");

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
