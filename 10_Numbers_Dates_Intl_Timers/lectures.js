// LECTURES
console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));

console.log(Number.parseInt("     2.5rem     "));
console.log(Number.parseFloat("     2.5rem     "));

// Check if value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 / 0));

// Checking if value is integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.min(5, 10, 23, 11, 2));

console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// Remainder Operator
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3);
console.log(8 / 3);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

/*
labelBalance.addEventListener("click", function () {
    [...document.querySelectorAll(".movements__row")].forEach(function (
        row,
        i,
    ) {
        if (i % 2 === 0) {
            row.style.backgroundColor = "orangered";
        }
        if (i % 3 === 0) {
            row.style.backgroundColor = "purple";
        }
    });
});
*/

// Numeric Separators
// 287, 460, 000, 000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transerFee1 = 15_00;
const transerFee2 = 1_500;
console.log(transerFee1, transerFee2);

// Not allowed
/*
const PI = _3.1415
const PI = 3_.1415
const PI = 3._1415
const PI = 3.1415_
const PI = 3.14__15
*/

const PI = 3.1415;
console.log(PI);

console.log(Number("230_000"));
// Returns NaN

// Working with BigInt

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(45678937478463738993787267182n);
console.log(BigInt(2372984730504938n));

console.log(100000n + 20000n);

const hugh = 1234438347648n;
const num = 23;
// console.log(hugh * num)
// Error : Cannot mix BigInt and other types

console.log(hugh * BigInt(num));

console.log(20n > 15);
console.log(20n === 20);
