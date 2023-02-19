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

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static Method
    static hey() {
        console.log("Hey there");
        console.log(this);
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

const account = {
    owner: "Champ",
    movements: [100, 300, 400, 600],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const personOne = Object.create(PersonProto);
console.log(personOne);

personOne.name = "Champ";
personOne.birthYear = 1996;
personOne.calcAge();

console.log(personOne.__proto__ === PersonProto);

// Inheritance Between "Classes": Constructor functions
const PersonConstructor = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    PersonConstructor.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(PersonConstructor.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(
            `I'm ${
                2037 - this.birthYear
            } years old, but as a student I feel more like ${
                2037 - this.birthYear + 10
            }`,
        );
    }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
