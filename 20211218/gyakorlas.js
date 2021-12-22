//alap for ciklus, meghatároztt lépés szám esetén
let ciklusfutasszam = 0;
for (let x = 1; x <= 100; x++) {
    console.log('X: ', x);
    ciklusfutasszam++;
}



let tomb2 = [1, 2, 3, 4, 5, 6];

for (let tombElem of tomb2) {
    console.log(tombElem);
}

//for..in
let obj = {
    nev: 'Jolan',
    kor: 32
}
for(let objElem in obj) {
    console.log(objElem);
}


// hátul tesztelő ciklus
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 0);

// fv. deklaráció

function fv(parameter) {

}

//fv hivasa
fv('aktualis parameter')

//fvbol visszateres
function visszateresNelkul() {
    //return undefined
}

function visszateressel() {
    return 1;
}

//fv kifejezes
                        //nem kötelező a deklarációs
let fvNeve = function deklaraciosNev(param1, param2) {
    return param1;
}

// callback, higher order fv

function ask(szoveg, yesCallback, noCallback) {
 if (confirm(szoveg)) {
    yesCallback()
 } else {
    noCallback()
 }
}
let yes = function() {
    alert('Yes');
}

let no = function() {
    alert('No');
}

ask('Biztos folytatod?', yes, no);

// confrim true/false-t ad vissza

