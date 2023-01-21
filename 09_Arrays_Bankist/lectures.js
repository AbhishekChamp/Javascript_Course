///////////////////////////////////////////////
///////////////////////////////////////////////
LECTURES;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("-----For Loop Movements------");
for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

console.log("-----For Each Movements------");
movements.forEach((movement) => {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});

console.log("-----For Loop Movement with index------");
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log("-----For Each Movement with index------");
movements.forEach((movement, i) => {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
});

const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

currencies.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currencies.forEach((value, key, set) => {
    console.log(`${key}: ${value}`);
});
///////////////////////////////////////////////
///////////////////////////////////////////////
