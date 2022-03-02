'use strict';

//1. feladat
{
    const kategoria = "Fajáték";
    const termek = "Jenga Classic";
    console.log(`A ${kategoria} kategóriában a ${termek} játék megtalálható`);
}

//2. feladat
{
    const log = (kiirja) => console.log(kiirja);
    log('Hello JavaScript!');
}

//3. feladat
{
    const arrowFn = (kategoria, termek) => `A(z) ${kategoria} kategóriában a(z) ${termek} játék megtalálható`;
    console.log(arrowFn('Társasjáték', 'Catan'));
    console.log(arrowFn('Kártyajáték', 'Uno'));
}

//4. feladat
{
    const dokkolas = (...urhajo) => urhajo.forEach((arg) => {
        console.log(`${arg} dokkolt`);
    })
    dokkolas("Tie fighter 1", "Tie fighter 2", "X-Wing 1");
}

//5. feladat
{
    const planets = ["Mars", "Vénusz"];

    const planets2 = ["Föld", ...planets];
    console.log(...planets2);
}

//6. feladat
{
    const ships = ["Millenium Falcon", "J-Type Star", "Jedi Starfighters", "A-Wing"];

    let topSpeed1 = ships.find(ship => ship === "Millenium Falcon");
    let topSpeed2 = ships.find(ship => ship === "J-Type Star");
    let topSpeed3 = ships.find(ship => ship === "Jedi Starfighters");

    console.log(topSpeed1);
    console.log(topSpeed2);
    console.log(topSpeed3);
}

//7. feladat
{
    const deathStarMainFrameConfigarationSystemConfig = {
        position: { x: 123.53, y: 324.2, z: 591.1 },
        initialSpeed: 10000,
        robotPilot: true,
        capacity: 5000,
    }

    let initialSpeed = deathStarMainFrameConfigarationSystemConfig.initialSpeed;
    let position = { x: 123.53, y: 324.2 };


    // eredmeny
    console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)    // Sebesség: 10000 x,y coordinák: 123.53,324.2 
}

//8. feladat
{
    const deathStarMainFrameConfigarationSystemConfig = {
        position: { x: 123.53, y: 324.2, z: 591.1 },
        initialSpeed: 10000,
        robotPilot: true,
        capacity: 5000,
    }

    function initialConfig({ initialSpeed, position }) {  // <== Ezt az egy sort kell javítani!!!
        console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)
    }

    initialConfig(deathStarMainFrameConfigarationSystemConfig)
}

//9. feladat
{
    const deathStarMainFrameConfigarationSystemConfig = {
        position: null,
        initialSpeed: null,
        robotPilot: true,
        capacity: 5000,
        tryCatch(position, initialSpeed) {
            if (!position) {
                throw new Error('Position is missing');
            }
            if (!initialSpeed) {
                throw new Error('InitialSpeeed is missing');
            }
        }
    }

    function errorSearch() {
        try {
            position(123.45);
        }
        catch (error) {
            console.log('nem sikerült lefuttatni a configurációt!', e);
        }
    }
    //errorSearch();
}

//10. feladat
//config.js , entry.js


//11. feladat
//entry.js

//12. feladat
{
    let promise = new Promise((resolve, reject) => { resolve(8) });

    promise
        .then((value) => console.log(value));
}

//13. feladat
{
    /*
 * Params:
 *
 * resolve - Promise resolve callback
 * reject  - Promise reject callback
 */

    function cargoShipArrive(resolve, reject) {
        setTimeout(() => {
            if (Math.floor(Math.random() * 2) == 1) {
                reject("Nincs rakomány"); // nincs rakomány 
            }
            resolve(1); // 1 kg szemett beerkezett
        }, 500)
    }

    let promise = new Promise((resolve, reject) => cargoShipArrive(resolve, reject));

    promise
        .then((value) => console.log(`Összesen ${value * 300} kredit került levonásra`))
        .catch((reason) => console.log('Promise catch: ', reason));
}

//14. feladat

{
    const zoo = fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(reason => console.log(reason));

    zoo
    .then((value) => value.json())
    .then(jsonObj => console.log(jsonObj.name, jsonObj.latin_name));
}