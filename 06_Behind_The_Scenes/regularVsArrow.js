"use strict";

const champ = {
    firstName: "Toxic",
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};
champ.greet();
champ.calcAge();
