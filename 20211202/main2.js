// Másolás tétele

/*     let myArray = []
    let resultArray = 0;

    function copyArray(myArray) {
        let newArray = [];
        for (let i = 0; i < myArray.length; i++) {
            let resultArray = myArray[i];
            newArray.push(resultArray + 1);
        }
        return newArray;
    }
    console.log(copyArray([5, 6, 10])); */

// Nyertes lottoszelvény generátor


function randomLotto(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function otosLotto() {
    return [randomLotto(1, 90), randomLotto(1, 90), randomLotto(1, 90), randomLotto(1, 90), randomLotto(1, 90)];
}

function hatosLotto() {
    return [randomLotto(1, 45), randomLotto(1, 45), randomLotto(1, 45), randomLotto(1, 45), randomLotto(1, 45), randomLotto(1, 45)];
}

// vagy

function secondHatos() {
    let lottoszamok = [];
    for (let i = 0; i < 6; i++) {
        lottoszamok.push(randomLotto(1, 45));
    }
    return lottoszamok;
}

function skandiLotto() {
    return [randomLotto(1, 35), randomLotto(1, 35), randomLotto(1, 35), randomLotto(1, 35), randomLotto(1, 35), randomLotto(1, 35), randomLotto(1, 35)];
}

// joker, random 6 jegyű szám

function joker() {
    return Math.floor(Math.random() * 1000000);
}

// euroJackpot

function euroJackpot() {
    let aMezo = [];
    for (let i = 0; i < 5; i++) {
        aMezo.push(randomLotto(1, 50));
    }
    let bMezo = [];
    for (let j = 0; j < 2; j++) {
        bMezo.push(randomLotto(1, 10));
    } return [aMezo, bMezo];
} 


//console.log(euroJackpot());
//console.log(joker());
//console.log(otosLotto());
//console.log(hatosLotto());
//console.log(skandiLotto());

    /* function lotto(lottoTipusa) {
        switch(lottoTipusa) {
            case 'otosLotto' : return otosLotto;
            case 'hatosLotto' : return hatosLotto;
            case 'skandiLotto' : return skandiLotto;
        } break;
    }
 */
//szamologep

function osszead(a, b) {
    return a + b;
}

function kivon(a, b) {
    return a - b;
}

function szamologep(a, b, muvelet) {
    return muvelet(a, b);
}

//console.log(szamologep(1, 2, osszead));

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
each([1, 2, 3, 4, 5], console.log);

function log(szam) {
    console.log("szam: " + szam);
}
each([10, 20, 30, 40], log);