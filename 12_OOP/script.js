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

console.log(userOne.__proto__.__proto__);
console.log(userOne.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 4, 5, 2, 5, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

// Class Declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

const userThree = new PersonCl("Coderdeck", 2021);
console.log(userThree);
userThree.calcAge();

console.log(userThree.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
};

userThree.greet();
