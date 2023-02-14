"use strict";

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Don't use this
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
};

const userOne = new Person("Abhishek", 1996);
console.log(userOne);

const userTwo = new Person("Coderdeck", 2021);
console.log(userTwo);

console.log(userOne instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

userOne.calcAge();
console.log(userOne.__proto__);
console.log(userOne.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(userOne));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(userOne.species, userTwo.species);

console.log(userOne.hasOwnProperty("firstName"));
console.log(userOne.hasOwnProperty("species"));
