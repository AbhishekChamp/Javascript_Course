// Coding Challenge #3

/*
Rewrite Coding Challenge #2 in a single function

Coding Challenge #2

Use the same Julia and Kate's study about dogs data.

Create a function 'calcAverageHumanAge', which accepts an array of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using following formula: if the dog is <=2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs
4. Run the function from both test datasets

TEST DATA 1 : [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2 : [16, 6, 10, 5, 6, 1, 4]

*/

const calcAverageHumanAge = (ages) =>
    ages
        .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter((age) => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
