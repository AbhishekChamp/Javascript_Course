"use strict";

const runOnce = function () {
    console.log("This will never run again");
};
runOnce();

(function () {
    console.log("This will run once again");
})();

(() => console.log("This is an arrow function"))();
