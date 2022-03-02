'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//transactions
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
    // .textContent = 0


    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}€</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements);


//creating usernames
const creatUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLocaleLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
creatUsernames(accounts);
//console.log(accounts);

const updateUI = function (acc) {
    //Display movements
    displayMovements(acc.movements);
    //Display balance
    calcDisplayBalance(acc);
    //Display summary
    calcDisplaySummary(acc);
}

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

    labelBalance.textContent = `${acc.balance}€`;
};
//calcDisplayBalance(account1.movements);


const calcDisplaySummary = function (acc) {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate) / 100).filter((int, i, arr) => int >= 1).reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
}
//calcDisplaySummary(account1.movements)
//console.log(username)

//EVENT HANDLERS
let currentAccount;


btnLogin.addEventListener('click', function (e) {

    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        //Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;
        //clear Input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        //UpdateUI
        updateUI(currentAccount);
    }

});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        //console.log('VALID TRANSFER');
        //DOING THE TRANSFER
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //Update UI
        updateUI(currentAccount);
    }

});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        //update UI
        updateUI(currentAccount);
    }

    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        //console.log(index);

        //Delete account
        accounts.splice(index, 1);

        //Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();

    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //shallow copy
console.log([...arr]); //shallow copy
console.log('++++++++++++++++++');


//Splice method
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
console.log('-------------------');
arr.splice(1, 2);
console.log(arr); //splice deleted from the original array

//reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); //mutated the original array

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //same result

//join
console.log(letters.join(' - ')); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('-------FOR OF-------')
for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`)
    } else {
        console.log(`you withdraw ${Math.abs(movement)}`);
    }
};
console.log('-------FOREACH-------')
movements.forEach(function (movement, index, array) {
    if (movement > 0) {
        console.log(`Movement ${index + 1}: You deposited ${movement}`)
    } else {
        console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
    }
}); */


// MAP
/* const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
}) */

// SET
/* const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
    console.log(`${value}: ${value}`);
}) */
/* USD: USD
GBP: GBP
EUR: EUR */


//////////////////////////////////////////////////////

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/* const juliasData = [3, 5, 2, 12, 7];
const katesData = [4, 1, 15, 8, 3];
const juliasData1 = [9, 16, 6, 8, 3];
const katesData1 = [10, 5, 6, 1, 4];



const checkDogs = (dogsJulia, dogsKate) => {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    //console.log(dogsJuliaCorrected);

    const dogs = dogsJuliaCorrected.concat(dogsKate);
    //console.log(dogs);

    dogs.forEach(function(dog, i) {
        if(dog >= 3) console.log(`The dog number ${i + 1} is an adult and ${dog} years old`);
        else console.log(`The dog number ${i + 1} is a puppy and ${dog} years old`);
    })

}; */

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);

    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

    return average;
}
//console.log(calcAverageHumanAge([3, 5, 2, 12, 7]));

//checkDogs(juliasData, katesData);
//checkDogs(juliasData1, katesData1);


// MAP - FILTER - REDUCE //////////////////////////

//Map is like forEach, just it's making a new array
//Filter is filtering out the elements of an array due to a certain condition
//Reduce boils all array elements down to one single value

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
    return mov * eurToUsd;
});

const movementsUSD_ = movements.map(mov => mov * eurToUsd);


//console.log(movements);
//console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`
);
//onsole.log(movementsDescriptions);

const deposits = movements.filter(function (mov) {
    return mov > 0;
});
//console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
//console.log(withdrawals);



const balance = movements.reduce((acc, curr) => acc + curr, 0);
//console.log(`Iteration:${i}: ${acc}`);
//console.log(balance);

// Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov)
        return acc;
    else
        return mov;
}, movements[0]);
//console.log(max);


const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
//console.log(totalDepositsUSD);

const firstWithdrawal = movements.find(mov => mov < 0);
//console.log(movements);
//console.log(firstWithdrawal);

//console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
//console.log(account);


//////////////////////////////SOME AND EVERY
//includes almost the same, it checks just for equality

const anyDeposits = movements.some(mov => mov > 5000);
//console.log(anyDeposits);

//Every
//console.log(movements.every(mov => mov > 0)); //true false if every...

//separate callback
const deposit = mov => mov > 0;

///////////////////////////////Flat & Flatmap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
//console.log(arr.flat()); [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
//console.log(arrDeep.flat(2)); //second deep

/* const accountMovements = accounts.map(acc => acc.movements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); */


///////////////////FLATMAP
const overalBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);


const overalBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);

//console.log(overalBalance2);

/////////////////SORTING ARRAYS

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); //mutates the original array

console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);

///////////////////////Creating arrays

const x = new Array(7); //7x empty array
//console.log(x);

//x.fill(1);

x.fill(1, 3, 5); // (fill with, start position, end position);
console.log(x);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

/* const diceRandom = Array.from({ length: 100 }, (_, i) => Math.trunc(Math.random() * 6) + 1);
console.log(diceRandom); */


labelBalance.addEventListener('click', function () {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));


    //console.log(movementsUI);

});

//Array methods practice///////////////////////////////

//1.
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0)


//console.log(bankDepositSum);

//2.
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

//console.log(numDeposits1000);

//3.
const sums = accounts
    .flatMap(acc => acc.movements)
    .reduce((sums, cur) => {
        //cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
        sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
        return sums;
    }, { deposits: 0, withdrawals: 0 });

//console.log(sums);


//4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
    const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word =>
            exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
        .join(' ');
    return titleCase;
}
//console.log(convertTitleCase('this is a nice title'));
//console.log(convertTitleCase('this is a long title but not too long'));
//console.log(convertTitleCase('and here is another title with an EXAMPLE'));

