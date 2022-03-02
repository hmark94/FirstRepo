'use strict';
//1. feladat
const myPromise = new Promise((resolve, reject) => { });

myPromise
    .then(console.log('Teljesültem'));

//2. feladat
const myPromise2 = new Promise((resolve, recejt) => {
    setTimeout(() => {
        resolve(console.log('hello world'));
    }, 3000);
});


// 3. feladat
const myPromise3 = new Promise((resolve, recejt) => {
    setTimeout(() => {
        resolve('hello world');
    }, 3000);
});

myPromise3.then(
    function (value) {
        console.log('myPromise3 eredmény: ', value);
    }
);

//4. feladat
const myPromise4 = new Promise((resolve, reject) => setTimeout(() => { resolve([4, 5]) }, 3000));

const add = (arr) => arr[0] + arr[1];

myPromise4
    .then((value) => console.log(add(value)))


//5. feladat
const myPromise5 = new Promise((resolve, reject) => {reject('Hiba')});

myPromise5
    .then((value) => console.log(value))
    .catch((reason) => console.log(reason));

//6. feladat
function fgv(promi) {
    promi
        .then((value) => console.log('fv: ', value))
        .catch((reason) => console.log('fv: ', reason));
}

fgv(myPromise3);
fgv(myPromise5);


//7. feladat

const myPromise7 = new Promise((resolve, reject) => {resolve([1, 2, 3])});

myPromise7
    .then((value) => console.log('eredmény: ', value))
    .then((value) => {console.log()});


//////////////////////////////////////////////////
/* function divFromJson(json) {
    console.log(json);
    return json
};

fetch('http://localhost:3000/urls')
    .then(response => response.json())
    .then(json => json.sort())
    .then(json => divFromJson(json)) */

/////////////////////////////////////////////////
let counter = 0;
function count() {
    counter++;
}

function saveCounter(counter) {

    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({count: counter}),
    }

    fetch('http://localhost:3000/counters', init)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(reason => console.log(reason))
}
//saveCounter();