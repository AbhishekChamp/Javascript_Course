"use strict";

const lotteryPromise = new Promise(function (resolve, reject) {
    console.log(`Lottery draw is happening`);
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve(`You Win`);
        } else {
            reject(new Error(`You lost your money`));
        }
    }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// Promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2)
    .then(() => {
        console.log("I waited for 2 seconds");
        return wait(1);
    })
    .then(() => console.log("I waited for 1 second"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem!")).catch((x) => console.error(x));
