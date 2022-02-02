'use strict';

/* const bookings = []

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

    //ES5
    //numPassengers = numPassengers || 1;
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', 7);

createBooking('LH123', undefined, 1000); */

////////////////////////////////////////////////////

const flight = 'LH123';
const mark = {
    name: 'Mark Hatala',
    passport: 123456789
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LM456';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 123456789) {
        alert('Check In')
    } else {
        alert('Wrong passport!')
    }
}
//checkIn(flight, mark);
//console.log(flight);
//console.log(mark);

//const flightNum = flight;
//const passenger = mark;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000)
}
//newPassport(mark);
//checkIn(flight, mark);

///First-class, higher-order functions


/* const oneWord = function(str) {
    return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function() {
    console.log('👋');
}

document.body.addEventListener('click', high5);

['Mark', 'Adam', 'Martha'].forEach(high5); */


const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Mark');
greeterHey('Steven');

greet('Hello')('Mark');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Hi')('Jonas');


//////////////////////////////////////////////////////////////

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flights: `${this.iataCode}${flightNum}`, name })
    },
};

lufthansa.book(239, 'Mark Hatala');
lufthansa.book(635, 'John Doe');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//book(23, 'James Smith'); not working
book.call(eurowings, 23, 'James Smith');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 432, 'Banana Joe');
console.log(swiss);

//Aplly method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);