/* let user = {
    name: 'Kis Hedvig',
    birthdate: '2000.10.10.',
    username: 'kiscica2',
    email: 'cica2@email.com'
}

console.log(user);
console.log(user.email); */

/* let item = {
    nev: "iphone tok",
    tipus: "iphone 12 pro",
    anyag: "szilikon",
    brand: "MagSafe",
    szin: "fekete",
    ar: "12383"
    dbszam: "1",
}

console.log(item); */

/* let aOldal = window.prompt('A oldal');
let bOldal = window.prompt('B oldal');

let terulet = aOldal * bOldal;
let kerulet = 2 * aOldal + 2 * bOldal;
let teglalap = {
    aOldal: aOldal,
    bOldal: bOldal,
    terulet: terulet,
    kerulet: kerulet,
}
console.log(teglalap);
console.log(terulet);
console.log(kerulet); */



//szamologep
/* let elsoSzam = window.prompt('Első szám');
let masodikSzam = window.prompt('Masodik szam');
let irasjel = window.prompt('Muveleti jel');
let eredmeny;

if(irasjel=="+") {
    eredmeny=Number(elsoSzam)+Number(masodikSzam);
}
else if(irasjel=="/") {
    eredmeny=Number(elsoSzam)/Number(masodikSzam);
}
else if(irasjel=="*") {
    eredmeny=Number(elsoSzam)*Number(masodikSzam);
}
else if(irasjel=="-") {
    eredmeny=Number(elsoSzam)-Number(masodikSzam);
}
else if(irasjel=!null) {
    eredmeny="Error"
}
else if(elsoSzam=!null) {
    eredmeny="Error"
}
else if(masodikSzam=!null) {
    eredmeny="Error"
}

console.log(eredmeny); */

//szam kitalalo
/* let randomSzam = Math.floor(Math.random() * 10);
window.alert(randomSzam);
let tippSzam = window.prompt('Írj be egy számot 1-10 között');

if (tippSzam === randomSzam) {
    window.alert('Helyes számra gondoltál!')
}
else if (randomSzam === tippSzam - 2) {
    window.alert('Közel jársz, de kicsit kisebb a szám')
}
else if (randomSzam === tippSzam - 1) {
    window.alert('Közel jársz, de kicsit kisebb a szám')
}
else if (randomSzam === tippSzam + 1) {
    window.alert('Közel jársz, de kicsit nagyobb a szám')
}
else if (randomSzam === tippSzam + 2) {
    window.alert('Közel jársz, de kicsit nagyobb a szám')
} else {
    window.alert('A szám nem jó, próbáld meg megint!')
    tippSzam = window.prompt('Írj be egy számot 1-10 között')
} */

let solution = Math.floor(Math.random() * 10) + 1;
alert(solution);
let guess = Number(prompt('Mi lehet a szám?'));

if (guess === solution) {
    alert('Nyertél')
} else {
    if (solution - guess === -2) {
        guess = prompt('Közel van a megoldás')
    } else if (solution - guess === 2) {
        guess = prompt('kicsit nagyobb')
    }

    if (guess === solution) {
        alert('Nyertél')
    } else {
        alert('nem nyertél')
    }
}