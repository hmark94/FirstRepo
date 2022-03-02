'use strict';

const Person = function (firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this
    /*     this.clacAge = function() {
            console.log(2037 - this.birthYear);
        }; */
}

const mark = new Person('Mark', 1994);
//console.log(mark);

// 1. New empty object is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1973);
//console.log(matilda, jack);

//console.log(mark instanceof Person);

//Prototypes
//console.log(Person.prototype)

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

//mark.calcAge();
//matilda.calcAge();

//console.log(mark.__proto__);
//console.log(mark.__proto__.__proto__);

const arr = [3, 4, 5, 6, 3, 7, 9, 5, 3];
//console.log(arr.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

//console.log(arr.unique());

const h1 = document.querySelector('h1');

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed}km/h`)
};
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed}km/h`)
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

/* bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake(); */

//console.log(bmw, mercedes)

/////////////////////ES6 CLASSES

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    clacAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }
};

const jessica = new PersonCl('Jessica', 1996);
//console.log(jessica);
//console.log(jessica.age)

Person.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
};
//jessica.greet();

const account = {
    owner: 'jonas',
    movements: [200, 300, 120, 540],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov)
    },

};

//console.log(account.latest);

account.latest = 50;
//console.log(account.movements);

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}