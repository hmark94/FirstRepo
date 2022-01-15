'use strict';

//console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); //use strict miatt undefined
}

//calcAge(1994);

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);


// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);


//reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);


//copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2);
console.log(jessicaCopy);