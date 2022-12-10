"use strict";

console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAge(1996);

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAgeArrow(1996);

const champ = {
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};

champ.calcAge();

const coderdeck = {
    year: 2021,
};

coderdeck.calcAge = champ.calcAge;
coderdeck.calcAge();

const f = coderdeck.calcAge;
f();
