"use strict";

// Coding Challenge #1
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
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
