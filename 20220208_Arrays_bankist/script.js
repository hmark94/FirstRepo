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
const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    // .textContent = 0


    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}</div>
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


//console.log(username)
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

const deposits = movements.filter(function(mov) {
    return mov > 0;
});
//console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
//console.log(withdrawals);



const balance = movements.reduce(function(acc, curr, i, arr){
    //console.log(`Iteration:${i}: ${acc}`);
    return acc + curr
}, 0);
//console.log(balance);
