"use strict";

// Coding Challenge #1
console.log("Coding Challenge #1");

const average = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = average(44, 23, 71);
const scoreKoalas = average(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const winner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log("No team wins");
    }
};

winner(scoreDolphins, scoreKoalas);

winner(200, 500);

// Coding Challenge #2
console.log("Coding Challenge #2");

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// Coding Challenge #3
console.log("Coding Challenge #3");

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(
        `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`,
    );
} else if (john.bmi > mark.bmi) {
    console.log(
        `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`,
    );
}

// Coding Challenge #4
console.log("Coding Challenge #4");
const calcTip4 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips4 = [];
const totals4 = [];

for (let i = 0; i < bills4.length; i++) {
    const tip4 = calcTip(bills4[i]);
    tips4.push(tip4);
    totals4.push(tip4 + bills4[i]);
}
console.log(bills4, tips4, totals4);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(calcAverage(2, 3, 7));
console.log(calcAverage(totals4));
console.log(calcAverage(tips4));
