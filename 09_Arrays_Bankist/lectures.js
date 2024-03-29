///////////////////////////////////////////////
///////////////////////////////////////////////
LECTURES;

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// MAPS
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
    return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementDescription = movements.map((mov, i) => {
    `Movement ${i + 1}: You ${mov > 0} ? 'deposited' : 'withdrew'} ${Math.abs(
        mov,
    )}`;
});
console.log(movementDescription);

const deposits = movements.filter((mov) => mov > 0);
const withdraws = movements.filter((mov) => mov < 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

const totalDepositsUSD = movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);

const firstWithdrawl = movements.find((mov) => mov < 0);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");

// Checks for equality
console.log(movements.includes(-130));

// Checks for condition
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

const allDeposits = movements.every((mov) => mov > 0);
console.log(allDeposits);

// Flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
// Returns [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
// Returns [[1, 2], 3, 4, [5, 6], 7, 8]
console.log(arrDeep.flat(2));
// Returns [1, 2, 3, 4, 5, 6, 7, 8]

/*
const accountMovements = accounts.map(acc => acc.movements)
console.log(accountMovements)
const allMovements = accountMovements.flat()
console.log(allMovements)
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
*/

const overalBalance = accounts
    .map((acc) => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// Flatmap
const overalBalance2 = accounts
    .flatMap((acc) => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

/* -----------SORTING ------------ */

// Strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0 => A, B (keep order)
// return > 0 => B, A (reverse order)

// Ascending Order
movements.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
});
console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);

// Descending Order
movements.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
});
console.log(movements);

movements.sort((a, b) => b - a);

const x = new Array(7);
const y = new Array(7);
const z = new Array(7);
console.log(x);
// Returns [empty x 7]
x.fill(1);
console.log(x);
// Returns [1, 1, 1, 1, 1, 1, 1]
y.fill(1, 3);
console.log(y);
// Returns [ , , , 1, 1, 1, 1]
z.fill(1, 3, 5);
console.log(z);
// Returns [ , , , 1, 1, , , ]

const a = [1, 2, 3, 4, 5, 6, 7];
a.fill(25, 2, 6);
console.log(x);
// Returns [1, 2, 25, 25, 25, 25, 7]

const b = Array.from({ length: 7 }, () => 1);
console.log(b);
// Returns [1, 1, 1, 1, 1, 1, 1]

const c = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(c);
// Returns [1, 2, 3, 4, 5, 6, 7]

const bankDepositSum = accounts
    .flatMap((acc) => acc.movements)
    .filter((mov) => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

const numDeposits1000 = accounts
    .flatMap((acc) => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0);
console.log(numDeposits1000);

const { deposits2, withdrawals } = accounts
    .flatMap((acc) => acc.movements)
    .reduce(
        (sums, cur) => {
            cur > 0 ? (sums.deposits2 += cur) : (sums.withdrawals += cur);
            return sums;
        },
        { deposits2: 0, withdrawals: 0 },
    );

console.log(deposits2, withdrawals);

///////////////////////////////////////////////
///////////////////////////////////////////////
