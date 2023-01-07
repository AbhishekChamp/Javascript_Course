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
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);
