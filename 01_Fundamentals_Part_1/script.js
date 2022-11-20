let welcome = "Hello World";
console.log((340 * 23) / 43 + 4 - 12);

console.log("Champ");
console.log(8);

let firstName = "Champ";

console.log(firstName);

// Find type
console.log(typeof true);

// Coding Challenge #1
console.log("Coding Challenge #1");

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// Coding Challenge #2
console.log("Coding Challenge #2");

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higher than Mark's");
}

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}`);
}

// Coding Challenge #3
console.log("Coding Challenge #3");

const scoreDolphins = (96 + 108 + 105) / 3;
const scoreKoalas = (98 + 97 + 110) / 3;

console.log(`Dolphins scored ${scoreDolphins}`);
console.log(`Koalas scored ${scoreKoalas}`);

if (scoreDolphins > scoreKoalas && scoreKoalas >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy!");
} else {
    console.log("No one win the trophy");
}

// Coding Challenge #4
console.log("Coding Challenge #4");

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value is ${
        bill + tip
    }`,
);
